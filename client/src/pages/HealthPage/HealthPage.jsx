import React from "react";
import "./HealthPage.scss";
import { useHealthPage } from "./HealthPage.logic";

const HealthPage = (props) => {
  const logic = useHealthPage(props);
  return (
    <div className="healthpage">
      <h2>HealthPage</h2>
    </div>
  );
};

export default HealthPage;
