import NavBar from '@/components/molecules/Navbar';
import { ProtectedRoute } from '@/providers/protectedRoute';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PageNotFound = () => {
  return <div>Page Not Found</div>;
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Outlet />
    </Suspense>
  );
};

export const homeRoutes = [
  {
    path: '/',
    element: <ProtectedRoute>
      <App />
    </ProtectedRoute>,
    children: [
      { path: '/', element: <div>home</div> },
      { path: '/*', element: <PageNotFound /> },
    ],
  },
];
