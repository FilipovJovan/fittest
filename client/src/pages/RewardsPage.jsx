import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/RewardsWrapper";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import RewardComponent from "../components/RewardComponent";
import { Filter, Unlock, Lock, X } from "lucide-react";

const RewardsPage = () => {
  const location = useLocation();
  const apiKey = import.meta.env.VITE_API_KEY;
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const unlockedRewards = location.state?.rewards || [];

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const res = await customFetch.get("/gamification/reward/get", {
          headers: { "x-api-key": apiKey },
        });

        const unlockedIds = unlockedRewards.map((rw) =>
          typeof rw.rewardId === "string" ? rw.rewardId : rw.rewardId._id
        );

        const allRewards = res.data.map((reward) => ({
          ...reward,
          unlocked: unlockedIds.includes(reward._id),
        }));

        setRewards(allRewards);
      } catch (error) {
        console.error("Error:", error);
        toast.error(
          error?.response?.data?.message || "No gamification profile!"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchRewards();
  }, [apiKey, unlockedRewards]);

  if (loading) return <p className="loading">Loading rewards...</p>;
  if (!rewards.length) return <p className="empty">No rewards found!</p>;

  const filteredRewards = rewards.filter((reward) => {
    if (filter === "unlocked") return reward.unlocked;
    if (filter === "locked") return !reward.unlocked;
    return true;
  });

  const handleFilterSelect = (type) => {
    setFilter(type);
    setShowFilters(false);
  };

  return (
    <Wrapper>
      <div className="rewards-header">
        <h2>Rewards</h2>

        <div
          className="filter-toggle"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          <Filter size={18} />
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

      <div className="rewards-grid">
        {filteredRewards.map((reward) => (
          <RewardComponent key={reward._id} {...reward} />
        ))}
      </div>
    </Wrapper>
  );
};

export default RewardsPage;
