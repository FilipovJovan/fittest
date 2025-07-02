import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/ProgressStat";
import { FastForward } from "lucide-react";

const ProgressLinks = ({ label, route }) => {
  return (
    <Link to={route} className="progress-links">
      <Wrapper>
        <div className="progress-stat-wrapper">
          <div className="progress-stat-left">
            <span className="progress-stat-label">{label}</span>
          </div>
          <span className="progress-stat-number">
            <FastForward size={20} />
          </span>
        </div>
      </Wrapper>
    </Link>
  );
};

export default ProgressLinks;
