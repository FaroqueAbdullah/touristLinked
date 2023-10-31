import UserService from '@/services/http/user';
import tokenService from '@/services/storage/token';
import { useState } from 'react';

interface LoginCredentialType {
  email: string;
  password: string;
}

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const userData = tokenService.getLocalUserData();
    return userData != null ? JSON.stringify(userData) : null;
  });

  // Function to handle user login
  const loginUser = (credentials: LoginCredentialType) => {
    const { email, password } = credentials;

    return UserService.loginUser({ email, password }).then((userInfo) => {
      setUser(userInfo.data.user);
      return userInfo.data.user;
    });
  };

  // Function to handle user logout
  const logoutUser = () => {
    tokenService.removeLocalUser();
    setUser(null);
  };

  return {
    user,
    loginUser,
    logoutUser,
  };
};
