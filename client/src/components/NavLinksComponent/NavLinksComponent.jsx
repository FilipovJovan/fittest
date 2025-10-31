import React from "react";
import "./NavLinksComponent.scss";
import {useNavLinksComponent} from "./NavLinksComponent.logic";
import {useDashboardContext} from "../../pages/DashboardPage.jsx";
import {NavLink} from "react-router-dom";
import links from "../../utils/links.jsx";

const NavLinksComponent = ({isBigSidebar}) => {
    const {toggleSidebar, user} = useDashboardContext();
    return (
        <div className="nav-links">
            {links.map((link) => {
                const {text, path, icon} = link;
                return (
                    <NavLink
                        to={path}
                        key={text}
                        className="nav-link"
                        onClick={isBigSidebar ? null : toggleSidebar}
                        end
                    >
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default NavLinksComponent;
