import CartProduct from '../components/Fragments/CardProduct';

const ProductsPage = () => {
  return (
    <div className='flex justify-center py-5'>
      <CartProduct>
        <CartProduct.Header image='https://picsum.photos/350/200.webp' />
        <CartProduct.Body title='Apple Watch Series 7 GPS'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          accusamus necessitatibus vero rem neque officia nobis iusto, minima
          aut adipisci.
        </CartProduct.Body>
        <CartProduct.Footer price='$599' />
      </CartProduct>
    </div>
  );
};

export default ProductsPage;
