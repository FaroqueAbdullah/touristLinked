import MainLayout from '@/layout/MainLayout';
import { Outlet } from 'react-router-dom';
import Dashboard from './dashboard';
import withProtectedRoute from '@/hoc/withProtectedRoute';

const PageNotFound = () => {
  return <div>Page Not Found</div>;
};

const App = withProtectedRoute(() => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
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
