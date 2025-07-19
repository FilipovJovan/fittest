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

const Spinner = ({ message = "" }) => (
  <SpinnerWrapper>
    <SpinnerCircle />
    {message && <p style={{ marginLeft: "1rem" }}>{message}</p>}
  </SpinnerWrapper>
);

export default Spinner;
