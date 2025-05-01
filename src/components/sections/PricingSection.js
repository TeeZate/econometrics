import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PricingCard from '../ui/PricingCard';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '29',
      features: [
        'Basic Analytics Dashboard',
        '5 Team Members',
        '10GB Storage',
        'Email Support'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'success',
      popular: false
    },
    {
      name: 'Professional',
      price: '99',
      features: [
        'Advanced Analytics',
        '25 Team Members',
        '50GB Storage',
        'Priority Support',
        'Custom Reports'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'primary-gradient',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '299',
      features: [
        'Custom Analytics',
        'Unlimited Team Members',
        'Unlimited Storage',
        '24/7 Premium Support',
        'API Access'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'success',
      popular: false
    }
  ];

  return (
    <section className="py-5" id="pricing" style={{ background: 'var(--light-gray)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="features-title">
            Simple, Transparent Pricing
          </h2>
          <p className="hero-subtitle" style={{ color: 'var(--primary-color)', maxWidth: '600px', margin: '0 auto' }}>
            Choose the perfect plan that suits your business needs
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <Col md={4} key={index}>
              <PricingCard plan={plan} />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <p className="text-muted">All plans include: SSL security, daily backups, and 99.9% uptime guarantee</p>
          <Button className="btn-primary-gradient">View Full Feature Comparison</Button>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
