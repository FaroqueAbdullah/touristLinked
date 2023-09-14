import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const width = "auto"
const color = "red"

interface Props {
  color: string
}


const CustomTypography = styled(Typography)< TypographyProps>(({ theme }) => ({
  width: width,
  color: color
}))


export default function MUITypography({ ...props }) {
  return <CustomTypography {...props} />
}