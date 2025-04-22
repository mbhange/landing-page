import React, { useState } from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className={styles.header}>
      <Navbar expand="lg" expanded={expanded} className={styles.navbar}>
        <Container>
          <Link href="/" className={`navbar-brand ${styles.brand}`}>
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
            LandingPage
          </Link>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className={styles.toggle}
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Link href="#features" className={`nav-link ${styles.link}`}>
                Features
              </Link>
              <Link href="#about" className={`nav-link ${styles.link}`}>
                About
              </Link>
              <Link href="#contact" className={`nav-link ${styles.link}`}>
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
