import React from 'react';
import { Button } from 'react-bootstrap';

const PricingCard = ({ plan }) => {
  return (
    <div 
      className="feature-card h-100 text-center position-relative" 
      style={plan.popular ? {
        transform: 'scale(1.05)',
        border: '2px solid var(--accent-color)'
      } : {}}
    >
      {plan.popular && (
        <div 
          className="position-absolute" 
          style={{
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--accent-color)',
            color: 'white',
            padding: '4px 20px',
            borderRadius: '20px',
            fontSize: '0.9rem'
          }}
        >
          Most Popular
        </div>
      )}

      <div className="mb-4">
        <h3 className="mb-3">{plan.name}</h3>
        <div className="pricing-amount">
          <span style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>$</span>
          <span style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--primary-color)' }}>{plan.price}</span>
          <span style={{ color: 'var(--primary-color)' }}>/month</span>
        </div>
      </div>

      <div className="feature-list mb-4">
        <ul className="list-unstyled">
          {plan.features.map((feature, idx) => (
            <li className="mb-3" key={idx}>
              <i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--accent-color)' }}></i>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button className={`btn-${plan.buttonVariant} w-100`}>{plan.buttonText}</Button>
    </div>
  );
};

export default PricingCard;
