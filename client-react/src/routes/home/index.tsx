import MainLayout from '@/layout/MainLayout';
import { Outlet } from 'react-router-dom';
import withProtectedRoute from '@/hoc/withProtectedRoute';
import PageNotFound from '@/components/molecules/NotFound';
import { lazy } from 'react';

const UserFeed = lazy(() => import('./feed'));
const UserNotifications = lazy(() => import('./notifications'));
const UserEvents = lazy(() => import('./events'));
const UserSettings = lazy(() => import('./ProfileSetting'));

const TouristProfile = lazy(() => import('./profile'));

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
      { path: '/', element: <UserFeed /> },
      { path: '/notification', element: <UserNotifications /> },
      { path: '/event', element: <UserEvents /> },
      { path: '/setting', element: <UserSettings /> },
      { path: '/tourist/:id', element: <TouristProfile /> },
      { path: '/*', element: <PageNotFound /> },
    ],
  },
];
