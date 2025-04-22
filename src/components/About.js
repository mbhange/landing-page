import React from "react";
import styles from "../styles/About.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const About = () => {
  return (
    <section
      className={styles.about}
      id="about"
      role="region"
      aria-labelledby="about-title"
    >
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row g-4">
          <Col md={6}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about.webp"
                alt="About our company"
                fill
                className={styles.image}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.content}>
              <h2 id="about-title">About Us</h2>
              <p>
                We are a passionate team dedicated to building high-performance
                web experiences. Using cutting-edge technologies like Next.js,
                Bootstrap 5, and SCSS, we deliver scalable and accessible
                solutions.
              </p>
              <p>
                Our goal is to provide users with responsive, fast-loading, and
                aesthetically pleasing interfaces across all devices and
                platforms.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
