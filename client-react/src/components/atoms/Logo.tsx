import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const CustomBrandLogo = styled(Typography)< TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "26px",
}))


export default function BrandLogo({ ...props }) {
  return <CustomBrandLogo variant='h1' align='center'>TouristLinked</CustomBrandLogo>
}