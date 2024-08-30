import CartProduct from '../components/Fragments/CardProduct';

const products = [
  {
    id: 1,
    name: 'Apple Watch Series 7 GPS',
    price: '$599',
    image: 'https://picsum.photos/350/200.webp',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          accusamus necessitatibus vero rem neque officia nobis iusto, minima
          aut adipisci.`,
  },
  {
    id: 2,
    name: 'Apple Watch Series 6',
    price: '$400',
    image: 'https://picsum.photos/350/200.webp',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusamus necessitat.`,
  },
];

const ProductsPage = () => {
  return (
    <div className='flex justify-center py-5'>
      {products.map((product) => (
        <CartProduct key={product.id}>
          <CartProduct.Header image={product.image} />
          <CartProduct.Body name={product.name}>
            {product.description}
          </CartProduct.Body>
          <CartProduct.Footer price={product.price} />
        </CartProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
