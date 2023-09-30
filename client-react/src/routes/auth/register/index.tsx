import { Button, LinkText, TextField, Typography } from '@/components/atoms';
import ColorModeContext from '@/context/colorContext';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack';
import { useContext, useReducer, useState } from 'react';



const Register = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const onSubmitHandler = () => {
    console.log('state', credentials)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setCredentials((prev) => ({ ...prev, [inputName]: inputValue }))
  }
  
  const { toggleColorMode } = useContext(ColorModeContext);

  const toggleTheme = () => {
    console.log('color mode updated')
    toggleColorMode();
  };


  return (
    <FormLayout onSubmit={onSubmitHandler}>
      <Stack 
        spacing={2}
      >
        <Typography variant="h2" align="center">Register</Typography>
        <TextField name="first_name" label="First Name" onChange={ onChangeHandler }/>
        <TextField name="last_name" label="Last Name" onChange={ onChangeHandler }/>
        <TextField name="email" label="Email" onChange={ onChangeHandler }/>
        <TextField name="password" label="Password" onChange={ onChangeHandler }/>
        <TextField name="password" label="Confirm Password" onChange={ onChangeHandler }/>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        <LinkText normalText="Already have an account?" linkText="Log In" linkRef="/auth/login" />
      </Stack>
    </FormLayout>
  );
};

export default Register;
