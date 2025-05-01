import React from 'react';

const StatCard = ({ value, label }) => {
  return (
    <div className="stat-card">
      <h2 className="display-4 fw-bold text-primary">{value}</h2>
      <p className="lead">{label}</p>
    </div>
  );
};

export default StatCard;
