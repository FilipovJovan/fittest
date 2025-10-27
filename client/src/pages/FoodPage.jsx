import React, { useEffect, useState, useContext, createContext } from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/FoodItems";
import { Row, Col } from "react-bootstrap";
import MealContainer from "../components/MealContainer";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import SearchContainer from "../components/SearchContainer";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const FoodPageContext = createContext();

const FoodPage = ({ proteins, carbs, fat, calories }) => {
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
      const params = Object.fromEntries([
        ...new URLSearchParams(location.search),
      ]);

      try {
        const response = await customFetch.get(
          "/calculate-calories-macros/get-meals",
          {
            params,
            headers: { "x-api-key": apiKey },
          }
        );

        const userResponse = await customFetch.get("/users/current-user", {
          headers: { "x-api-key": apiKey },
        });

        const data = response.data || {
          meals: [],
          totalMeals: 0,
          numOfPages: 1,
        };

        setData({
          meals: Array.isArray(data.meals) ? data.meals : [],
          totalMeals: data.totalMeals ?? data.meals?.length ?? 0,
          numOfPages: data.numOfPages ?? 1,
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

  const userMacros = user.macros || { protein: proteins, carbs, fat };
  const userCalories = user.currentCalories || calories;

  return (
    <Wrapper>
      <FoodPageContext.Provider
        value={{ data, user, searchValues, userMacros, userCalories }}
      >
        <h2>Your Diet</h2>
        <Row className="link-row">
          <Col className="link-col">
            <Link to="macros">
              <p>Your Macros</p>
            </Link>
          </Col>
          <Col className="link-col">
            <Link to="all-meals">
              <p>All Meals</p>
            </Link>
          </Col>
        </Row>
        {/*<MealContainer />*/}
        <Outlet />
      </FoodPageContext.Provider>
    </Wrapper>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFoodPageContext = () => {
  const context = useContext(FoodPageContext);
  if (!context) {
    throw new Error("useFoodPageContext must be used within FoodPageContext.Provider");
  }
  return context;
};
export default FoodPage;
