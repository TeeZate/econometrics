import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="footer-heading">Econometrix</h5>
            <p className="company-description">Making financial data work smarter.</p>
            <div className="social-icons mt-3">
              <a href="https://x.com/" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/TeeZate/econometrics" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>

          <Col md={2}>
            <h5 className="footer-heading">Product</h5>
            <ul className="footer-links">
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/api">API</a></li>
              <li><a href="/docs">Documentation</a></li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="footer-heading">Stay Updated</h5>
            <p className="newsletter-text">Subscribe to our newsletter for the latest updates.</p>
            <Form className="newsletter-form">
              <InputGroup>
                <Form.Control type="email" placeholder="Enter your email" required />
                <Button variant="primary" type="submit">Subscribe</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12}>
            <hr className="footer-divider" />
            <div className="footer-bottom">
              <p className="copyright">© 2025 afrodevstech.com All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
