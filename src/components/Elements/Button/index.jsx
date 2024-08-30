const Button = (props) => {
  const {
    className = 'bg-black',
    children,
    onClick = () => {},
    type = 'button',
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
