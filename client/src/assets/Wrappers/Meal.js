import styled from "styled-components";
const Wrapper = styled.div`
  .meal-card {
    background-color: #e7f0ff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 380px;
    margin: auto;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: left;
  }

  .calories {
    font-size: 14px;
    color: #666;
  }

  .meal-type,
  .goal {
    font-size: 16px;
    color: #555;
    text-align: left;
  }

  .macros {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 10px 0;
    margin-bottom: 10px;
  }

  .macro-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    width: min(20vw, 80px);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  .macro-item p {
    font-size: 18px;
    font-weight: bold;
    color: #222;
  }

  .protein p {
    color: red;
  }
  .carbs p {
    color: blue;
  }
  .fats p {
    color: orange;
  }
  p {
    margin: auto;
  }
  .macro-item span {
    font-size: 14px;
    font-weight: bold;
    margin-top: 6px;
    color: #333;
  }

  .see-more {
    background-color: #007bff;
    color: white;
    padding: 4px 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
    text-align: right;
  }

  .see-more:hover {
    background-color: #0056b3;
  }
  .bottom-card {
    margin-top: 20px;
  }
`;

export default Wrapper;
