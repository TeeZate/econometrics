import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import dashboardImage from '../../assets/images/png-aura.com.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="floating-elements"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <h1 className="hero-title">Transform Your Financial Data Into Actionable Insights</h1>
            <p className="hero-subtitle">
              Harness the power of AI and advanced analytics to make smarter financial decisions. 
              Built for modern institutions that demand excellence.
            </p>
            <div className="hero-buttons">
              <Button className="btn-primary-gradient btn-lg me-3 mb-2 mb-md-0">
                Start Free Trial
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </Button>
              <Button className="btn-outline-gradient btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle me-2" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                Watch Demo
              </Button>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="hero-image">
              <img src={dashboardImage} alt="Econometrix Dashboard" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
