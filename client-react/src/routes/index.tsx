import { useRoutes } from 'react-router';
import React from 'react';
import { authRoutes } from './auth';
import { homeRoutes } from './home';

export const AppRoutes = () => {
  const element = useRoutes([...homeRoutes, ...authRoutes]);

  return <>{element}</>;
};
