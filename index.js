// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './login';
import User from './user';
import Store from './store';
import Users from './Users';
import Logout from './logout';
import SignupForm from './SignupForm';
import Password from './password';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/user" element={<User />} />
        <Route path="/store" element={<Store />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/Password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
