import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/Wrappers/ChallengesWrapper";
import customFetch from "../utils/customFetch";
import ChallengeComponent from "../components/ChallengeComponent";

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

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await customFetch.get("/gamification/challenge/get", {
          headers: { "x-api-key": apiKey },
        });

        const enrolledIds = enrolledChallenges.map((ec) => ec.challengeId._id);

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
    if (filter === "not enrolled") return !challenge.enrolled;
    return true;
  });

  return (
    <Wrapper>
      <h2 className="text-2xl font-bold mb-4">Challenges</h2>

      <div className="buttons">
        {["all", "enrolled", "not enrolled"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`filter-btn ${filter === type ? type : ""}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

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
