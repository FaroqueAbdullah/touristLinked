import Link, { LinkProps } from '@mui/material/Link';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

interface LinkTextProps {
  normalText?: string;
  linkText: string;
  linkRef: string;
}

const CustomTypography = styled(Typography)< TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  display: "inherit",
  fontSize: '12px',
  whiteSpace: 'nowrap'
}))

const CustomLink = styled(Link)< LinkProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '12px',
  marginLeft: "2px"
}))


export default function LinkText({ normalText, linkText, linkRef }: LinkTextProps) {
  return <CustomTypography>
    {normalText && normalText}
    <CustomLink href={linkRef}>
      {linkText}
    </CustomLink>
  </CustomTypography>
}