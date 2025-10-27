import { createContext, useContext, useState, useRef, useEffect } from "react";
import { useLoaderData, useNavigate, redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

// Context
export const DashboardContext = createContext();
export const useDashboardContext = () => useContext(DashboardContext);

// Loader
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
    return redirect("/login");
  }
};

// Hook for DashboardPage logic
export const useDashboardPage = () => {
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

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };

  return { user, showSidebar, toggleSidebar, logoutUser, hasLoggedInToday };
};
