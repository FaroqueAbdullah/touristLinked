import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PageNotFound = () => {
  return <div>Page Not Found</div>;
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export const profileRoutes = [
  {
    path: '/profile',
    element: <App />,
    children: [{ path: '/profile/me', element: <div>profile</div> }],
  },
];
