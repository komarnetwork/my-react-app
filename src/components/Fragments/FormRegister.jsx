import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormRegister = () => {
  return (
    <form action=''>
      <InputForm
        label='Fullname'
        id='text'
        type='text'
        placeholder='insert your name here ...'
        name='fullname'
      />
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
      <InputForm
        label='Confirm Password'
        id='confirmPassword'
        type='password'
        placeholder='*****'
        name='confirmPassword'
      />
      <Button className='bg-blue-600 w-full'>Register</Button>
    </form>
  );
};

export default FormRegister;
