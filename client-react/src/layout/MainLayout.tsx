import { Box } from '@mui/material';
import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout = ({children}: LayoutProps): React.ReactNode => (
    <Box sx={{ padding: "6rem 0 1rem" }}>
      <Container maxWidth="xl">
      { children }
      </Container>
    </Box>
)

export default MainLayout