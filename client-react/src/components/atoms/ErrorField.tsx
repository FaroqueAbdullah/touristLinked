import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

interface LinkTextProps {
  errorText: string;
}

const ErrorTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.warning.main,
  display: 'inherit',
  minHeight: '.8rem',
  fontSize: '12px',
  width: 'min-content'
}));

export default function ErrorText({ errorText }: LinkTextProps) {
  return <ErrorTypography>{errorText}</ErrorTypography>;
}
