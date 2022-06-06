import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const RequiredAuth = ({ children }) => {
  let {isAuth} = React.useContext(AuthContext);
  let navigate = useNavigate();
  if(isAuth){
    return children;
  }
  else{
    navigate('/Login');
  }

};

export default RequiredAuth;
