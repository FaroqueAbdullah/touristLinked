import Link, { LinkProps } from '@mui/material/Link';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

interface LinkTextProps {
  errorText: string;
}

const ErrorTypography = styled(Typography)< TypographyProps>(({ theme }) => ({
  color: theme.palette.warning.main,
  display: "inherit",
  height: "13px",
  fontSize: '12px',
  whiteSpace: 'nowrap'
}))



export default function ErrorText({ errorText }: LinkTextProps) {
  return <ErrorTypography>
    { errorText }
  </ErrorTypography>
}