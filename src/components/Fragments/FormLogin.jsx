import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormLogin = () => {
  return (
    <form action=''>
      <InputForm
        label='Email'
        id='email'
        type='email'
        placeholder='example@mail.com'
        name='email'
      />

      <InputForm
        label='Password'
        id='password'
        type='password'
        placeholder='*****'
        name='password'
      />
      <Button className='bg-blue-600 w-full'>Login</Button>
    </form>
  );
};

export default FormLogin;
