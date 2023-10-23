import PermMediaIcon from '@mui/icons-material/PermMedia';
import { styled } from '@mui/material/styles';

const CustomMediaIcon = styled(PermMediaIcon)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export default function MUIMediaIcon({ ...props }) {
  return <CustomMediaIcon {...props} />;
}