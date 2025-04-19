import React from "react";
import Meal from "./Meal";
import { useFoodPageContext } from "../pages/FoodPage";
import Wrapper from "../assets/Wrappers/MealContainer";
import PageBtnContainer from "./PageBtnContainer";

const MealContainer = ({ meals: externalMeals }) => {
  const { data } = useFoodPageContext();
  const mealsToShow = externalMeals || data.meals || [];
  const totalMeals = externalMeals
    ? externalMeals.length
    : data.totalMeals || 0;
  const numOfPages = data.numOfPages || 1;

  if (!Array.isArray(mealsToShow) || mealsToShow.length === 0) {
    return (
      <Wrapper>
        <h5>No meals found</h5>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalMeals} meal{totalMeals !== 1 ? "s" : ""} found
      </h5>
      <div className="meals">
        {mealsToShow.map((meal) => (
          <Meal key={meal._id} {...meal} />
        ))}
      </div>
      {!externalMeals && numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default MealContainer;
