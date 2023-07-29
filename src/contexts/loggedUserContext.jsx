import { createContext, useContext, useState } from 'react';

const LoggedUserContext = createContext();

export function LoggedUserProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState({});

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
