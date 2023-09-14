import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const CustomTypography = styled(Typography)< TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary
}))


export default function MUITypography({ ...props }) {
  return <CustomTypography {...props} />
}