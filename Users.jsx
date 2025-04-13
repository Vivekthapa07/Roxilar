import React, { useState } from "react";

const allUsers = [
  {
    name: "Abhishek",
    email: "kumarpuplish@gmail.com",
    address: "Sikidiri",
    role: "Admin",
  },
  {
    name: "Vivek Thapa",
    email: "viivek@gmail.com",
    address: "Sikidiri",
    role: "Store Owner",
  },
  {
    name: "Aman",
    email: "aman@gmail.com",
    address: "Sikidiri",
    role: "User",
  },
];

const Users = () => {
  const [search, setSearch] = useState("");

  const filteredStores = allUsers.filter((allUsers) =>
    allUsers.name.toLowerCase().includes(search.toLowerCase())
  );

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
              <li class="NavLink" className="active"><a href="/">Dashboard</a></li>
              <li class="NavLink"><a href="/user"> Add User</a></li>
              <li class="NavLink"><a href='/store'>Stores</a></li>
              <li class="NavLink"><a href='/users'>All Users</a></li>
            </ul>
          </nav>
        </aside>
      <main className="main-content">
        <div className="header">
          <h1>All Users</h1>
          <button className="search-dig">Search dig</button>
        </div>

        <input
          className="search-input"
          placeholder="Search Sooe Name are Address"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="store-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredStores.map((allUsers, index) => (
              <tr key={index}>
                <td>{allUsers.name}</td>
                <td>{allUsers.email}</td>
                <td>{allUsers.address}</td>
                <td>{allUsers.role}</td>
                {/* <td>
                  {store.rating !== null ? (
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= store.rating ? "star filled" : "star"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="no-rating">Obvalte Railing</span>
                  )}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Users;
