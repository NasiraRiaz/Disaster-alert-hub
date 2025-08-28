import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Our Mission</h1>
          <p>To create safer, more resilient communities by providing timely, reliable, and accessible disaster information for everyone.</p>
        </div>
      </div>

      <div className="about-container">
        <h2>About AlertHub</h2>
        <p>
          In many regions across Pakistan and beyond, the gap between a disaster event and the public's awareness can be a matter of life and death. Critical information is often delayed, fragmented, or inaccessible to those who need it most. AlertHub was born from a simple yet powerful idea: what if everyone could have a single, trustworthy source of truth during an emergency?
        </p>
        <p>
          We are a practical, social-good project designed to bridge that information gap. Our platform provides a real-time alert and safety resource website built with modern, reliable technology.
        </p>

        <div className="about-features">
          <div className="about-feature-card">
            <h3>Real-Time Alerts</h3>
            <p>Our system provides instant updates for floods, earthquakes, and other emergencies, ensuring you get the warning you need, when you need it.</p>
          </div>
          <div className="about-feature-card">
            <h3>Interactive Mapping</h3>
            <p>We integrate map technology to provide a clear visual guide to designated safe zones, hospitals, shelters, and active danger areas.</p>
          </div>
          <div className="about-feature-card">
            <h3>Community Powered</h3>
            <p>AlertHub is built for the community, by the community. Our emergency reporting feature allows users to share on-the-ground information, creating a network of mutual support.</p>
          </div>
        </div>

        <h2>The Technology</h2>
        <p>
          AlertHub is built on a robust and scalable tech stack designed for reliability and speed. The frontend is built with React for a fast, responsive user experience. Our backend is powered by Firebase, allowing for real-time database updates and a secure authentication system. Mapping is handled by Leaflet.js, an open-source and flexible library for interactive maps.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;