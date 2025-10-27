// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ChallengesPage.scss";
import {useChallengesPage} from "./ChallengesPage.logic";
import {Filter, Lock, Unlock, X} from "lucide-react";
import ChallengeComponent from "../../components/ChallengeComponent.jsx";

const ChallengesPage = () => {
    const {
        filteredChallenges,
        handleFilterSelect,
        showFilters,
        loading,
        filter,
        challenges,
        streak,
        profile,
        setShowFilters
    } = useChallengesPage();

    if (loading) return <p>Loading challenges...</p>;
    if (!challenges.length) return <p>No challenges found!</p>;
    return (
        <>
            <div className="rewards-header">
                <h2>Challenges</h2>

                <div
                    className="filter-toggle"
                    onClick={() => setShowFilters((prev) => !prev)}
                >
                    {showFilters ? <X size={18}/> : <Filter size={18}/>}
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
                        className={`filter-option ${filter === "enrolled" ? "active" : ""}`}
                        onClick={() => handleFilterSelect("enrolled")}
                    >
                        <Unlock size={16}/> Enrolled
                    </div>
                    <div
                        className={`filter-option ${filter === "notEnrolled" ? "active" : ""}`}
                        onClick={() => handleFilterSelect("notEnrolled")}
                    >
                        <Lock size={16}/> Not Enrolled
                    </div>
                </div>
            )}

            <div className="challenge">
                {filteredChallenges.map((challenge) => (
                    <ChallengeComponent
                        key={challenge._id}
                        {...challenge}
                        streak={streak}
                        progress={challenge.progress}
                        profile={profile}
                    />
                ))}
            </div>
        </>
    );
};

export default ChallengesPage;
