import { AuthContext } from "./AuthContext.jsx";
import { useContext } from "react";
const Auth = () => {
  return useContext(AuthContext);
};

export default Auth;
