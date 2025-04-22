import React from "react";
import styles from "../styles/Hero.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h1 className={styles.title}>WELCOME TO OUR LANDING PAGE</h1>
            <p className={styles.subtitle}>
              We build high-quality, responsive web experiences using modern
              technologies like Next.js and Bootstrap 5.
            </p>
            <a
              href="#contact"
              className={`btn btn-primary ${styles.ctaButton}`}
            >
              Get Started
            </a>
          </Col>

          <Col lg={6} className="text-center position-relative">
            <Image
              src="/images/hero.webp"
              alt="Hero"
              width={600}
              height={400}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
