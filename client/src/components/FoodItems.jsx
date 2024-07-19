import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Wrapper from "../assets/Wrappers/FoodItems";
const FoodItems = (props) => {
  return (
    <Wrapper>
      {" "}
      <Card className="card-components">
        <Card.Img variant="top" src="holder.js/100px180">
          {props.imgUrl}
        </Card.Img>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.ingredients}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default FoodItems;
