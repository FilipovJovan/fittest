import {useEffect, useMemo, useState} from "react";
import {useLocation, useNavigate, useOutletContext} from "react-router-dom";
import customFetch from "../utils/customFetch";
import {toast} from "react-toastify";

export const useAchievementsPage = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const {user} = useOutletContext();

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    const isMainPage = useMemo(
        () => location.pathname === "/dashboard/achievements",
        [location.pathname]
    );

    useEffect(() => {
        if (!user?._id) return;

        const fetchProfile = async () => {
            try {
                const {data} = await customFetch.get(
                    `/gamification/profile/${user._id}`,
                    {
                        headers: {
                            "x-api-key": apiKey,
                        },
                    }
                );
                setProfile(data);
            } catch (error) {
                console.error("Error:", error);
                toast.error(
                    error?.response?.data?.message || "No gamification profile!"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [user?._id, apiKey]);

    const goBack = () => navigate("/dashboard/achievements");

    return {
        profile,
        loading,
        isMainPage,
        goBack,
    };
};
