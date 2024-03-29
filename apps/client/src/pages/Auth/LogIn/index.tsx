import { Button, LinearProgress, LinkText, TextField, Typography } from '@/components/atoms';
import ErrorText from '@/components/atoms/ErrorField';
import { useAuth } from '@/hooks/useAuth';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { loginUser } = useAuth();

  const navigate = useNavigate();

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    loginUser(credentials)
      .then(() => {
        navigate('/');
        setLoading(false);
      })
      .catch( error =>  {
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
          Log In
        </Typography>
        <TextField
          name="email"
          type="email"
          label="Email"
          onChange={onChangeHandler}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          onChange={onChangeHandler}
        />
        {
          isLoading ? <LinearProgress /> : <ErrorText errorText={errorMsg} />
        }
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        <LinkText
          normalText="Don't have an account?"
          linkText="Register"
          linkRef="/auth/register"
        />
      </Stack>
    </FormLayout>
  );
};

export default LogIn;
