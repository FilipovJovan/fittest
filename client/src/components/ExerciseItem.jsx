import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const ExerciseItem = ({
  dayIndex,
  exercise,
  sets,
  isLast,
  workoutId,
  weekId,
  day,
}) => {
  const [timeLeft, setTimeLeft] = useState(sets[0].rest * 60);
  const [initialTimeLeft, setInitialTimeLeft] = useState(sets[0].rest * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSets, setCompletedSets] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);
  const newExerciseId = exercise._id;

  const playBeep = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    for (let i = 0; i < 3; i++) {
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime + i * 0.4);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime + i * 0.4);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start(audioCtx.currentTime + i * 0.4);
      oscillator.stop(audioCtx.currentTime + i * 0.4 + 0.2);
    }
  };

  const handleChange = async ({
    workoutId,
    exerciseId,
    newExerciseId,
    week,
    day,
    sets,
    reps,
    rest,
    exerciseType,
  }) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log("Request body:", req.body);
      console.log("Params:", req.params);
      const payload = {
        week,
        day,
        newExerciseId,
        sets,
        reps,
        rest,
        exerciseType,
      };

      const res = await customFetch.patch(
        `/generate-custom/workout/change-exercise/${workoutId}/${exerciseId}`,
        payload,
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(reached);
      console.log(payload);

      console.log("Exercise updated:", res.data);
    } catch (error) {
      console.error("Error updating exercise:", error);
    }
  };

  useEffect(() => {
    const newTime = sets[0].rest * 60;
    setTimeLeft(newTime);
    setInitialTimeLeft(newTime);
    setIsRunning(false);
    setCompletedSets([]);
  }, [exercise]);

  useEffect(() => {
    let interval;

    if (timeLeft === 0 && isRunning) {
      playBeep();
      toast.success("Your Time Is Up!");
      setIsRunning(false);
      setTimeLeft(initialTimeLeft);
    }

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleSetDone = (index) => {
    if (!completedSets.includes(index)) {
      setCompletedSets([...completedSets, index]);
      handleStartStop();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progress = (completedSets.length / sets.length) * 100;
  const circleProgress = ((timeLeft / initialTimeLeft) * 100).toFixed(0);

  return (
    <div className="exercise-item">
      <Row className="exercise-header align-items-center mb-5">
        <Col lg={6} md={6} sm={6} xs={6}>
          <h3 className="text-xl font-bold">{exercise.name}</h3>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end">
          <button
            onClick={() =>
              handleChange({
                workoutId,
                exerciseId: exercise._id,
                newExerciseId,
                week: weekId,
                day,
                sets: sets.length,
                reps: sets[0].reps,
                rest: sets[0].rest,
                exerciseType: exercise.type,
              })
            }
          >
            <p>Change Exercise</p>
          </button>
        </Col>
      </Row>

      <h5>Exercise no. {dayIndex}</h5>

      {exercise.image && (
        <img
          src={exercise.image}
          alt={exercise.name}
          className="rounded mb-3"
        />
      )}

      <table className="w-full mb-4 text-center">
        <thead>
          <tr>
            <th>Weight</th>
            <th>Reps</th>
            <th>Rest</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sets.map((set, index) => (
            <tr key={index}>
              <td>{set.weight} kg</td>
              <td>{set.reps} reps</td>
              <td>{set.rest} min</td>
              <td className="td-button">
                <button
                  className={`table-button px-3 py-1 ${
                    completedSets.includes(index)
                      ? "bg-gray-300"
                      : "bg-blue-500 text-white"
                  }`}
                  onClick={() => handleSetDone(index)}
                  disabled={completedSets.includes(index)}
                >
                  {completedSets.includes(index) ? "Done" : "Set done"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <Row className="row-timer-instruction">
        <Col lg={6} md={6} sm={6}>
          <button
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded m-auto"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            Instructions
          </button>
          {showInstructions && (
            <div className="mt-2 text-sm bg-gray-100 p-2 rounded">
              {exercise.instructions || "No instructions provided."}
            </div>
          )}
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div className="relative flex justify-center items-center">
            <button className="clock-button" onClick={handleStartStop}>
              <svg
                className="w-5 h-5"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  stroke="gray"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="346"
                  strokeDashoffset={346 - (346 * circleProgress) / 100}
                  style={{
                    transition: "stroke-dashoffset 1s linear",
                  }}
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy="0.3em"
                  fontSize="32"
                  fontWeight="bold"
                  fill="black"
                >
                  {formatTime(timeLeft)}
                </text>
              </svg>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ExerciseItem;
