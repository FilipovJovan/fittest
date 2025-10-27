import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export const useBadgesPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { user } = useAuth();
  const location = useLocation();
  const unlockedBadges = location.state?.unlockedBadges || [];

  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const res = await customFetch.get("/gamification/badge/get", {
          headers: { "x-api-key": apiKey },
        });

        const unlockedIds = unlockedBadges.map((ub) =>
            typeof ub.badgeId === "object"
                ? ub.badgeId._id?.toString()
                : ub.badgeId?.toString()
        );

        const allBadges = res.data.map((badge) => ({
          ...badge,
          unlocked: unlockedIds.includes(badge._id.toString()),
        }));

        setBadges(allBadges);
      } catch (error) {
        console.error("Error:", error);
        toast.error(
            error?.response?.data?.message || "No gamification profile!"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBadges();
  }, [apiKey, unlockedBadges]);

  const filteredBadges = badges.filter((badge) => {
    if (filter === "unlocked") return badge.unlocked;
    if (filter === "locked") return !badge.unlocked;
    return true;
  });

  const handleFilterSelect = (type) => {
    setFilter(type);
    setShowFilters(false);
  };

  return {
    badges,
    loading,
    filter,
    showFilters,
    filteredBadges,
    setShowFilters,
    handleFilterSelect,
  };
};
