// eslint-disable-next-line no-unused-vars
import React from "react";
import Wrapper from "../assets/Wrappers/AchievementsWrapper";
import {useAchievementsPage} from "./AchievementsPage.logic";
import {ProgressBar, Row, Col} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

const AchievementsPage = () => {
    const {profile, loading, isMainPage, goBack} = useAchievementsPage();

    if (loading) return <p>Loading gamification data...</p>;
    if (!profile) return <p>No profile found.</p>;

    const {xp, level, streak, xpForNext} = profile;

    const xpToNextLevel = xpForNext;
    const xpProgress = Math.round(
        Math.min((xp % xpToNextLevel) / xpToNextLevel, 1) * 100
    );
    const xpLeft = xpToNextLevel - xp;

    return (
        <Wrapper>
            {isMainPage ? (
                <>
                    <h2>Achievements Dashboard</h2>
                    <Row className="progress-box mb-4">
                        <Col xs={12} sm={8} className="progress-box-col">
                            <h6 className="progress-title">Your XP</h6>
                            <ProgressBar
                                now={xpProgress}
                                label={`${xp}xp (${xpProgress}%)`}
                                className="progress-bar-custom"
                                animated
                            />
                            <Row className="justify-content-between mt-2">
                                <Col xs="auto">Level {level}</Col>
                                <Col xs="auto">{xpLeft}xp left to next level</Col>
                            </Row>

                            {/* Streak Info */}
                            <Row className="streak-row mt-5">
                                <Col>
                                    <p className="streak-text">
                                        🔥 Current Streak: <strong>{streak.current}</strong> days
                                    </p>
                                </Col>
                                <Col className="text-end">
                                    <p className="streak-text">
                                        🏆 Longest: <strong>{streak.longest}</strong> days
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="level-streak-row">
                        <Col md={3} className="level-streak badges-card">
                            <Link
                                to="/dashboard/achievements/badges"
                                state={{unlockedBadges: profile.badges}}
                                className="block w-full h-full text-white"
                            >
                                <h3>Badges 🏅</h3>
                                <p className="card-subtext">View all badges you’ve unlocked</p>
                            </Link>
                        </Col>

                        <Col md={5} className="level-streak challenges-card">
                            <Link
                                to="/dashboard/achievements/challenges"
                                state={{
                                    enrolledChallenges: profile.challenges,
                                    streak: profile.streak,
                                }}
                                className="block w-full h-full text-white"
                            >
                                <h3>Challenges ⚔️</h3>
                                <p className="card-subtext">Checkout the new challenges</p>
                            </Link>
                        </Col>

                        <Col md={4} className="level-streak rewards-card">
                            <Link
                                to="/dashboard/achievements/rewards"
                                state={{rewards: profile.rewards}}
                                className="block w-full h-full text-white"
                            >
                                <h3>Rewards 🎁</h3>
                                <p className="card-subtext">Claim your rewards</p>
                            </Link>
                        </Col>
                    </Row>
                </>
            ) : (
                <div className="relative">
                    <button
                        onClick={goBack}
                        className="mb-4 flex items-center text-blue-500 hover:text-blue-700 bg-gray-100 p-2 rounded"
                    >
                        <ArrowLeft size={20} className="mr-2"/>
                        Back
                    </button>
                    <Outlet context={{profile}}/>
                </div>
            )}
        </Wrapper>
    );
};

export default AchievementsPage;
