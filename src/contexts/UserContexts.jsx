import { createContext, useState,  } from 'react';

const UserContexts = createContext();

export function UserProvider({ children }) {
const initialStateUser = {}

const  [user, setUser] = useState(initialStateUser)


  return (
    <UserContexts.Provider value={{ }}>
      {children}
    </UserContexts.Provider>
  );
}
