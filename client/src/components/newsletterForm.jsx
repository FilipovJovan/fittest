import React, { useState } from "react";
import { Container, Button, CardFooter, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Wrapper from "../assets/Wrappers/newsLetter";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/signup-newsletter",
        {
          email,
        }
      );
      setMessage(response.data);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Wrapper>
      <CardFooter className="text-center text-lg-left mt-4 container">
        <Container className="p-4">
          <form onSubmit={handleSubmit}>
            <Row className="d-flex justify-content-center">
              <Col size="auto" className="mb-4 mb-md-0">
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </Col>

              <Col md="5" size="12" className="mb-4 mb-md-0">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Col>

              <Col size="auto" className="mb-4 mb-md-0">
                <Button type="submit" className="button">
                  Subscribe
                </Button>
              </Col>
            </Row>
            {message && (
              <Row className="d-flex justify-content-center mt-3">
                <Col size="12" className="text-center">
                  <p>{message}</p>
                </Col>
              </Row>
            )}
          </form>
        </Container>
      </CardFooter>
    </Wrapper>
  );
};

export default Newsletter;
