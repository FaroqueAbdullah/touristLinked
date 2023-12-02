import IconButton, { IconButtonProps } from '@mui/material/IconButton/IconButton';
import { styled } from '@mui/material/styles';

const CustomIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    color: theme.palette.grey[500],
}));

export default function MUICustomIconButton({ ...props }) {
    return <CustomIconButton {...props} />;
}