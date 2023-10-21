import NavBar from '@/components/molecules/Navbar';
import { Box } from '@mui/material';
import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Suspense } from 'react';

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout = ({children}: LayoutProps): React.ReactNode => (
  <>
    <NavBar />
    <Box sx={{ padding: "6rem 0 1rem" }}>
      <Container maxWidth="xl">
      <Suspense fallback={<div>Loading...</div>}>
        { children }
      </Suspense>
      </Container>
    </Box>
  </>
    
)

export default MainLayout