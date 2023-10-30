import NavBar from '@/components/molecules/Navbar';
import FallbackRender from '@/components/templates/FallBackError';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => (
  <>
    <NavBar />
    <Box sx={{ padding: '6rem 0 1rem' }}>
      <ErrorBoundary fallbackRender={FallbackRender}>
        <Container maxWidth="xl">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Container>
      </ErrorBoundary>
    </Box>
  </>
);

export default MainLayout;
