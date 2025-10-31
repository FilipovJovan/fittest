// Logic for MacrosPage
import {useContext, useRef, useState} from "react";
import {FoodPageContext} from "../FoodPage.jsx";
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";

export const useMacrosPage = () => {
    const mealsRef = useRef(null);
    const { user } = useContext(FoodPageContext) || {};
    const [suggestedMeals, setSuggestedMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [mealType, setMealType] = useState("Breakfast"); // default selection

    const apiKey = import.meta.env.VITE_API_KEY;

    const handleSuggestFoods = async () => {
        setLoading(true);
        // console.log("reached");

        try {
            const response = await customFetch.post(
                "/calculate-calories-macros/suggestFoods",
                {
                    userId: user._id,
                    mealType,
                },
                {
                    headers: {
                        "x-api-key": apiKey,
                    },
                }
            );

            const mealsArray = Array.isArray(response.data)
                ? response.data
                : response.data.meals || [];

            setSuggestedMeals(mealsArray);

            setTimeout(() => {
                mealsRef.current?.scrollIntoView({behavior: "smooth"});
            }, 100);
        } catch (error) {
            toast.error("Failed to fetch food suggestions");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSuggestDailyPlan = async () => {
        setLoading(true);
        try {
            const response = await customFetch.post(
                "/calculate-calories-macros/suggestDailyPlan",
                {
                    userId: user._id,
                },
                {
                    headers: {
                        "x-api-key": apiKey,
                    },
                }
            );

            const flattened = Object.values(response.data).flat();
            setSuggestedMeals(flattened);

            setTimeout(() => {
                mealsRef.current?.scrollIntoView({behavior: "smooth"});
            }, 100);
        } catch (error) {
            toast.error("Failed to fetch daily plan");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const userMacros = user?.macros;
    const userCalories = user?.currentCalories;

    return {
        userMacros,
        userCalories,
        mealType,
        setMealType,
        handleSuggestFoods,
        handleSuggestDailyPlan,
        suggestedMeals,
        loading,
        mealsRef
    }
};
