import React from "react";
import styles from "../styles/CTA.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const CTA = () => {
  return (
    <section
      className={styles.cta}
      id="cta"
      role="region"
      aria-labelledby="cta-heading"
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 id="cta-heading" className={styles.heading}>
              Ready to get started?
            </h2>
            <p className={styles.description}>
              Join us today and elevate your web presence with modern design and
              development practices.
            </p>
            <a
              href="#contact"
              className={`btn btn-primary ${styles.ctaButton}`}
            >
              Get Started
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
