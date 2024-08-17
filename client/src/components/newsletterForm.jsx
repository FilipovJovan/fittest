import React, { useState } from "react";
import {
  Container,
  Button,
  CardFooter,
  Row,
  Col,
  Form,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import Wrapper from "../assets/Wrappers/newsLetter";
import { useSpring, animated } from "react-spring";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fade = useSpring({
    opacity: message || error ? 1 : 0,
    transform: message || error ? "translateY(0)" : "translateY(20px)",
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await axios.post("/signup", { email });
      setMessage(response.data);
      setEmail("");
    } catch (err) {
      console.error("Error response:", err.response); // Log the error response for debugging
      setError(
        err.response && err.response.data
          ? err.response.data
          : "An error occurred"
      );
    }
  };

  return (
    <Wrapper>
      <CardFooter className="text-center text-lg-left mt-4 container">
        <Container className="p-4">
          <form onSubmit={handleSubscribe}>
            <Row className="d-flex justify-content-center">
              <Col size="auto" className="mb-4 mb-md-0">
                <p>
                  <strong>Sign up to claim your discount!</strong>
                </p>
              </Col>
              <Col md="5" size="12" className="mb-4 mb-md-0">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Col>
              <Col size="auto" className="mb-4 mb-md-0">
                <Button type="submit" className="button">
                  Subscribe
                </Button>
              </Col>
            </Row>
          </form>
          <animated.div style={fade}>
            {message && (
              <Alert variant="success" className="mt-3">
                {message}
              </Alert>
            )}
            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
          </animated.div>
        </Container>
      </CardFooter>
    </Wrapper>
  );
};

export default Newsletter;
