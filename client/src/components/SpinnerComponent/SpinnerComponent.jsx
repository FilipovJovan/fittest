import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
`;

const SpinnerCircle = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #007bff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const Spinner = ({
                     message = "",
                     icon = null,
                     className = "",
                     circleClassName = "",
                 }) => (
    <SpinnerWrapper className={className}>
        <SpinnerCircle className={circleClassName} />
        <div
            style={{
                marginLeft: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
            }}
        >
            {icon && <span style={{ fontSize: "1.5rem" }}>{icon}</span>}
            <p
                style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}
            >
                {message}
            </p>
        </div>
    </SpinnerWrapper>
);

export default Spinner;
