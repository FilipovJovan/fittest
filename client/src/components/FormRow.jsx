import React from "react";

const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  placeholder,
  onChange,
  extraElement,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <div style={{ position: "relative" }}>
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          defaultValue={defaultValue || ""}
          onChange={onChange}
          placeholder={placeholder}
          required
          style={{ paddingRight: extraElement ? "3rem" : undefined }}
        />
        {extraElement && (
          <span
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "0.85rem",
              color: "#555",
            }}
          >
            {extraElement}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormRow;
