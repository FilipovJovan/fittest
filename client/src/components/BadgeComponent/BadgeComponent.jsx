import React from "react";
import "./BadgeComponent.scss";

const BadgeComponent = ({ name, icon, description, unlocked }) => {
    return (
        <>
            <div className={`badge-card ${unlocked ? "unlocked" : "locked"}`}>
                <div className="badge-icon">
                    {icon ? (
                        // eslint-disable-next-line react/prop-types
                        icon.startsWith("http") ? (
                            <img src={icon} alt={name} />
                        ) : (
                            icon
                        )
                    ) : (
                        "🏅"
                    )}
                </div>
                <h3 className="badge-name">{name}</h3>
                <p className="badge-description">{description}</p>
                <p
                    className={`badge-status ${unlocked ? "status-unlocked" : "status-locked"}`}
                >
                    {unlocked ? "Unlocked ✅" : "Locked 🔒"}
                </p>
            </div>
        </>
    );
};

export default BadgeComponent;
