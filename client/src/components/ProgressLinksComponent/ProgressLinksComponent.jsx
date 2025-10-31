import React from "react";
import "./ProgressLinksComponent.scss";
import { useProgressLinksComponent } from "./ProgressLinksComponent.logic";
import {Link} from "react-router-dom";
import Wrapper from "../../assets/Wrappers/ProgressStat.js";
import {FastForward} from "lucide-react";

const ProgressLinksComponent = ({label, route}) => {
  const logic = useProgressLinksComponent(props);
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

export default ProgressLinksComponent;
