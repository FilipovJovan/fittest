import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import BadgeComponent from "../components/BadgeComponent";
import Wrapper from "../assets/Wrappers/BadgesWrapper";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { Filter, Unlock, Lock, X } from "lucide-react";

const BadgesPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { user } = useAuth();
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const unlockedBadges = location.state?.unlockedBadges || [];
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const res = await customFetch.get("/gamification/badge/get", {
          headers: { "x-api-key": apiKey },
        });

        const unlockedIds = unlockedBadges.map((ub) => ub.badgeId._id);
        const allBadges = res.data.map((badge) => ({
          ...badge,
          unlocked: unlockedIds.includes(badge._id),
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
  if (loading) return <p>Loading badges...</p>;
  if (!badges.length) return <p>No badges found!</p>;

  const filteredBadges = badges.filter((badge) => {
    if (filter === "unlocked") return badge.unlocked;
    if (filter === "locked") return !badge.unlocked;
    return true;
  });

  const handleFilterSelect = (type) => {
    setFilter(type);
    setShowFilters(false);
  };

  return (
    <Wrapper>
      <div className="rewards-header">
        <h2>Badges</h2>

        <div
          className="filter-toggle"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? <X size={18} /> : <Filter size={18} />}
          <span>Filters</span>
        </div>
      </div>

      {showFilters && (
        <div className="filter-dropdown">
          <div
            className={`filter-option ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterSelect("all")}
          >
            🌟 All
          </div>
          <div
            className={`filter-option ${filter === "unlocked" ? "active" : ""}`}
            onClick={() => handleFilterSelect("unlocked")}
          >
            <Unlock size={16} /> Unlocked
          </div>
          <div
            className={`filter-option ${filter === "locked" ? "active" : ""}`}
            onClick={() => handleFilterSelect("locked")}
          >
            <Lock size={16} /> Locked
          </div>
        </div>
      )}

      <div className="badge">
        {filteredBadges.map((badge) => (
          <BadgeComponent key={badge._id} {...badge} />
        ))}
      </div>
    </Wrapper>
  );
};

export default BadgesPage;
