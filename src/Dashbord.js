import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashbord({ profile }) {
  return (
    <div className="container-fluid p-0">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Dashboard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">Settings</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  <img src={profile.picture} alt="Profile" className="rounded-circle me-2" style={{width: '30px', height: '30px'}} />
                  {profile.name}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="/profile">Edit Profile</a></li>
                  <li><a className="dropdown-item" href="/settings">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/logout">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mt-4">
        {/* Welcome Message */}
        <div className="row mb-4">
          <div className="col">
            <h1>Welcome to the Dashboard</h1>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <p className="card-text">1,234</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Sales</h5>
                <p className="card-text">$12,345</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-info mb-3">
              <div className="card-body">
                <h5 className="card-title">Visits</h5>
                <p className="card-text">5,678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="row">
          <div className="col">
            <h2>Recent Activity</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-10-01</td>
                  <td>User Registration</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>2023-10-02</td>
                  <td>Order Processing</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>2023-10-03</td>
                  <td>System Update</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white mt-4 p-3">
        <div className="container">
          <p className="text-center mb-0">&copy;  Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashbord;
