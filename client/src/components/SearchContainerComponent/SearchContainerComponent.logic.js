// Logic for SearchContainerComponent
import {useFoodPageContext} from "../../pages/FoodPage.jsx";
import {useSubmit} from "react-router-dom";
import {useState} from "react";

export const useSearchContainerComponent = () => {
    const {searchValues} = useFoodPageContext();
    const {search, categoryMeal, category, sort} = searchValues;
    const submit = useSubmit();
    const [categoryMealValue, setCategoryMealValue] = useState(categoryMeal);
    const [categoryValue, setCategoryValue] = useState(category);
    // console.log(categoryMealValue);
    // console.log(categoryValue);

    const debounce = (onChange) => {
        let timeout;
        return (e) => {
            const form = e.currentTarget.form;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                onChange(form);
            }, 1000);
        };
    };
    return {search, sort, submit, categoryValue, setCategoryValue, setCategoryMealValue, categoryMealValue, debounce};
};
