import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SignUp from './register';
import AuthLayout from '@/layout/AuthLayout';
import LogIn from './logIn';
import ActivateUser from './activeUser';

const App = () => {
    return (
        <AuthLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </AuthLayout>
    );
};

export const authRoutes = [
    {
        path: '/auth',
        element: <App />,
        children: [
            { path: '/auth/login', element: <LogIn /> },
            { path: '/auth/register', element: <SignUp /> },
            { path: '/auth/user-activate', element: <ActivateUser /> },
        ],
    },
];
