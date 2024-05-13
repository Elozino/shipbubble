import React, { createContext, ReactNode, useContext, useState } from 'react';
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
