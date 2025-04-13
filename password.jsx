import React, { useState } from 'react';

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your backend API here
    console.log('Password updated:', { currentPassword, newPassword });
  };

  return (
    <div className="fullscreen">
      <form className="update-password-form" onSubmit={handleSubmit}>
        <h2>Update Password</h2>

        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Enter current password"
          required
        />

        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />

        <button type="submit" className="update-btn">Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
