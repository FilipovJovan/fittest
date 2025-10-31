import React from "react";
import "./RewardComponent.scss";
import {useRewardComponent} from "./RewardComponent.logic";
import Wrapper from "../../assets/Wrappers/RewardComponentWrapper.js";

const RewardComponent = ({
                             name,
                             description,
                             xpRequired,
                             icon,
                             link,
                             unlocked,
                         }) => {
    return (
        <>
            <div className={`reward-card ${unlocked ? "unlocked" : "locked"}`}>
                <div className="reward-icon">
                    <img src={icon} alt={name}/>
                </div>
                <h3 className="reward-name">{name}</h3>
                <p className="reward-description">{description}</p>
                <p className="reward-xp">
                    XP Required: <strong>{xpRequired}</strong>
                </p>

                <p
                    className={`reward-status ${
                        unlocked ? "status-unlocked" : "status-locked"
                    }`}
                >
                    {unlocked ? "Unlocked" : "Locked"}
                </p>

                {unlocked ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className="download-btn">Download</button>
                    </a>
                ) : (
                    <button className="download-btn locked-btn" disabled>
                        Locked
                    </button>
                )}
            </div>
        </>
    );
};

export default RewardComponent;
