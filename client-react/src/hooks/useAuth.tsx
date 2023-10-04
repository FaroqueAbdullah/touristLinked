import { useEffect, useState } from 'react';

export const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle user login
  const login = async (email: string, password: string) => {
    try {
      // await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  // Function to handle user logout
  const logout = async () => {
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
    login,
    logout,
  };
};