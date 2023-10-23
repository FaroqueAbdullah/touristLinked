import MainLayout from '@/layout/MainLayout';
import { Outlet } from 'react-router-dom';
import Feed from './feed';
import withProtectedRoute from '@/hoc/withProtectedRoute';
import UserNotification from './Notification';

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
      { path: '/', element: <Feed /> },
      { path: '/notification', element: <UserNotification /> },
      { path: '/*', element: <PageNotFound /> },
    ],
  },
];
