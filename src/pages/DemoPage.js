import React from 'react';
import { Link } from 'react-router-dom';
import './DemoPage.css';

const DemoPage = () => {
  return (
    <div className="demo-page">
      <div className="demo-container">
        <h1>Watch AlertHub in Action</h1>
        <p>This short video demonstrates the real-time features of the AlertHub dashboard. See how instant alerts, interactive maps, and community reporting work together to create a powerful safety tool.</p>
        
        {}
        <video controls autoPlay muted className="demo-video-player">
          <source src="/videos/alert-hub-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Link to="/login" className="demo-button">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default DemoPage;