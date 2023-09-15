import CustomButton from '@/components/atoms/Button';
import MUITypography from '@/components/atoms/Typography';
import ColorModeContext from '@/context/colorContext';
import { useContext } from 'react';

const SignUp = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  const toggleTheme = () => {
    toggleColorMode();
  };

  return (
    <>
      <MUITypography>sadfasdf</MUITypography>
      <CustomButton variant="outlined" onClick={toggleTheme}>
        Buttond
      </CustomButton>
    </>
  );
};

export default SignUp;
