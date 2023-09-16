import { Button, TextField, Typography } from '@/components/atoms';
import ColorModeContext from '@/context/colorContext';
import FormLayout from '@/layout/Form';
import { useContext } from 'react';

const SignUp = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  const toggleTheme = () => {
    toggleColorMode();
  };

  return (
    <FormLayout>
      <TextField label="Email" />
      <TextField label="Password" />
      <Button variant="outlined" onClick={toggleTheme}>
        Submit
      </Button>
    </FormLayout>
  );
};

export default SignUp;
