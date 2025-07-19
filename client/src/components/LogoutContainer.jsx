import React from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/Wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useDashboardContext();
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY;

  const logoutUser = async () => {
    // console.log("reached");

    navigate("/");
    await customFetch.get("/auth/logout", {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });
    toast.success("Logging out...");
  };
  return (
    <Wrapper>
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
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
