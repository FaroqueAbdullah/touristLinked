import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Login = lazy(() => import('@/pages/Auth/Login/Login'));
const SignUp = lazy(() => import('@/pages/Auth/Signin/Signin'));


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-100 p-5 h-full flex justify-center items-center">
        <div className="bg-green-secondary m-5 rounded-md">
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
};



export const authRoutes = [
  {
    path: '/auth',
    element: <App />,
    children: [
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/signup', element: <SignUp /> }
    ],
  },
];