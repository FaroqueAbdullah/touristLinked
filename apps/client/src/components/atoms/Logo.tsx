import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

interface BrandLogoProps {
  onLogoClick?: () => void;
}

const CustomBrandLogo = styled(Typography)< TypographyProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '1.6rem',
    cursor: 'pointer'
}));


export default function BrandLogo({ ...props }: BrandLogoProps) {
    return <CustomBrandLogo onClick={props.onLogoClick} variant='h1' align='center'>TouristLinked</CustomBrandLogo>;
}