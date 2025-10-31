import React from "react";
import "./MealContainerComponent.scss";
import {useMealContainerComponent} from "./MealContainerComponent.logic";
import Wrapper from "../../assets/Wrappers/MealContainer.js";
import Meal from "../Meal.jsx";
import PageBtnContainer from "../PageBtnContainer.jsx";

const MealContainerComponent = () => {
    const {mealsToShow, totalMeals, numOfPages, externalMeals} = useMealContainerComponent();
    if (!Array.isArray(mealsToShow) || mealsToShow.length === 0) {
        return (
            <>
                <h5>No meals found</h5>
            </>
        );
    }
    return (
        <>
            <h5>
                {totalMeals} meal{totalMeals !== 1 ? "s" : ""} found
            </h5>
            <div className="meals">
                {mealsToShow.map((meal) => (
                    <Meal key={meal._id} {...meal} />
                ))}
            </div>
            {!externalMeals && numOfPages > 1 && <PageBtnContainer/>}
        </>
    );
};

export default MealContainerComponent;
