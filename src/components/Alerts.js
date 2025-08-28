import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const alertsCollection = collection(db, 'alerts');
    const q = query(alertsCollection, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const alertsData = [];
      querySnapshot.forEach((doc) => {
        alertsData.push({ ...doc.data(), id: doc.id });
      });
      setAlerts(alertsData);
    }, (error) => {
      console.error("Firebase listener error:", error);
    });

    return () => unsubscribe();
  }, []);

  const getSeverityClass = (severity) => {
    if (!severity) return 'medium';
    return severity.toLowerCase();
  };

  return (
    <div className="alerts-container">
      <h2>Latest Alerts</h2>
      {alerts.length > 0 ? (
        alerts.map((alert) => (
          <div key={alert.id} className={`alert ${getSeverityClass(alert.severity)}`}>
            <div className="alert-header">
              <h3>{alert.type}</h3>
              <span className="alert-location">{alert.location}</span>
            </div>
            <p>Severity: {alert.severity}</p>
          </div>
        ))
      ) : (
        <p>No active alerts at the moment.</p>
      )}
    </div>
  );
};

export default Alerts;