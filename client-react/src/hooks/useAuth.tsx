import UserService from '@/services/http/user';
import { useEffect, useState } from 'react';

interface LoginCredentialType {
  email: string,
  password: string
}

export const useAuthentication = () => {
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    // // Add an observer to check if the user is logged in
    // const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
    //   setUser(authUser);
    //   setIsLoading(false);
    // });

    // // Unsubscribe the observer when the component unmounts
    // return () => unsubscribe();
  }, []);

  return {
    user,
    isLoading,
    loginUser,
    logoutUser,
  };
};