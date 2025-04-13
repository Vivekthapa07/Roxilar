import React, { useState } from "react";

const Stores = [
  {
    name: "Addres_Addin",
    address: "Kmihra Re...",
    rating: 0,
  },
  {
    name: "Address_Destrengual",
    address: "Ytuat Ne...",
    rating: 2,
  },
  {
    name: "Antigot, Angue Na...",
    address: "4hges Na...",
    rating: null,
  },
];

const Store = () => {
  const [search, setSearch] = useState("");

  const filteredStores = Stores.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase())
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
          <h1>Storees</h1>
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
              <th>Store Name</th>
              <th>Address</th>
              <th>Overall Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredStores.map((store, index) => (
              <tr key={index}>
                <td>{store.name}</td>
                <td>{store.address}</td>
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Store;
