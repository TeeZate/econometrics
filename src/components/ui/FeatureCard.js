import React from 'react';

const FeatureCard = ({ icon, title, description, benefits }) => {
  return (
    <div className="feature-card h-100">
      <div className="d-flex align-items-center mb-4">
        <div className="icon-wrapper" style={{
          background: 'linear-gradient(135deg, #2196f3, #1976d2)',
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <i className={`${icon} text-white h3 mb-0`}></i>
        </div>
        <h3 className="ms-3 mb-0" style={{ fontSize: '1.5rem' }}>{title}</h3>
      </div>
      <p className="text-muted mb-3">{description}</p>
      <ul className="list-unstyled">
        {benefits.map((benefit, index) => (
          <li className={index !== benefits.length - 1 ? 'mb-2' : ''} key={index}>
            <i className="bi bi-check2-circle text-primary me-2"></i>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
