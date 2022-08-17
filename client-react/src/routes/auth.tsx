import { lazy } from "react";

const AuthComponent = lazy(() => import('@/pages/Auth/Auth'));

export const authRoutes = [
  {
    path: '/auth/*',
    element: <AuthComponent />,
  },
];