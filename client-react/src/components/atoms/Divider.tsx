import Button, { ButtonProps } from '@mui/material/Button';
import Divider, { DividerProps } from '@mui/material/Divider/Divider';
import { styled } from '@mui/material/styles';

const CustomDivider = styled(Divider)<DividerProps>(({ theme }) => ({
  background: theme.palette.grey[500],
  padding: "0px"
}));

export default function MUIDivider({ ...props }) {
  return <CustomDivider {...props} />;
}