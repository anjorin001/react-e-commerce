import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const Authentication = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate()

  // function to login user
  const LogIn = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error("Invalid Credentials");
      }
      const data = await response.json();
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("authToken", data.accessToken);
        setUser(data);
        setToken(data.accessToken);
      }
      return data;
    } catch (error) {
      console.log("Error Grabbed:" + error);
      return null;
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && !user) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  // function to logout
  const LogOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate('/')
  };
  return (
    <>
      <AuthContext.Provider value={{ user, token, LogIn, LogOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
export default Authentication;
