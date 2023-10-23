import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { styled } from '@mui/material/styles';

const CustomLocationIcon = styled(AddLocationAltIcon)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export default function MUILocationIcon({ ...props }) {
  return <CustomLocationIcon {...props} />;
}