import { Button, TextField, Typography } from '@/components/atoms';
import ColorModeContext from '@/context/colorContext';
import FormLayout from '@/layout/Form';
import { useContext, useReducer, useState } from 'react';



const SignUp = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const onSubmitHandler = () => {
    console.log('state', credentials)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setCredentials((prev) => ({ ...prev, [inputName]: inputValue }))
  }
  
  // const { toggleColorMode } = useContext(ColorModeContext);

  // const toggleTheme = () => {
  //   toggleColorMode();
  // };


  return (
    <FormLayout name="Sign In" onSubmit={onSubmitHandler}>
      <TextField name="email" label="Email" onChange={ onChangeHandler }/>
      <TextField name="password" label="Password" onChange={ onChangeHandler }/>
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </FormLayout>
  );
};

export default SignUp;
