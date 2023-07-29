import { createContext, useContext, useState, useEffect } from 'react';
import { useApi } from '../hooks/useApi.js';

const LoggedUserContext = createContext();

export function LoggedUserProvider({ children }) {
  const { request, data } = useApi();
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    localStorage.token && request({ route: 'users/getusernamebytoken' });
  }, []);

  useEffect(() => {
    setLoggedUser({ ...data });
  }, [data]);

  return (
    <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </LoggedUserContext.Provider>
  );
}

export function useLoggedUserContext() {
  const context = useContext(LoggedUserContext);
  if (!context) {
    throw new Error('useLoggedUserContext must be used within a LoggedUserContextProvider');
  }

  return context;
}
