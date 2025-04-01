import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Auth from "../auth/Auth";
import GeneralNavbar from "./GeneralNavbar";

const LogIn = () => {
  const { LogIn } = Auth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await LogIn(username, password);

    if (user && user.accessToken) {
      navigate("/dashboard"); // Redirect to /dashboard on success
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <GeneralNavbar />
      <main className="page-content">
        <div className="login-container">
          <div className="login-box">
            <h1 className="login-title">Sign In</h1>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="login-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default LogIn;
