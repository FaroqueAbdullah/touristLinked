import { Button, LinearProgress, LinkText, TextField, Typography } from '@/components/atoms';
import ErrorText from '@/components/atoms/ErrorField';
import FormLayout from '@/layout/FormLayout';
import UserService from '@/services/http/user';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    UserService.createUser(credentials)
      .then(() => {
        setLoading(false);
        navigate('/auth/user-activate');
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setLoading(false);
      });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setCredentials((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  return (
    <FormLayout onSubmit={onSubmitHandler}>
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Register
        </Typography>
        <TextField
          name="firstName"
          label="First Name"
          type="text"
          onChange={onChangeHandler}
        />
        <TextField
          name="lastName"
          label="Last Name"
          type="text"
          onChange={onChangeHandler}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          onChange={onChangeHandler}
        />
        <TextField
          name="phoneNumber"
          label="Phone Number"
          type="tel"
          onChange={onChangeHandler}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={onChangeHandler}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          onChange={onChangeHandler}
        />
        {
          isLoading ? <LinearProgress /> : <ErrorText errorText={errorMsg} />
        }
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        <LinkText
          normalText="Already have an account?"
          linkText="Log In"
          linkRef="/auth/login"
        />
      </Stack>
    </FormLayout>
  );
};

export default Register;
