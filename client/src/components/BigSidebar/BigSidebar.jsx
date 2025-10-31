import React from "react";
import "./BigSidebar.scss";
import {useBigSidebar} from "./BigSidebar.logic";
import {useDashboardContext} from "../../pages/DashboardPage.jsx";
import NavLinks from "../NavLinks.jsx";

const BigSidebar = () => {
    const {showSidebar} = useDashboardContext();
    return (
        <>
            <div
                className={
                    showSidebar ? "sidebar-container " : " show-sidebar sidebar-container"
                }
            >
                <div className="content">
                    {/*<header>
            <Logo />
          </header>*/}
                    <NavLinks isBigSidebar/>
                </div>
            </div>
        </>
    );
};

export default BigSidebar;
