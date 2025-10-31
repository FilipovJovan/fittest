import React from "react";
import "./LogoutContainerComponent.scss";
import {useLogoutContainerComponent} from "./LogoutContainerComponent.logic";
import Wrapper from "../../assets/Wrappers/LogoutContainer.js";
import {FaCaretDown} from "react-icons/fa";

const LogoutContainerComponent = (props) => {
    const {user, showLogout, setShowLogout, logoutUser} = useLogoutContainerComponent(props);
    return (
        <>
            <button
                type="button"
                className="btn logout-btn"
                onClick={() => setShowLogout(!showLogout)}
            >
                {/*{user.avatar ? (
         <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}*/}

                {user?.name}
                <FaCaretDown/>
            </button>
            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
                <button type="button" className="dropdown-btn" onClick={logoutUser}>
                    logout
                </button>
            </div>
        </>
    );
};

export default LogoutContainerComponent;
