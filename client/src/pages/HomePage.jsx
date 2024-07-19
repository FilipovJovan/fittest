import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomePage;
