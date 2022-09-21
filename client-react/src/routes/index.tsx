import { useRoutes } from "react-router";
import { useDispatch } from 'react-redux';

import { authRoutes } from './auth';
import { publicRoutes } from './public';
import { checkUserInLocal } from '@/store/asyncThunk/userThunk';

import { AppDispatch } from '@/store/index'





export const AppRoutes = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(checkUserInLocal() )

  const element = useRoutes([...authRoutes, ...publicRoutes]);

  return <>{element}</>;
}