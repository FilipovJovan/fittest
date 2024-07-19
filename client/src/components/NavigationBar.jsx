import React from "react";
import Wrapper from "../assets/Wrappers/Navbar";
import { FiAlignRight } from "react-icons/fi";
import Logo from "./Logo";
import { Container, Navbar, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const NavigationBar = () => {
  return (
    <Wrapper>
      <Container className="fluid">
        <Navbar expand="lg" className="py-4 px-4 sticky-top ">
          <Navbar.Brand>
            <Link
              to="#section-one"
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              className="mr-3 navbar-items active"
            >
              <Logo className="logo" />
            </Link>
          </Navbar.Brand>

          <Navbar>
            <Nav>
              <Link
                to="#section-two"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="mr-3 navbar-items active"
              >
                About
              </Link>
              <Link
                to="#section-three"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="mr-3 navbar-items active"
              >
                Pricing
              </Link>
              <Link
                to="#section-four"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="mr-3 navbar-items active"
              >
                Contact
              </Link>
            </Nav>
          </Navbar>
        </Navbar>
      </Container>
    </Wrapper>
  );
};

export default NavigationBar;
