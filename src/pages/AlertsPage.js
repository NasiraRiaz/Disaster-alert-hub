import React from 'react';
import LiveAlertsFeed from '../components/LiveAlertsFeed';
import './AlertsPage.css';

const AlertsPage = () => {
  return (
    <div className="alerts-page">
      <div className="alerts-container">
        <LiveAlertsFeed />
      </div>
    </div>
  );
};

export default AlertsPage;