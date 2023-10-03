import { Logo } from '@/components/atoms';
import { Stack, Typography } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface LayoutProps {
  children: React.ReactNode
}

const CustomAuthLayout = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%"
}));

const AuthFormContainer = styled(Box)<BoxProps>(({ theme }) => ({
  background: theme.palette.background.paper,
  width: "fit-content",
  padding: "2rem",
  marginTop: "2rem",
  [theme.breakpoints.down('sm')]: {
    width: "100%",
    padding: "0rem",
    margin: "1rem"
  }
}));

const AuthLayout = ({children}: LayoutProps): React.ReactNode => (
  <CustomAuthLayout>
    <Logo />
    <AuthFormContainer>
      { children }
    </AuthFormContainer>
  </CustomAuthLayout>
)

export default AuthLayout