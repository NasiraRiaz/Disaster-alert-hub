import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, color }) => {
  return (
    <div className="stat-card" style={{ backgroundColor: color }}>
      <div className="stat-card-title">{title}</div>
      <div className="stat-card-value">{value}</div>
    </div>
  );
};

export default StatCard;