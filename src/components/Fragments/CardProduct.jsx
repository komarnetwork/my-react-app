import Button from '../Elements/Button';

const CartProduct = (props) => {
  const { children } = props;
  return (
    <div className='w-full max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow mx-2'>
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href='#'>
      <img className='p-5 rounded-t-lg' src={image} alt='product image' />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className='px-5 pb-5 text-white'>
      <a href='#'>
        <h5 className='text-xl font-semibold tracking-tight'>{title}</h5>
      </a>
      <p className='py-1'>{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className='flex items-center justify-between px-5 pb-5'>
      <span className='text-3xl font-bold text-white'>{price}</span>
      <Button className='bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
        Add to cart
      </Button>
    </div>
  );
};

CartProduct.Header = Header;
CartProduct.Body = Body;
CartProduct.Footer = Footer;

export default CartProduct;
