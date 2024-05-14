import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { _clearAllItems, _getItem } from '../helpers/async-storage';
import { AppContextType, orderListProp } from '../types';

const initialContext: AppContextType = {
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  setUserCredentials: () => { },
  userCredentials: {
    username: '',
    password: ''
  },
  ordersList: [],
  setOrdersList: () => { },
};

export const Context = createContext<AppContextType>(initialContext);

const AppContext = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [ordersList, setOrdersList] = useState<orderListProp[]>([]);

  useEffect(() => {
    (async () => {
      const credential = await _getItem("auth");
      if (credential) {
        setUserCredentials((prev) => ({ ...prev, ...credential }));
        setIsLoggedIn(!isLoggedIn);
        return;
      }
    })();
  }, []);


  useEffect(() => {
    (async () => {
      // await _clearAllItems()
      const orders = await _getItem("orders")
      if (orders) {
        setOrdersList(orders)
      }
    })()
  }, [])


  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userCredentials,
        setUserCredentials,
        // @ts-ignore
        ordersList,
        setOrdersList,
      }}
    >
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
