import Button from '../Elements/Button';

const CartProduct = (props) => {
  const { children } = props;
  return (
    <div className='w-full max-w-xs bg-gray-800 border border-gray-200 rounded-lg shadow mx-3 my-2 flex flex-col justify-between'>
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href='#'>
      <img
        className='p-5 rounded-t-lg h-60 w-full object-cover'
        src={image}
        alt='product image'
      />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className='px-5 pb-5 text-white h-full'>
      <a href='#'>
        <h5 className='text-xl font-semibold tracking-tight'>
          {name.substring(0, 20)} ...
        </h5>
      </a>
      <p className='py-1'>{children.substring(0, 100)} ...</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className='flex items-center justify-between px-5 pb-5'>
      <span className='text-lg font-bold text-white'>
        {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </span>
      <Button
        className='bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
        onClick={() => handleAddToCart(id)}
      >
        Add to cart
      </Button>
    </div>
  );
};

CartProduct.Header = Header;
CartProduct.Body = Body;
CartProduct.Footer = Footer;

export default CartProduct;
