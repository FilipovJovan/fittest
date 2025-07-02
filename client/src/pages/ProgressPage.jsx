import React from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { getFullWorkoutPlan, useWorkout } from "../../context/WorkoutContext";
import ProgressStat from "../components/ProgressStat";
import ProgressLinks from "../components/ProgressLinks";
import {
  Dumbbell,
  CheckCircle,
  FastForward,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import Wrapper from "../assets/Wrappers/ProgressPage";

const ProgressPage = () => {
  const { fullWorkoutPlan } = useWorkout();
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // For navigation

  const isMainPage = location.pathname === "/dashboard/progress";

  const plan = getFullWorkoutPlan();

  if (!fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
    return <p>No workouts found.</p>;
  }

  const splitName = plan?.workoutProgram?.[0]?.workoutSplitName;

  const days = fullWorkoutPlan.workoutProgram[0].weeks.flatMap(
    (week) => week.days
  );

  const totalWorkouts = days.filter((day) => day.type === "workout").length;
  const completedWorkouts = days.filter(
    (day) =>
      day.type === "workout" &&
      day.isFinished &&
      day.finishedType === "completed"
  ).length;
  const skippedWorkouts = days.filter(
    (day) =>
      day.type === "workout" && day.isFinished && day.finishedType === "skipped"
  ).length;
  const workoutsLeft = totalWorkouts - completedWorkouts;

  return (
    <Wrapper>
      {isMainPage ? (
        <>
          <h2>Your mesocycle</h2>
          <h5>{splitName || "No workout split name found"}</h5>

          <div className="max-w-sm mx-auto p-3 mb-2 progress-container">
            <div className="progress-stats">
              <h3 className="text-xl font-bold mb-4">Workouts</h3>
              <ProgressStat
                icon={<Dumbbell size={20} />}
                label="Total number"
                number={totalWorkouts}
              />
              <ProgressStat
                icon={<CheckCircle size={20} className="finished" />}
                label="Completed"
                number={completedWorkouts}
              />
              <ProgressStat
                icon={<FastForward size={20} className="skipped" />}
                label="Skipped"
                number={skippedWorkouts}
              />
              <ProgressStat
                icon={<AlertTriangle size={20} className="not-finished" />}
                label="Not finished"
                number={workoutsLeft}
              />
            </div>
            <div className="progress-stats">
              <ProgressLinks
                label={"Sets per muscle group"}
                route={"/dashboard/progress/sets"}
              />
              <ProgressLinks
                label={"Volume per muscle group"}
                route={"/dashboard/progress/volume"}
              />
              <ProgressLinks
                label={"Weekly volume"}
                route={"/dashboard/progress/weekly"}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="relative">
          <button
            onClick={() => navigate("/dashboard/progress")}
            className="mb-4 flex items-center text-blue-500 hover:text-blue-700 bg-gray-100 p-2 rounded"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <Outlet />
        </div>
      )}
    </Wrapper>
  );
};

export default ProgressPage;
