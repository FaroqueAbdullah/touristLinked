import { Button, LinearProgress, LinkText, TextField, Typography } from '@/components/atoms';
import ErrorText from '@/components/atoms/ErrorField';
import FormLayout from '@/layout/FormLayout';
import UserService from '@/services/http/user';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const ActivateUser = () => {
  const [token, setToken] = useState({ token: '' });

  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    UserService.activateUser(token)
    .then(() => {
      setLoading(false);
    })
    .catch((error) => {
      setErrorMsg(error.message);
      setLoading(false);
    });
  };

  const onResendEmail = () => {
    console.log('resen asdfsa ');
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setToken((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  return (
    <FormLayout onSubmit={onSubmitHandler}>
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Active User
        </Typography>
        <TextField
          name="token"
          label="Activation Code"
          onChange={onChangeHandler}
          type="text"
        />
        {
          isLoading ? <LinearProgress /> : <ErrorText errorText={errorMsg} />
        }
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        <LinkText
          linkText="Resend Email"
          onLinkClick={onResendEmail}
        />
      </Stack>
    </FormLayout>
  );
};

export default ActivateUser;
