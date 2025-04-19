import styled from "styled-components";

const Wrapper = styled.div`
  h2 {
    margin-bottom: 20px;
  }
  .macros-row {
    margin-bottom: 2em;
  }
  .macros-box {
    width: 90%;
    min-height: 350px; /* Set a fixed min-height to match the Search form */
    margin: 0rem 1rem 1rem 1rem;
    background-color: var(--grey-300);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    display: flex; /* Ensure content is centered vertically */
    flex-direction: column;
    justify-content: space-between; /* Distribute content evenly */
  }
  .macros-col {
    height: 100%;
    margin-top: 0px;
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

  .calories {
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: auto; /* Push to the bottom */
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
    fill: black;
  }
  .choice-buttons-div p {
    flex-grow: 1;
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

  .link-col {
    text-align: center;
    color: var(--white);
    background-color: var(--primary-500);
    border-radius: 12px;
    padding: 1rem;
    width: 90%;
    margin: 1rem 1rem 2rem 1rem;
  }
  .link-col p {
    margin-bottom: 0;
    color: var(--white);
  }
  .macros-col {
    min-height: 350px; /* Or use h-100 in className if parent allows */
  }
  .suggest-food-div {
    width: 90%;
    background-color: var(--grey-300);
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  .suggest-food-div .suggestion-button {
    width: 100%;
    margin-left: 0px;
    margin-top: 1rem;
  }
  .suggest-food-select {
    height: 40px;
    padding: 0.5rem;
    background-color: var(--primary-200);
    color: white;
  }
  .suggestion-button {
    border: none;
    border-radius: 12px;
    text-align: center;
    color: var(--white);
    width: 90%;
    padding: 1rem;
    margin: 0rem 1rem 1rem 1rem;
  }

  .meal-type-dropdown {
    position: relative;
  }

  .custom-select {
    appearance: none;
    padding-right: 30px;
    background-color: #fff;
  }

  .dropdown-arrow {
    position: absolute;
    right: 10px;
    top: 40%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 16px;
    font-weight: 700;
    color: var(--white);
  }

  .one {
    background-color: var(--primary-400);
  }
  .two {
    background-color: var(--purple-400);
  }

  @media (max-width: 768px) {
    .link-row {
      flex-direction: column;
    }
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
