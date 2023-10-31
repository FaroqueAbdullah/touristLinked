import { Button, TextField, Typography } from '@/components/atoms';
import FormLayout from '@/layout/FormLayout';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const ActivateUser = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const onSubmitHandler = () => {
    console.log('state', credentials);
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
          Active User
        </Typography>
        <TextField
          name="code"
          label="Activation Code"
          onChange={onChangeHandler}
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Stack>
    </FormLayout>
  );
};

export default ActivateUser;
