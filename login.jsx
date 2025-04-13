// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard"); 
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <aside className="login-sidebar">
        <nav>
          <ul>
            <li className="active">Login</li>
            <li>Sign-in</li>
            <li className="NavLink"><a href='/SignupForm' style={{color:'white',}}>Sign-Up</a></li>
          </ul>
        </nav>
      </aside>

      <main className="login-main">
        <div className="top-right">
          <button className="small-btn">Login</button>
        </div>

        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Log in</button>
        </form>

        <nav>
          <button className="NavLink"><a href="/password">Change Password</a></button>
        </nav>
      </main>
    </div>
  );
};

export default Login;

