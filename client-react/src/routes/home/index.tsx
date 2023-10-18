import NavBar from '@/components/molecules/Navbar';
import MainLayout from '@/layout/MainLayout';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './dashboard';
import withProtectedRoute from '@/hoc/withProtectedRoute';

const PageNotFound = () => {
  return <div>Page Not Found</div>;
};

const App = withProtectedRoute(() => {
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
});

export const homeRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/*', element: <PageNotFound /> },
    ],
  },
];
