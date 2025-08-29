import React, { createContext, useContext, useEffect, useState } from "react";
import customFetch from "../src/utils/customFetch";
import { useAuth } from "./AuthContext";

let wholeWorkoutPlan = null;

export const getFullWorkoutPlan = () => wholeWorkoutPlan;

const WorkoutContext = createContext();
export const useWorkout = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [fullWorkoutPlan, setFullWorkoutPlan] = useState(null);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [workoutPhase, setWorkoutPhase] = useState("loading");
  const [redirectTo, setRedirectTo] = useState(null);
  const [resumeState, setResumeState] = useState(() => {
    const saved = localStorage.getItem("resumeWorkout");
    return saved ? JSON.parse(saved) : null;
  });

  const { isAuthenticated, authChecked, user } = useAuth();

  useEffect(() => {
    if (resumeState) {
      localStorage.setItem("resumeWorkout", JSON.stringify(resumeState));
    } else {
      localStorage.removeItem("resumeWorkout");
    }
  });

  // Helper to find today's workout from the plan
  const getCurrentWorkoutFromPlan = (plan) => {
    const today = new Date().toDateString();
    const program = plan?.workoutProgram?.[0];

    if (!program?.weeks?.length) return null;

    for (const week of program.weeks) {
      for (const day of week.days || []) {
        const dayDate = new Date(day.date);
        if (!isNaN(dayDate.getTime()) && dayDate.toDateString() === today) {
          return day;
        }
      }
    }
    return null;
  };

  const fetchWorkoutPlan = async () => {
    console.log("Targeted");

    try {
      setLoading(true);
      setWorkoutPhase("loading");

      const res = await customFetch.get(
        "/generate-custom/workout/get-workout",
        {
          headers: { "x-api-key": apiKey },
        }
      );

      const plan = res.data;
      setFullWorkoutPlan(plan);
      wholeWorkoutPlan = plan._doc ? { ...plan._doc } : { ...plan };

      const current = getCurrentWorkoutFromPlan(plan);
      setCurrentWorkout(current);

      const program = plan?.workoutProgram?.[0];
      const isOnlyTestWeek =
        program?.weeks?.length === 1 && program.weeks[0]?.isTestWeek;

      setWorkoutPhase(isOnlyTestWeek ? "test" : "ready");
    } catch (error) {
      console.error("Error fetching workout plan:", error.message);
      setFullWorkoutPlan(null);
      setCurrentWorkout(null);
      wholeWorkoutPlan = null;
      setWorkoutPhase("ready");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authChecked && isAuthenticated && user && !fullWorkoutPlan) {
      fetchWorkoutPlan();
    }
  }, [authChecked, isAuthenticated, user, fullWorkoutPlan]);

  return (
    <WorkoutContext.Provider
      value={{
        fullWorkoutPlan,
        currentWorkout,
        loading,
        workoutPhase,
        setWorkoutPhase,
        refreshWorkoutPlan: fetchWorkoutPlan,
        resumeState,
        setResumeState,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
