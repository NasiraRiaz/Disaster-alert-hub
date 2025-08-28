// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/alerthub-logo.png';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch {
      alert("Failed to log out");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="AlertHub Logo" className="navbar-logo-icon" />
          <span className="navbar-logo-text">
            Alert<span className="logo-hub">Hub</span>
          </span>
        </Link>

        <div className="navbar-menu">
          {}
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/blog" className="navbar-item">
            Blog
          </Link>
          {}
          <Link to="/dashboard" className="navbar-item">
            Dashboard
          </Link>

          {}
          {currentUser ? (
            <>
              <Link to="/alerts" className="navbar-item">
                Alerts
              </Link>
              <Link to="/disaster-help" className="navbar-item">
                Disaster Help
              </Link>
              <button onClick={handleLogout} className="navbar-button-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/demo" className="navbar-button-demo">
                Get Demo
              </Link>
              <Link to="/login" className="navbar-button">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;