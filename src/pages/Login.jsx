import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  let {isAuth,setIsAuth} = useContext(AuthContext);
  let [data,setData] = useState({});
  const handleChange = (e)=>{
      let {name,value} = e.target;
      setData({
        ...data,[name]:value
      });
  }
  console.log(data);
  return (
    <div>
      <input data-cy="login-email" name="email" value={data.email} onChange={handleChange} />
      <input data-cy="login-password" name="password" value={data.password} onChange={handleChange} />
      <button data-cy="login-submit"></button>
    </div>
  );
};

export default Login;
