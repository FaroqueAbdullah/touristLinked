import Button, { ButtonProps } from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';

const width = "auto"
const color = "red"


const CustomButton = styled(Button)< ButtonProps >(() => ({
  width: width
}))


export default function MUIButton({ ...props }) {
  const theme = useTheme()
  console.log('fsadfasdf', theme)
  return <CustomButton {...props} />
}

