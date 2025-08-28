import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import StatCard from '../components/StatCard';
import MapComponent from '../components/MapComponent';
import LiveAlertsFeed from '../components/LiveAlertsFeed';
import './DashboardPage.css';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalAlerts: 0,
    severeAlerts: 0,
    safeZones: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const alertsSnap = await getDocs(collection(db, 'alerts'));
        const totalAlerts = alertsSnap.size;

        const severeQuery = query(collection(db, 'alerts'), where("severity", "==", "High"));
        const severeSnap = await getDocs(severeQuery);
        const severeAlerts = severeSnap.size;

        const safeZonesSnap = await getDocs(collection(db, 'safe_zone'));
        const safeZones = safeZonesSnap.size;

        setStats({ totalAlerts, severeAlerts, safeZones });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>

      <div className="stats-grid">
        <Link to="/alerts" className="stat-card-link">
          <StatCard title="Total Alerts" value={stats.totalAlerts} color="#2196f3" />
        </Link>
        <StatCard title="Severe Alerts" value={stats.severeAlerts} color="#f44336" />
        <StatCard title="Safe Zones" value={stats.safeZones} color="#4caf50" />
        <StatCard title="Active Users" value="10,000+" color="#ff9800" />
      </div>

      <div className="dashboard-main">
        <div className="dashboard-map-container">
          <MapComponent />
        </div>
        <div className="dashboard-feed-container">
          <LiveAlertsFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;