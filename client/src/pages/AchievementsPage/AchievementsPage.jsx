import React from "react";
import "./AchievementsPage.scss";
import { useAchievementsPage } from "./AchievementsPage.logic";

const AchievementsPage = (props) => {
  const logic = useAchievementsPage(props);
  return (
    <div className="achievementspage">
      <h2>AchievementsPage</h2>
    </div>
  );
};

export default AchievementsPage;
