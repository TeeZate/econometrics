import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutImage from '../../assets/images/pexels-fauxels-3184291.jpg';

const AboutSection = () => {
  return (
    <section className="py-5" id="about">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={6}>
            <div className="hero-image">
              <img 
                src={aboutImage} 
                alt="About Us" 
                className="img-fluid rounded-4 shadow-lg" 
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="floating-elements"></div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="ps-lg-5">
              <h2 className="features-title mb-4" style={{ fontSize: '2.8rem', textAlign: 'left' }}>
                Transforming Financial Intelligence
              </h2>

              <p className="hero-subtitle" style={{ color: 'var(--primary-color)', textAlign: 'left' }}>
                We're revolutionizing how businesses handle their financial data through 
                cutting-edge technology and innovative solutions.
              </p>

              <Row className="g-4 mt-4">
                <Col md={6}>
                  <div className="stat-card">
                    <h3 className="h2 mb-2" style={{ color: 'var(--accent-color)' }}>98%</h3>
                    <p className="mb-0">Customer Satisfaction</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="stat-card">
                    <h3 className="h2 mb-2" style={{ color: 'var(--accent-color)' }}>10M+</h3>
                    <p className="mb-0">Transactions Processed</p>
                  </div>
                </Col>
              </Row>

              <div className="mt-4">
                <div className="feature-card" style={{ border: 'none', padding: '15px 0' }}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-check-circle-fill text-primary h5 mb-0"></i>
                    <h4 className="ms-3 mb-0">Real-time Analytics</h4>
                  </div>
                  <p className="ms-4 mb-0">Advanced insights with predictive modeling capabilities</p>
                </div>

                <div className="feature-card" style={{ border: 'none', padding: '15px 0' }}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-shield-check text-primary h5 mb-0"></i>
                    <h4 className="ms-3 mb-0">Enterprise Security</h4>
                  </div>
                  <p className="ms-4 mb-0">Bank-grade encryption and security protocols</p>
                </div>
              </div>

              <div className="hero-buttons mt-5">
                <Button className="btn-primary-gradient me-3">Get Started</Button>
                <Button>Learn More</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
