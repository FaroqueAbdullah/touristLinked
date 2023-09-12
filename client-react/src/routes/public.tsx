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

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <div>home</div> },
      { path: '/profile', element: <div>profile</div> },
      { path: '/*', element: <PageNotFound /> },
    ],
  },
];
