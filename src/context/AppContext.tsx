import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { _getItem } from '../helpers/async-storage';
import { AppContextType } from '../types';


const initialContext: AppContextType = {
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  setUserCredentials: () => { },
  userCredentials: {
    username: '',
    password: ''
  },
};

export const Context = createContext<AppContextType>(initialContext);

const AppContext = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    (async () => {
      const credential = await _getItem('auth')
      if (credential) {
        setUserCredentials(prev => ({ ...prev, ...credential }))
        setIsLoggedIn(!isLoggedIn)
        return;
      }
    })()
  }, [])

  return (
    <Context.Provider value={{ isLoggedIn, setIsLoggedIn, userCredentials, setUserCredentials }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;

export const useAppContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContext provider");
  }

  return context;
};
