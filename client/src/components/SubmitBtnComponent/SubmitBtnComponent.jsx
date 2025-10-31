import React from "react";
import "./SubmitBtnComponent.scss";
import {useSubmitBtnComponent} from "./SubmitBtnComponent.logic";

const SubmitBtnComponent = ({formBtn, className = ""}) => {
    const {isSubmitting} = useSubmitBtnComponent();
    return (
        <button
            type="submit"
            className={`btn btn-block ${formBtn ? "form-btn" : ""} ${className}`}
            disabled={isSubmitting}
        >
            {isSubmitting ? "Submitting" : "Submit"}
        </button>
    );
};

export default SubmitBtnComponent;
