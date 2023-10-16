import NavBar from '@/components/molecules/Navbar';
import MainLayout from '@/layout/MainLayout';
import { ProtectedRoute } from '@/wrapper/protectedRoute';
import Box from '@mui/material/Box/Box';
import Container from '@mui/material/Container';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './dashboard';

const PageNotFound = () => {
  return <div>Page Not Found</div>;
};

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </Suspense>
    </>
  );
};

export const homeRoutes = [
  {
    path: '/',
    element: <ProtectedRoute>
      <App />
    </ProtectedRoute>,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/*', element: <PageNotFound /> },
    ],
  },
];
