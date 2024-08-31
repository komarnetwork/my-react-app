import { useEffect, useState } from 'react';
import Button from '../components/Elements/Button';
import CartProduct from '../components/Fragments/CardProduct';

const products = [
  {
    id: 1,
    name: 'Apple Watch Series 7 GPS',
    price: 599000,
    image: 'https://picsum.photos/350/200.webp',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          accusamus necessitatibus vero rem neque officia nobis iusto, minima
          aut adipisci.`,
  },
  {
    id: 2,
    name: 'Apple Watch Series 6',
    price: 400000,
    image: 'https://picsum.photos/350/200.webp',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusamus necessitat.`,
  },
  {
    id: 3,
    name: 'Apple Watch Series 5',
    price: 300000,
    image: 'https://picsum.photos/350/200.webp',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusamus necessitat.`,
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
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

  return (
    <>
      <div className='flex justify-end h-16 bg-blue-600 text-white items-center px-5'>
        <p>{email}</p>
        <Button className='bg-black ml-5' onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className='flex justify-center py-5'>
        <div className='w-2/3 md:w-3/4 flex flex-wrap'>
          {products.map((product) => (
            <CartProduct key={product.id}>
              <CartProduct.Header image={product.image} />
              <CartProduct.Body name={product.name}>
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
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                if (product) {
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>
                        {product.price.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
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
                  {totalPrice.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
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
