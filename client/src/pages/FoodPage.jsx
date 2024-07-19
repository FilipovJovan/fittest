import React from "react";
import food from "../utils/FoodData";
import FoodItems from "../components/FoodItems";
import Wrapper from "../assets/Wrappers/FoodItems";

function createEntry(foodItem) {
  return (
    <FoodItems
      key={foodItem.id}
      img={foodItem.imgUrl}
      name={foodItem.name}
      ingredients={foodItem.ingredients}
    />
  );
}

const FoodPage = () => {
  return <Wrapper className="food-card">{food.map(createEntry)}</Wrapper>;
};

export default FoodPage;
