import EventIcon from '@mui/icons-material/Event';
import { styled } from '@mui/material/styles';

const CustomEventIcon = styled(EventIcon)(({ theme }) => ({
    color: theme.palette.text.primary
}));

export default function MUIEventIcon({ ...props }) {
    return <CustomEventIcon {...props} />;
}