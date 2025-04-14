import React from "react";
import Wrapper from "../assets/Wrappers/NavbarDashboards";
import { FaAlignLeft } from "react-icons/fa";
import LogoutContainer from "./LogoutContainer";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardPage";
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button onClick={toggleSidebar} type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        <h4 className="logo-text">FITTEST</h4>
        <div className="btn-container">
          <LogoutContainer />{" "}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
