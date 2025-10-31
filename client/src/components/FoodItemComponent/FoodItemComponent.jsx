import React from "react";
import "./FoodItemComponent.scss";
import { useFoodItemComponent } from "./FoodItemComponent.logic";
import {Button, Card} from "react-bootstrap";
import Wrapper from "../../assets/Wrappers/FoodItems.js";

const FoodItemComponent = (props) => {
  const logic = useFoodItemComponent(props);
  return (
      <>
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
      </>
  );
};

export default FoodItemComponent;
