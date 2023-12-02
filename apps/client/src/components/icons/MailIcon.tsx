import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';

const CustomMailIcon = styled(MailIcon)(({ theme }) => ({
    color: theme.palette.text.primary
}));

export default function MUIMailIcon({ ...props }) {
    return <CustomMailIcon {...props} />;
}