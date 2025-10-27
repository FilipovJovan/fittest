import React from "react";
import Wrapper from "../assets/Wrappers/Dashboard";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import NavbarDashboardPage from "../components/NavbarDashboardPage";
import {Outlet} from "react-router-dom";
import {DashboardContext, useDashboardPage} from "./DashboardPage.logic";

const DashboardPage = () => {
    const {user, showSidebar, toggleSidebar, logoutUser} = useDashboardPage();

    return (
        <DashboardContext.Provider value={{user, showSidebar, toggleSidebar, logoutUser}}>
            <>
                <main className="dashboard">
                    <SmallSidebar/>
                    <BigSidebar/>
                    <div>
                        <NavbarDashboardPage/>
                        <div className="dashboard-page">
                            <Outlet context={{user}}/>
                        </div>
                    </div>
                </main>
            </>
        </DashboardContext.Provider>
    );
};

export default DashboardPage;
