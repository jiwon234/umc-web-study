import { createContext } from "react";
import { useState } from "react";


export const LoginContext = createContext();

export function LoginContextProvider({children}) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  return <LoginContext.Provider
    value={{
      isLoggedIn,
      setLoggedIn,
      userName,
      setUserName,
    }}
  >{children}</LoginContext.Provider>
}