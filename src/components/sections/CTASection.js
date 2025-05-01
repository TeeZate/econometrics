import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CTASection = () => {
  return (
    <section className="py-5">
      <Container className="text-center">
        <h2 className="mb-4">Ready to Get Started?</h2>
        <p className="lead mb-4">Join thousands of companies using Econometrix to transform their financial operations.</p>
        <Button className="btn-primary-gradient btn-lg">Start Your Free Trial</Button>
      </Container>
    </section>
  );
};

export default CTASection;
