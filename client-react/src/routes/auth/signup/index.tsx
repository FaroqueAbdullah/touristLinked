import CustomButton from "@/components/atoms/Button"
import MUITypography from "@/components/atoms/Typography";
import useMode from '@/hooks/useTheme';

const SignUp = () => {
  const {colorMode} = useMode();
  
  const toggleTheme = () => {
    colorMode
  }

  return (
    <>
    <MUITypography>sadfasdf</MUITypography>
    <CustomButton variant="outlined" onClick={toggleTheme}>Buttond</CustomButton>
    </>
    
  )
}

export default SignUp;