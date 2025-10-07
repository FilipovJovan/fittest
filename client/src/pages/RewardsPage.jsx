import React, { useEffect, useState } from "react";
import Wrapper from "../assets/Wrappers/RewardsWrapper";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import RewardComponent from "../components/RewardComponent";

const RewardsPage = () => {
  const location = useLocation();
  const apiKey = import.meta.env.VITE_API_KEY;
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const unlockedRewards = location.state?.rewards || [];

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const res = await customFetch.get("/gamification/reward/get", {
          headers: { "x-api-key": apiKey },
        });

        console.log("Unlocked rewards from location.state:", unlockedRewards);

        const unlockedIds = unlockedRewards.map((rw) =>
          typeof rw.rewardId === "string" ? rw.rewardId : rw.rewardId._id
        );

        console.log("Unlocked reward IDs:", unlockedIds);

        const allRewards = res.data.map((reward) => ({
          ...reward,
          unlocked: unlockedIds.includes(reward._id),
        }));

        console.log("All rewards with unlock status:", allRewards);
        console.log(
          "Unlocked rewards:",
          allRewards.filter((r) => r.unlocked)
        );

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

  return (
    <Wrapper>
      <h2>Rewards</h2>

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

      <div className="rewards-grid">
        {filteredRewards.map((reward) => (
          <RewardComponent key={reward._id} {...reward} />
        ))}
      </div>
    </Wrapper>
  );
};

export default RewardsPage;
