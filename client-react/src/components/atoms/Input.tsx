import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({

}));

export default function MUITextField({ ...props }) {
  return <CustomTextField fullWidth variant="standard" {...props} />;
}
