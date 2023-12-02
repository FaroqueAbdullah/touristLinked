import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SignUp from '@/pages/Auth/Register';
import AuthLayout from '@/layout/AuthLayout';
import LogIn from '@/pages/Auth/LogIn';
import ActivateUser from '@/pages/Auth/ActiveUser';

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
