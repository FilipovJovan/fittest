import React, { createContext, useContext, useState } from "react";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Dashboard";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import NavbarDashboardPage from "../components/NavbarDashboardPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useRef } from "react";
import { useEffect } from "react";

export const loader = async () => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const { data } = await customFetch.get("/users/current-user", {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    // console.log(error);
    return redirect("/login");
  }
};

const DashboardContext = createContext();

const DashboardPage = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const hasLoggedInToday = useRef(false);

  useEffect(() => {
    const handleDailyLogin = async () => {
      if (!user?._id) return;

      const today = new Date().toDateString();
      const storedLogin = localStorage.getItem("lastDailyLogin");

      if (storedLogin === today) return;

      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const res = await customFetch.post(
          `/gamification/daily-login/${user._id}`,
          {},
          {
            headers: {
              "x-api-key": apiKey,
              "Content-Type": "application/json",
            },
          }
        );

        if (res.data.xpGained > 0) {
          toast.success("You earned your daily login XP!");
        } else {
          toast.info("XP already claimed for today.");
        }
        localStorage.setItem("lastDailyLogin", today);
      } catch (err) {
        console.error("Daily login error:", err);
      }
    };

    handleDailyLogin();
  }, [user?._id]);

  console.log(hasLoggedInToday);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };

  return (
    <DashboardContext.Provider
      value={{ user, showSidebar, toggleSidebar, logoutUser }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <NavbarDashboardPage />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardPage;
