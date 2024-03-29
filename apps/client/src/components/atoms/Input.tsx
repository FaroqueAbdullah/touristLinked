import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)<TextFieldProps>(() => ({}));

export default function MUITextField({ ...props }) {
  return <CustomTextField fullWidth variant="outlined" {...props} />;
}
