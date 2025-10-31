import React from "react";
import "./FormRowSelectComponent.scss";
import {useFormRowSelectComponent} from "./FormRowSelectComponent.logic";

const FormRowSelectComponent = ({
                                    name,
                                    labelText,
                                    list,
                                    defaultValue = "",
                                    onChange,
                                }) => {
    const logic = useFormRowSelectComponent();
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <select
                name={name}
                id={name}
                className="form-select"
                defaultValue={defaultValue}
                onChange={onChange}
            >
                {list.map((itemValue) => {
                    return (
                        <option key={itemValue} value={itemValue}>
                            {itemValue}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FormRowSelectComponent;
