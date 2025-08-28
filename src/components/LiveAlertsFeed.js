import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import './LiveAlertsFeed.css';

const LiveAlertsFeed = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'alerts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const alertsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setAlerts(alertsData);
    });
    return () => unsubscribe();
  }, []);

  const getSeverityClass = (severity) => {
    if (!severity) return 'moderate';
    return severity.toLowerCase();
  };

  return (
    <div className="feed-container">
      <h4>Live Disaster Alerts</h4>
      <ul className="alerts-list">
        {alerts.map(alert => (
          <li key={alert.id} className="alert-item">
            <span className="alert-text">{alert.type} in {alert.location}</span>
            <span className={`severity-tag ${getSeverityClass(alert.severity)}`}>
              {alert.severity}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveAlertsFeed;