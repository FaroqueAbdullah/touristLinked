import  { lazy, Suspense } from 'react';
import { Outlet } from "react-router-dom";

import HeaderLayout from '@/layout/Header/Header';

const HomeCompoment = lazy(() => import('@/pages/Home/Home'));
const ProfileCompoment = lazy(() => import('@/pages/Profile/Profile'));

const PageNotFound = () => {
  return (
    <div className='flex justify-center items-center'>Page Not Found</div>
  )
}

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeaderLayout isAuthenticate = {true} /> 
      <div className='h-[calc(100vh-3rem)]'>
        <Outlet />
      </div>
    </Suspense>
  );
};


export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomeCompoment /> },
      { path: '/profile', element: <ProfileCompoment /> },
      {path: '/*', element: <PageNotFound />}
    ],
  },
];