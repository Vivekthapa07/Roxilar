import React, { useState } from 'react';
const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    rating: ''
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, address, rating } = formData;
    if (!name || !email || !address || !rating) return;

    setUsers([...users, formData]);
    setFormData({ name: '', email: '', address: '', rating: '' });
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>
          Fullstack<br />
          <span>Intern</span><br />
          Challenge
        </h2>
        <nav>
          <ul>
            <li className="NavLink active"><a href="/">Dashboard</a></li>
            <li className="NavLink"><a href="/user">Add User</a></li>
            <li className="NavLink"><a href="/store">Stores</a></li>
            <li class="NavLink"><a href='/users'>All Users</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <h2>Add New User</h2>
        <form className="user-form" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
          />
          <button type="submit">Add User</button>
        </form>

        {users.length > 0 && (
          <div className="user-table-wrapper">
            <h3>User List</h3>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={idx}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.address}</td>
                    <td>{u.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default User;
