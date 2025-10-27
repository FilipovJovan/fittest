// eslint-disable-next-line no-unused-vars
import React from "react";
import Wrapper from "../assets/Wrappers/BadgesWrapper";
import BadgeComponent from "../components/BadgeComponent";
import { Filter, Unlock, Lock, X } from "lucide-react";
import { useBadgesPage } from "./BadgesPage.logic";

const BadgesPage = () => {
    const {
        loading,
        filteredBadges,
        showFilters,
        filter,
        setShowFilters,
        handleFilterSelect,
    } = useBadgesPage();

    if (loading) return <p>Loading badges...</p>;
    if (!filteredBadges.length) return <p>No badges found!</p>;

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
