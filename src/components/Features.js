import React from "react";
import styles from "../styles/Features.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <Container>
        <h2 className="text-center mb-5">Our Features</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Fast Performance
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  Optimized for speed using Next.js, lazy loading, and code
                  splitting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Responsive Design
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  Looks perfect on desktop, tablet, and mobile using Bootstrap 5
                  grid.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  SEO Friendly
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  Semantic HTML and optimized images for better search engine
                  ranking.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
