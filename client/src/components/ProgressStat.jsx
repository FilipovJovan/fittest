import React from "react";
import Wrapper from "../assets/Wrappers/ProgressStat";

const ProgressStat = ({ icon, label, number }) => {
  return (
    <Wrapper>
      <div className="progress-stat-wrapper">
        <div className="progress-stat-left">
          <div className="progress-stat-icon">{icon}</div>
          <span className="progress-stat-label">{label}</span>
        </div>
        <span className="progress-stat-number">{number}</span>
      </div>
    </Wrapper>
  );
};

export default ProgressStat;
