import React, { useState } from "react";
import { signupUser, loginUser } from "../api/userAPI";

const UserList = ({ isLogin, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
        const userData = { username, email, password };
        await signupUser(userData);
        setUsername("");
        setEmail("");
        setPassword("");
        setError(""); 
        alert("Signup successful!");
    } catch (err) {
        setError(err.response?.data?.message || "Error signing up");
    }
  };

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      await loginUser(userData); 
      setEmail("");
      setPassword("");
      setError(""); 
      alert("Login successful!");
      onLoginSuccess(); 
    } catch (err) {
      setError(err.response?.data?.message || "Error logging in");
    }
  };
  

  return (
    <div class="form-container">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isLogin && (
        <>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </>
      )}
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isLogin ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleSignup}>Sign Up</button>
      )}
    </div>
  );
};

export default UserList;
