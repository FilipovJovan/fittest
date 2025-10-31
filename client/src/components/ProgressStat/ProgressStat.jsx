import React from "react";
import "./ProgressStat.scss";
import {useProgressStat} from "./ProgressStat.logic";
import Wrapper from "../../assets/Wrappers/ProgressStat.js";

const ProgressStat = ({icon, label, number}) => {
    return (
        <>
            <div className="progress-stat-wrapper">
                <div className="progress-stat-left">
                    <div className="progress-stat-icon">{icon}</div>
                    <span className="progress-stat-label">{label}</span>
                </div>
                <span className="progress-stat-number">{number}</span>
            </div>
        </>
    );
};

export default ProgressStat;
