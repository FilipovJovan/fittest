import React from "react";
import "./NavigationBarComponent.scss";
import {useNavigationBarComponent} from "./NavigationBarComponent.logic";
import {Container, Nav, Navbar} from "react-bootstrap";
import {HashLink as Link} from "react-router-hash-link";
import Logo from "../Logo.jsx";
import {FiAlignRight} from "react-icons/fi";
import Wrapper from "../../assets/Wrappers/Navbar.js";

const NavigationBarComponent = (props) => {
    const logic = useNavigationBarComponent(props);
    return (
        <>
            <Container className="fluid">
                <Navbar expand="lg" className="py-4 px-4 sticky-top">
                    <Navbar.Brand>
                        <Link
                            to="#section-one"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-50}
                            className="mr-3 navbar-items active"
                        >
                            <Logo className="logo"/>
                        </Link>
                    </Navbar.Brand>

                    {/* Hamburger Icon */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FiAlignRight className="toggle-icon"/>
                    </Navbar.Toggle>

                    {/* Navbar Items */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
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
                                to="/ebooks"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-50}
                                className="mr-3 navbar-items active"
                            >
                                E-books
                            </Link>
                            <Link
                                to="/terms-and-conditions"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-50}
                                className="mr-3 navbar-items active"
                            >
                                Terms & conditions
                            </Link>
                            <Link
                                to="/privacy-policy"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-50}
                                className="mr-3 navbar-items active"
                            >
                                Privacy policy
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
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    );
};

export default NavigationBarComponent;
