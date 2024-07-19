import React from "react";
import { Container, Button, CardFooter, Row, Col, Form } from "react-bootstrap";
import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import Wrapper from "../assets/Wrappers/Footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <footer className=" text-center text-lg-start text-muted mt-4">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#" className="me-4 text-reset">
              <FaFacebook />
            </a>
            <a href="#" className="me-4 text-reset">
              <FaTwitter />
            </a>
            <a href="#" className="me-4 text-reset">
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/app_fittest?igsh=MXVicDBsb3JkY28w"
              target="blank"
              className="me-4 text-reset"
            >
              <FaInstagram />
            </a>
            <a href="#" className="me-4 text-reset">
              <FaTiktok />
            </a>
          </div>
        </section>

        <section className="">
          <Container className="text-center text-md-start mt-5">
            <Row className="mt-3">
              <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <FaGem className="me-3" />
                  FITTEST
                </h6>
                <p>
                  Achieve your fitness goals with personalized workouts and meal
                  advice and much more.
                </p>
              </Col>

              <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link
                    to="#section-two"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    className="mr-3 navbar-items active text-reset"
                  >
                    About
                  </Link>
                </p>
                <p>
                  <Link
                    to="#section-three"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    className="mr-3 navbar-items active text-reset"
                  >
                    Pricing
                  </Link>
                </p>
                <p>
                  <Link
                    to="#section-four"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    className="mr-3 navbar-items active text-reset"
                  >
                    Contact
                  </Link>
                </p>
              </Col>

              <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaHome className="me-2" />
                  Kochani, Macedonia
                </p>
                <p>
                  <FaEnvelope className="me-3" />
                  info@example.com
                </p>
                <p>
                  <FaPhone className="me-3" /> + 012 345 678
                </p>
                <p>
                  <FaPrint className="me-3" /> + 012 345 678
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {currentYear} FITTEST. All Rights Reserved.
        </div>
      </footer>
    </Wrapper>
  );
};
export default Footer;
