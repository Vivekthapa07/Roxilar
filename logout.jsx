// src/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Do any logout cleanup if needed
    // localStorage.removeItem("authToken");

    navigate('/login');
  }, [navigate]);

  return null; // no visible UI needed
};

export default Logout;
