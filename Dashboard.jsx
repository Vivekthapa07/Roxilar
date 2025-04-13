import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <div className="container">
        <aside className="sidebar">
          <h2>
            Fullstack<br />
            <span> Intern</span><br />
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

        <main className="main">
          <section className="dashboard">
            <div className="card">
              <p>Total Items</p>
              <h3>120</h3>
            </div>
            <div className="card">
              <p>Total Servers</p>
              <h3>35</h3>
            </div>
            <div className="card">
              <p>Total Billings</p>
              <h3>450</h3>
            </div>
          </section>

          <section className="users">
            <h2>Users</h2>
            <div className="filters">
              <input type="text" placeholder="Search" />
              <input type="text" placeholder="Address" />
              <button>Filter</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Om kumar</td>
                  <td>omkumar12@gmail.com</td>
                  <td>staff</td>
                </tr>
                <tr>
                  <td>Anup kumar</td>
                  <td>anup12@gmail.com</td>
                  <td>staff</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
