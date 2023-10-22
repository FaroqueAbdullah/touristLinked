import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { styled } from '@mui/material/styles';

const CustomColorButton = styled(WbSunnyIcon)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export default function MUIWbSunnyIcon({ ...props }) {
  return <CustomColorButton {...props} />;
}