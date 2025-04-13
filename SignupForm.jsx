import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can send this data to your backend here
  };

  return (
    <div className='tab'>
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your full Name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" value={formData.address} onChange={handleChange} placeholder="Your address" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Create a password" required />
      </div>

      <button type="submit" className="signup-btn">Sign Up</button>
      
    </form>
    </div>
  );
};

export default SignupForm;
