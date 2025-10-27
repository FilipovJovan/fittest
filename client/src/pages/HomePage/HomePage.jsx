import React from "react";
import "./HomePage.scss";
import { useHomePage } from "./HomePage.logic";
import {Outlet} from "react-router-dom";

const HomePage = (props) => {
  const logic = useHomePage(props);
  return (
      <div>
          <Outlet/>
      </div>
  );
};

export default HomePage;
