// Logic for MealContainerComponent
import {useFoodPageContext} from "../../pages/FoodPage.jsx";

export const useMealContainerComponent = ({meals: externalMeals}) => {
    const {data} = useFoodPageContext();
    const mealsToShow = externalMeals || data.meals || [];
    const totalMeals = externalMeals
        ? externalMeals.length
        : data.totalMeals || 0;
    const numOfPages = data.numOfPages || 1;
    return {mealsToShow, totalMeals, numOfPages, externalMeals};
};
