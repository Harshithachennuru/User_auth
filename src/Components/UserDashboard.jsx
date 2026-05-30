import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Dashboard.css';

const UserDashboard = () => {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="dashboard-container">

      <nav className="navbar">
        <Link to="/" className="logout-btn">
          Logout
        </Link>
      </nav>

      <div className="dashboard-card">
        <p className="welcome">Welcome Back</p>

        <h1>
          Hello, <span className="role">User</span>
        </h1>

        <p className="email">{email}</p>
      </div>

    </div>
  );
};

export default UserDashboard;