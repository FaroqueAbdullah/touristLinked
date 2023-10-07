import UserService from '@/services/http/user';
import { useEffect, useState } from 'react';

import tokenService from '@/services/storage/token';

interface LoginCredentialType {
  email: string,
  password: string
}

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const userData = tokenService.getLocalUserData()
    return userData != null ? JSON.stringify(userData) : null
  });
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle user login
  const loginUser = async (credentials: LoginCredentialType) => {
    const { email, password } = credentials;
    try {
      const loginResponse = await UserService.loginUser({email, password});
      setUser(loginResponse.data.user)
    } catch (error) {
      throw error
    }
  };

  // Function to handle user logout
  const logoutUser = async () => {
    try {
      // await firebase.auth().signOut();
    } catch (error) {
      throw error;
    }
  };

  console.log('use auth init')

  useEffect(() => {
    console.log('use auth')
  }, []);

  return {
    user,
    isLoading,
    loginUser,
    logoutUser,
  };
};