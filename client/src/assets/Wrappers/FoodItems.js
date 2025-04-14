import styled from "styled-components";
const Wrapper = styled.div`
  h2 {
    margin-bottom: 20px;
  }
  .macros-box {
    width: 100%;
    height: 100%;
    background-color: var(--grey-300);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
  }

  .macros-circles {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .circle {
    width: min(20vw, 80px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    flex-shrink: 0;
  }

  /* Different colors for different macros */
  .protein {
    border: 4px solid #ff6b6b;
  }

  .carbs {
    border: 4px solid #4dabf7;
  }

  .fats {
    border: 4px solid #ffd43b;
  }

  .choice-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .choice-buttons-div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0;
    border-radius: 25px;
    padding: 10px 20px;
    margin: 5px;
    min-width: 200px;
    text-align: center;
    font-weight: bold;
  }

  .choice-buttons-div p {
    margin-bottom: 0px;
    text-align: center;
  }
  .choice-buttons-div button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
  }
  .choice-buttons-div button svg {
    width: 24px;
    height: 24px;
    fill: black; /* Adjust color as needed */
  }
  .choice-buttons-div p {
    flex-grow: 1; /* Allows it to expand and stay centered */
    text-align: center;
    margin: 0;
    font-size: 16px;
  }
  .one {
    background-color: var(--primary-500);
  }
  .two {
    background-color: var(--grey-300);
  }
  .choice-buttons-div svg {
    width: 5%;
  }
  /*.search-button {
    width: fit-content;
    background-color: var(--purple-300);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: left;
    padding: 10px;
    border-radius: 25px;
  }*/

  @media (max-width: 768px) {
    .choice-buttons {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .choice-buttons-div {
      width: 80%;
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    .circle {
      width: min(25vw, 60px);
    }
  }
`;

export default Wrapper;
