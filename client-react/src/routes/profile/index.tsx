import MainLayout from '@/layout/MainLayout';
import { Outlet } from 'react-router-dom';
import ProfileView from './ProfileView';

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const profileRoutes = [
  {
    path: '/profile',
    element: <App />,
    children: [
      { path: '/profile/:id', element: <ProfileView /> },
    ],
  },
];
