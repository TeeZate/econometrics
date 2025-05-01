import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatCard from '../ui/StatCard';

const StatsSection = () => {
  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '5000+', label: 'Active Users' },
    { value: '$2B+', label: 'Processed Monthly' }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col md={4} key={index}>
              <StatCard value={stat.value} label={stat.label} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
