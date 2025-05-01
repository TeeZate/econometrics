import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureCard from '../ui/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Advanced Analytics',
      description: 'Real-time financial data analysis with predictive insights and machine learning capabilities.',
      benefits: ['Predictive Analysis', 'Real-time Monitoring', 'Custom Reports']
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Secure Platform',
      description: 'Bank-grade security with end-to-end encryption and advanced threat protection.',
      benefits: ['End-to-end Encryption', 'Multi-factor Auth', '24/7 Monitoring']
    },
    {
      icon: 'bi bi-lightning-charge-fill',
      title: 'Fast Integration',
      description: 'Quick setup with major financial platforms and APIs for seamless connectivity.',
      benefits: ['Quick Setup', 'API Support', 'Easy Migration']
    }
  ];

  return (
    <section className="py-5" id="features">
      <Container>
        <div className="text-center mb-5">
          <h1 className="features-title">Powerful Features</h1>
          <p className="text-muted">Discover what makes our platform stand out</p>
        </div>
        
        <Row className="g-4 justify-content-center">
          {features.map((feature, index) => (
            <Col md={4} lg={4} key={index}>
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                benefits={feature.benefits}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
