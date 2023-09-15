import { Button, TextField, Typography } from '@/components/atoms';
import ColorModeContext from '@/context/colorContext';
import { useContext } from 'react';

const SignUp = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  const toggleTheme = () => {
    toggleColorMode();
  };

  return (
    <>
      <TextField label="Input" />
      <Typography variant="h1">sadfasdf</Typography>
      <Button variant="outlined" onClick={toggleTheme}>
        Buttond
      </Button>
    </>
  );
};

export default SignUp;
