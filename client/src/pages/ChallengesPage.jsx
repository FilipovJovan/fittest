import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/Wrappers/ChallengesWrapper";
import customFetch from "../utils/customFetch";
import ChallengeComponent from "../components/ChallengeComponent";
import { Filter, Unlock, Lock, X } from "lucide-react";

const ChallengesPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { user } = useAuth();
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const enrolledChallenges = location.state?.enrolledChallenges || [];
  const streak = location.state?.streak;
  const { profile } = useOutletContext();
  const [showFilters, setShowFilters] = useState(false);
  const previousChallengesRef = useRef([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await customFetch.get("/gamification/challenge/get", {
          headers: { "x-api-key": apiKey },
        });

        const allChallenges = res.data.map((challenge) => {
          const enrolledChallenge = enrolledChallenges?.find(
            (ec) => ec.challengeId._id === challenge._id
          );

          const enrolled = Boolean(enrolledChallenge);
          const progress =
            enrolledChallenge?.progress ??
            (() => {
              switch (challenge.metric) {
                case "streaks":
                case "days":
                  return streak?.current || 0;
                case "workouts":
                  return user?.workoutsCompleted || 0;
                case "reps":
                  return location?.state?.totalReps || 0;
                case "sets":
                  return location?.state?.totalSets || 0;
                default:
                  return 0;
              }
            })();

          const completed = enrolledChallenge?.completed ?? false;

          return {
            ...challenge,
            enrolled,
            completed,
            progress,
          };
        });

        // ✅ Compare before updating state
        const prevChallenges = previousChallengesRef.current;

        allChallenges.forEach((challenge) => {
          const prev = prevChallenges.find((p) => p._id === challenge._id);

          if (!prev?.completed && challenge.completed) {
            toast.success(`🔥 Challenge Completed: ${challenge.name}`);
          } else if (
            prev &&
            challenge.progress > prev.progress &&
            !challenge.completed
          ) {
            toast.info(
              `📈 ${challenge.name}: ${challenge.progress}/${challenge.target}`
            );
          }
        });

        previousChallengesRef.current = allChallenges;
        setChallenges(allChallenges);
      } catch (error) {
        console.error("Error:", error);
        toast.error(
          error?.response?.data?.message || "No gamification profile!"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchChallenges();
  }, [apiKey, enrolledChallenges, streak, location.state]);

  if (loading) return <p>Loading challenges...</p>;
  if (!challenges.length) return <p>No challenges found!</p>;

  const filteredChallenges = challenges.filter((challenge) => {
    if (filter === "enrolled") return challenge.enrolled;
    if (filter === "notEnrolled") return !challenge.enrolled;
    return true;
  });

  const handleFilterSelect = (type) => {
    setFilter(type);
    setShowFilters(false);
  };

  return (
    <Wrapper>
      <div className="rewards-header">
        <h2>Challenges</h2>

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
            className={`filter-option ${filter === "enrolled" ? "active" : ""}`}
            onClick={() => handleFilterSelect("enrolled")}
          >
            <Unlock size={16} /> Enrolled
          </div>
          <div
            className={`filter-option ${filter === "notEnrolled" ? "active" : ""}`}
            onClick={() => handleFilterSelect("notEnrolled")}
          >
            <Lock size={16} /> Not Enrolled
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
    </Wrapper>
  );
};

export default ChallengesPage;
