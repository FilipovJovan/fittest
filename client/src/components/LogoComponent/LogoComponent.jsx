import React from "react";
import "./LogoComponent.scss";
import { useLogoComponent } from "./LogoComponent.logic";
import logo from "../../assets/images/logo.png";

const LogoComponent = () => {
  const logic = useLogoComponent();
    return <img src={logo} alt="fittest" className="logo" width="30px" />;
};

export default LogoComponent;
