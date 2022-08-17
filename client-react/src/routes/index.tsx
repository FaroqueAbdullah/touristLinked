import { useRoutes } from "react-router";

import { authRoutes } from './auth';
import { publicRoutes } from './public';


export const AppRoutes = () => {
  const element = useRoutes([...authRoutes, ...publicRoutes]);

  return <>{element}</>;
}