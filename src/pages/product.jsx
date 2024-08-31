import { useEffect, useRef, useState } from 'react';
import Button from '../components/Elements/Button';
import CartProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/products.service';
import { useLogin } from '../hooks/useLogin';

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

  const handleAddToCartRef = (id) => {
    // if (cartRef.current.find((item) => item.id === id)) {
    //   setCart(
    //     cartRef.current.map((item) =>
    //       item.id === id ? { ...item, qty: item.qty + 1 } : item
    //     )
    //   );
    // } else {
    //   setCart([...cartRef.current, { id, qty: 1 }]);
    // }
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem('cart', JSON.stringify(cartRef.current));
  };

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className='flex justify-end h-16 bg-blue-600 text-white items-center px-5'>
        <p>{username}</p>
        <Button className='bg-black ml-5' onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className='flex justify-center py-5'>
        <div className='w-2/3 md:w-3/4 flex flex-wrap'>
          {products.length > 0 &&
            products.map((product) => (
              <CartProduct key={product.id}>
                <CartProduct.Header image={product.image} />
                <CartProduct.Body name={product.title}>
                  {product.description}
                </CartProduct.Body>
                <CartProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CartProduct>
            ))}
        </div>

        <div className='w-3/6 sm:w-2/4'>
          <h1 className='text-3xl font-bold text-blue-500 ml-5 mb-2'>Cart</h1>
          <table className='text-left table-auto border-separate border-spacing-x-5'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  if (product) {
                    return (
                      <tr key={item.id}>
                        <td>{product.title.substring(0, 20)}...</td>
                        <td>
                          {product.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                        </td>
                        <td>{item.qty}</td>
                        <td>
                          {(item.qty * product.price).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                        </td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                })}
              <tr className='font-bold'>
                <td colSpan={3}>Total Price</td>
                <td>
                  {totalPrice.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
