import { Button, LinkText, TextField, Typography } from '@/components/atoms';
import ColorModeContext from '@/context/colorContext';
import FormLayout from '@/layout/FormLayout';
import { AppDispatch } from '@/store';
import { createUser } from '@/store/asyncThunk/userThunk';
import Stack from '@mui/material/Stack';
import { useContext, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const [credentials, setCredentials] = useState({ 
    firstName: '',
    lastName: '',
    email: '', 
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); 

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(createUser( credentials ) )
      .then( ( data ) => {
        if ( data.type === "/auth/register/fulfilled" ) {
          navigate('/')
        }
      })
      .catch((error) => {
        console.log('errrrr ', error)
      })
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
        <TextField name="firstName" label="First Name" type="text" onChange={ onChangeHandler }/>
        <TextField name="lastName" label="Last Name" type="text" onChange={ onChangeHandler }/>
        <TextField name="email" label="Email" type="email" onChange={ onChangeHandler }/>
        <TextField name="phoneNumber" label="Phone Number" type="tel" onChange={ onChangeHandler }/>
        <TextField name="password" label="Password" type="password" onChange={ onChangeHandler }/>
        <TextField name="confirmPassword" label="Confirm Password" type="password" onChange={ onChangeHandler }/>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        <LinkText normalText="Already have an account?" linkText="Log In" linkRef="/auth/login" />
      </Stack>
    </FormLayout>
  );
};

export default Register;
