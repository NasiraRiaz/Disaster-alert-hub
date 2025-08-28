import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-contact">
          <div className="footer-logo">
            Alert<span className="logo-hub-footer">Hub</span>
          </div>
          <p>123 Disaster Relief Avenue<br />Islamabad, Pakistan</p>
          <p>info@alerthub.example<br />(051) 123-4567</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Works With</h4>
          <ul>
            <li>SMS</li>
            <li>Email</li>
            <li>Landline phones</li>
            <li>Google Android</li>
            <li>Websites</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Key Features</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li>Emergency Alerts</li>
            <li>Interactive Safety Map</li>
            <li>Geofencing</li>
            <li>Scheduling</li>
            <li>Reporting</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Key Uses</h4>
          <ul>
            <li>Emergency Alerts</li>
            <li>General Notices</li>
            <li>Internal Communications</li>
            <li>Provincial Alerting</li>
            <li>Regional Alerting</li>
            <li>Local Alerting</li>
            <li>Incident Response</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 AlertHub. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#/">Privacy</a>
          <a href="#/">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;