import React from "react";
import "./NavbarDashboardPageComponent.scss";
import { useNavbarDashboardPageComponent } from "./NavbarDashboardPageComponent.logic";
import {useDashboardContext} from "../../pages/DashboardPage.jsx";
import {FaAlignLeft} from "react-icons/fa";
import LogoutContainer from "../LogoutContainer.jsx";

const NavbarDashboardPageComponent = () => {
    const { toggleSidebar } = useDashboardContext();

    return (
        <>
            <div className="nav-center">
                <button onClick={toggleSidebar} type="button" className="toggle-btn">
                    <FaAlignLeft />
                </button>
                <h4 className="logo-text">FITTEST</h4>
                <div className="btn-container">
                    <LogoutContainer />{" "}
                </div>
            </div>
        </>
    );
};

export default NavbarDashboardPageComponent;
