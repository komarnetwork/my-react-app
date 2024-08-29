const Button = (props) => {
  const { className = 'bg-black', children } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
      type='submit'
    >
      {children}
    </button>
  );
};

export default Button;
