import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    loading: true,
    lastPage: '/',
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setState((prevState) => ({
        ...prevState,
        user: currentUser,
        loading: false,
      }));
    });

    return () => unsubscribe();
  }, []);

  const setLastPage = useCallback((page) => {
    setState((prevState) => ({
      ...prevState,
      lastPage: page,
    }));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        lastPage: state.lastPage,
        setLastPage,
      }}
    >
      {!state.loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
