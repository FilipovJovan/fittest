// Logic for LogoutContainerComponent
import {useState} from "react";
import {useDashboardContext} from "../../pages/DashboardPage.jsx";
import {useNavigate} from "react-router-dom";
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";

export const useLogoutContainerComponent = () => {
    const [showLogout, setShowLogout] = useState(false);
    const {user} = useDashboardContext();
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
    return {user, showLogout, setShowLogout, logoutUser};
};
