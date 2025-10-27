import { useEffect, useState, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

export const FoodPageContext = createContext();
export const useFoodPageContext = () => useContext(FoodPageContext);

export const useFoodPage = (initialMacros = {}, initialCalories) => {
  const location = useLocation();

  const [data, setData] = useState({
    meals: [],
    totalMeals: 0,
    numOfPages: 1,
    currentPage: 1,
  });
  const [user, setUser] = useState({});
  const [searchValues, setSearchValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const params = Object.fromEntries([...new URLSearchParams(location.search)]);

      try {
        const response = await customFetch.get("/calculate-calories-macros/get-meals", {
          params,
          headers: { "x-api-key": apiKey },
        });

        const userResponse = await customFetch.get("/users/current-user", {
          headers: { "x-api-key": apiKey },
        });

        const responseData = response.data || { meals: [], totalMeals: 0, numOfPages: 1 };

        setData({
          meals: Array.isArray(responseData.meals) ? responseData.meals : [],
          totalMeals: responseData.totalMeals ?? responseData.meals?.length ?? 0,
          numOfPages: responseData.numOfPages ?? 1,
          currentPage: Number(params.page) || 1,
        });

        setUser(userResponse.data.user || {});
        setSearchValues(params);
      } catch (error) {
        console.error("Fetch error:", error?.response?.data || error.message);
        toast.error(error?.response?.data?.msg || "Failed to load data");
        setData({ meals: [], totalMeals: 0, numOfPages: 1, currentPage: 1 });
      }
    };

    fetchData();
  }, [location.search]);

  const userMacros = user.macros || initialMacros;
  const userCalories = user.currentCalories || initialCalories;

  return { data, user, searchValues, userMacros, userCalories };
};
