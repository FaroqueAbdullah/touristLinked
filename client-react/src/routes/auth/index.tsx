import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SignUp from './signup';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export const authRoutes = [
  {
    path: '/auth',
    element: <App />,
    children: [
      { path: '/auth/login', element: <SignUp /> },
      { path: '/auth/signup', element: <h1>Log IN</h1> },
    ],
  },
];
