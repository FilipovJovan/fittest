import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardPage";
import Wrapper from "../assets/Wrappers/BigSidebar";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : " show-sidebar sidebar-container"
        }
      >
        <div className="content">
          {/*<header>
            <Logo />
          </header>*/}
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
