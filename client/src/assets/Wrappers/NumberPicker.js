import styled from "styled-components";
const Wrapper = styled.section`
  .number-picker-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .unit-switch-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .unit-button {
    padding: 10px;
    margin: 0 10px;
    background-color: #ccc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .unit-button.active {
    background-color: #007bff;
  }

  .input-group {
    margin-bottom: 15px;
  }

  .input-field {
    padding: 5px;
    font-size: 16px;
    width: 100px;
  }

  label {
    margin-right: 10px;
  }
  .button-system-change {
    padding: 10px;
    margin: 0 10px;
    background-color: var(--primary-200);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .button-system-change :checked {
    background-color: var(--purple-500);
  }
  .unit-labels {
    text-align: center;
    margin-bottom: 1px;
  }

  .unit-labels p {
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0;
  }
`;
export default Wrapper;
