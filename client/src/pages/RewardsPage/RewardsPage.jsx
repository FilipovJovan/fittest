// eslint-disable-next-line no-unused-vars
import React from "react";
import "./RewardsPage.scss";
import {useRewardsPage} from "./RewardsPage.logic";
import {Filter, Lock, Unlock} from "lucide-react";
import RewardComponent from "../../components/RewardComponent.jsx";

const RewardsPage = () => {
    const {
        loading,
        rewards,
        setShowFilters,
        filter,
        handleFilterSelect,
        showFilters,
        filteredRewards
    } = useRewardsPage();

    if (loading) return <p className="loading">Loading rewards...</p>;
    if (!rewards.length) return <p className="empty">No rewards found!</p>;

    return (
        <>
            <div className="rewards-header">
                <h2>Rewards</h2>

                <div
                    className="filter-toggle"
                    onClick={() => setShowFilters((prev) => !prev)}
                >
                    <Filter size={18}/>
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
                        <Unlock size={16}/> Unlocked
                    </div>
                    <div
                        className={`filter-option ${filter === "locked" ? "active" : ""}`}
                        onClick={() => handleFilterSelect("locked")}
                    >
                        <Lock size={16}/> Locked
                    </div>
                </div>
            )}

            <div className="rewards-grid">
                {filteredRewards.map((reward) => (
                    <RewardComponent key={reward._id} {...reward} />
                ))}
            </div>
        </>
    );
};

export default RewardsPage;
