import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

interface LayoutProps {
  children: React.ReactNode
}

const CustomLayout = styled(Container)<ContainerProps>(({ theme }) => ({
  background: theme.palette.background.default,
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

const MainLayout = ({children}: LayoutProps): React.ReactNode => (
  <CustomLayout>
    { children }
  </CustomLayout>
)

export default MainLayout