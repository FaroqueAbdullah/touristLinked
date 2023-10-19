import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

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
    children: [
      { path: '/profile/:id', element: <div>profile</div> },
    ],
  },
];
