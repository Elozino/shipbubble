import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AppContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContext: AppContextType = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const Context = createContext<AppContextType>(initialContext);

const AppContext = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
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
