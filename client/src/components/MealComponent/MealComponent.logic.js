// Logic for MealComponent
import {useState} from "react";

export const useMealComponent = (recipe, ingredients) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Convert comma-separated ingredients string to array
    const ingredientsList =
        ingredients?.split(",").map((item) => item.trim()) || [];

    // Convert recipe string to steps (split by new lines or numbers)
    const recipeSteps = recipe?.split(/\n|\d+\.\s/).filter(Boolean) || [];
    return {show, handleShow, handleClose, ingredientsList, recipeSteps};
};
