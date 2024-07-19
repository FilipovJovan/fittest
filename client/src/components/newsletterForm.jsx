import React from "react";
import { Container, Button, CardFooter, Row, Col, Form } from "react-bootstrap";
import Wrapper from "../assets/Wrappers/newsLetter";
const Newsletter = () => {
  return (
    <Wrapper>
      <CardFooter className="text-center text-lg-left mt-4 container">
        <Container className="p-4">
          <form action="">
            <Row className="d-flex justify-content-center">
              <Col size="auto" className="mb-4 mb-md-0">
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </Col>

              <Col md="5" size="12" className="mb-4 mb-md-0">
                <Form.Control type="text" placeholder="name@example.com" />
              </Col>

              <Col size="auto" className="mb-4 mb-md-0">
                <Button className="button">Subscribe</Button>
              </Col>
            </Row>
          </form>
        </Container>
      </CardFooter>
    </Wrapper>
  );
};
export default Newsletter;
