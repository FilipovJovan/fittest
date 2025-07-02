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

  const { isAuthenticated, authChecked } = useAuth(); // ✅ pull auth state

  const getCurrentWorkoutFromPlan = (plan) => {
    const today = new Date().toDateString();
    if (!plan?.workoutProgram?.length) return null;

    const program = plan.workoutProgram[0];
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

      // 🔍 Detect if it's just the test week
      const program = plan?.workoutProgram?.[0];
      const isOnlyTestWeek =
        program?.weeks?.length === 1 && program.weeks[0]?.isTestWeek;

      if (isOnlyTestWeek) {
        setWorkoutPhase("test");
      } else {
        setWorkoutPhase("ready");
      }
    } catch (error) {
      console.error("Error fetching workout plan:", error.message);
      setFullWorkoutPlan(null);
      wholeWorkoutPlan = null;
      setCurrentWorkout(null);
      setWorkoutPhase("ready"); // fallback
    } finally {
      setLoading(false);
    }
  };

  // ✅ Only fetch after auth check & if authenticated
  useEffect(() => {
    if (authChecked && isAuthenticated) {
      fetchWorkoutPlan();
    }
  }, [authChecked, isAuthenticated]);

  return (
    <WorkoutContext.Provider
      value={{
        fullWorkoutPlan,
        currentWorkout,
        loading,
        workoutPhase,
        setWorkoutPhase, // useful for updates after test is completed
        refreshWorkoutPlan: fetchWorkoutPlan,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
