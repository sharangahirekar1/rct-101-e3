import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [isAuth,setIsAuth] = React.useState(false);
  return <AuthContext.Provider value={{isAuth,setIsAuth}}>{children}</AuthContext.Provider>;
};
