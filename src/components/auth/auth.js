// src/components/auth/Login.js
import React, { useState } from "react";
import { loginUser } from "../../api/authApi";

const Login = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update password state
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
