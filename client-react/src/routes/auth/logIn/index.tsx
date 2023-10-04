import { Button, LinkText, TextField, Typography } from '@/components/atoms';
import ColorModeContext from '@/context/colorContext';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack';
import { useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const navigate = useNavigate(); 

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    
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
        <Typography variant="h2" align="center">Log In</Typography>
        <TextField name="email" label="Email" onChange={ onChangeHandler }/>
        <TextField name="password" label="Password" onChange={ onChangeHandler }/>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        <LinkText normalText="Don't have an account?" linkText="Register" linkRef="/auth/register" />
      </Stack>
    </FormLayout>
  );
};

export default LogIn;
