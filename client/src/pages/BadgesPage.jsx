import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import BadgeComponent from "../components/BadgeComponent";
import Wrapper from "../assets/Wrappers/BadgesWrapper";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";

const BadgesPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { user } = useAuth();
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const unlockedBadges = location.state?.unlockedBadges || [];
  console.log(unlockedBadges);

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

  return (
    <Wrapper>
      <h2 className="text-2xl font-bold mb-4">Your Badges</h2>

      <div className="buttons">
        {["all", "unlocked", "locked"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`filter-btn ${filter === type ? type : ""}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="badge">
        {filteredBadges.map((badge) => (
          <BadgeComponent key={badge._id} {...badge} />
        ))}
      </div>
    </Wrapper>
  );
};

export default BadgesPage;
