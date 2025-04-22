import React from "react";
import styles from "../styles/Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <p className="mb-0">
              Made with Passion by{" "}
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mahesh's portfolio"
              >
                Mahesh
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
