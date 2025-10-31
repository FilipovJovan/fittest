import React from "react";
import "./SmallSidebarComponent.scss";
import {useSmallSidebarComponent} from "./SmallSidebarComponent.logic";
import {useDashboardContext} from "../../pages/DashboardPage.jsx";
import {FaTimes} from "react-icons/fa";
import NavLinks from "../NavLinks.jsx";

const SmallSidebarComponent = () => {
    const {showSidebar, toggleSidebar} = useDashboardContext();
    return (
        <>
            <div
                className={
                    showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
                }
            >
                <div className="content">
                    <button onClick={toggleSidebar} type="button" className="close-btn">
                        <FaTimes/>
                    </button>
                    {/*<header>
            <Logo />
          </header>*/}
                    <NavLinks/>
                </div>
            </div>
        </>
    );
};

export default SmallSidebarComponent;
