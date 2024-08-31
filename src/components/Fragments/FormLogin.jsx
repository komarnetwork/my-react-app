import { useEffect, useRef } from 'react';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = '/products';
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label='Email'
        id='email'
        type='email'
        placeholder='example@mail.com'
        name='email'
        ref={emailRef}
      />

      <InputForm
        label='Password'
        id='password'
        type='password'
        placeholder='*****'
        name='password'
      />
      <Button className='bg-blue-600 w-full' type='submit'>
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
