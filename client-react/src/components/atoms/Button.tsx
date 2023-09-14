import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)< ButtonProps >(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  "&:hover": {
    background: theme.palette.primary.main
  }
}))


export default function MUIButton({ ...props }) {
  return <CustomButton {...props} />
}

