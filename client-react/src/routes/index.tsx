import { useRoutes } from 'react-router';

import { authRoutes } from './auth';
import { profileRoutes } from './profile';
import { homeRoutes } from './home';

export const AppRoutes = () => {
  const element = useRoutes([...homeRoutes, ...profileRoutes, ...authRoutes]);

  return <>{element}</>;
};
