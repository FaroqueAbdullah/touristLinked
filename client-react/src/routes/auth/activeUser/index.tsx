import { Button, TextField, Typography } from '@/components/atoms';
import ColorModeContext from '@/context/colorContext';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack';
import { useContext, useReducer, useState } from 'react';



const ActivateUser = () => {
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
        <Typography variant="h2" align="center">Active User</Typography>
        <TextField name="code" label="Activation Code" onChange={ onChangeHandler }/>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        <Typography variant="p">Don't have an account? Register</Typography>
      </Stack>
    </FormLayout>
  );
};

export default ActivateUser;
