import React from "react";
import styles from "../styles/Contact.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <p className="text-center mb-5">
              Have a question or want to work with us? Fill out the form and
              we’ll get back to you!
            </p>
            <Form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group
                    controlId="formName"
                    aria-labelledby="formNameLabel"
                    aria-describedby="formNameHelp"
                  >
                    <Form.Label id="formNameLabel">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                      aria-describedby="formNameHelp"
                    />
                    <Form.Text
                      className={styles.formHelp}
                      id="formNameHelp"
                      muted
                    >
                      Your full name.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    controlId="formEmail"
                    aria-labelledby="formEmailLabel"
                    aria-describedby="formEmailHelp"
                  >
                    <Form.Label id="formEmailLabel">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                      aria-describedby="formEmailHelp"
                    />
                    <Form.Text
                      className={styles.formHelp}
                      id="formEmailHelp"
                      muted
                    >
                      We'll never share your email.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group
                controlId="formMessage"
                className="mt-3"
                aria-labelledby="formMessageLabel"
              >
                <Form.Label id="formMessageLabel">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  required
                  aria-describedby="formMessageHelp"
                />
                <Form.Text
                  className={styles.formHelp}
                  id="formMessageHelp"
                  muted
                >
                  Let us know how we can help.
                </Form.Text>
              </Form.Group>
              <div className="text-center mt-4">
                <Button
                  variant="primary"
                  type="submit"
                  className={styles.submitBtn}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
