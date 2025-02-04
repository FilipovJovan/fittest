import styled from "styled-components";

const Wrapper = styled.div`
  .wizard-container {
    max-width: 600px;
    height: 75vh; /* Full screen height */
    margin: 0 auto;
    padding: 20px;
    font-family: "Arial", sans-serif;
    text-align: center;
    background-color: #f7f7f7;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Prevents content overflow */
  }

  .progress-bar-container {
    height: 10px;
    width: 100%;
    background: #e0e0e0;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 5px;
    transition: width 0.4s ease-in-out;
  }

  .slide-container {
    flex: 1; /* Fills remaining space */
    padding: 20px;
    text-align: center;
    overflow-y: auto; /* Enables scrolling if content exceeds height */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
  }

  .slide h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .slide p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  .gender-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 70px;
  }

  .gender-icons div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s;
  }

  .gender-icons div:hover {
    transform: scale(1.1);
  }

  .gender-icons div p {
    font-size: 0.9rem;
    margin-top: 10px;
    color: #555;
  }

  .goal-button.selected {
    background-color: var(--purple-500);
    color: white;
  }

  .gender-icons-male.selected {
    color: var(--primary-500);
  }

  .gender-icons-female.selected {
    color: var(--purple-500);
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .navigation-buttons button {
    background: #6a11cb;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .navigation-buttons button:hover {
    background: #2575fc;
  }

  .navigation-buttons button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  .submit-button {
    background: #6a11cb;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .goals {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    max-height: 100%;
    overflow-y: auto;
  }

  .goal-button {
    background-color: var(--primary-500);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 8px 25px;
    font-size: 18px;
    width: 100%;
    max-width: 230px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .goal-button:hover {
    background-color: var(--primary-400);
    transform: scale(1.01);
  }

  .goal-button:active {
    background-color: var(--primary-400);
  }

  .weight-height-picker {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .picker-label {
    font-size: 1rem;
    color: #333;
    font-weight: bold;
  }

  .picker-input {
    width: 100%;
    max-width: 150px;
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  .unit-switch {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }

  .unit-switch button {
    background: #f7f7f7;
    border: 1px solid #ccc;
    color: #333;
    font-size: 0.9rem;
    border-radius: 8px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .unit-switch button.active {
    background: #6a11cb;
    color: #fff;
    border-color: #6a11cb;
  }

  .unit-switch button:hover {
    background: #e0e0e0;
  }

  @media screen and (max-width: 420px) {
    .picker-item {
      font-size: 15px;
    }
    .gender-icons div {
      width: 60px;
      height: 60px;
    }
  }

  /*REGISTER*/
  .form {
    max-width: 400px;
    width: 90vw;
    border-radius: 60px 5px 60px 5px;
    background-color: var(--primary-100);
  }
  .form-input {
    padding: 5px;
  }
  h4,
  h2 {
    text-align: center;
    margin-bottom: 1.38rem;
    font-weight: 800;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 1.38rem;
  }
  .register-text {
    text-align: center;
    color: var(--black);
    font-weight: 800;
  }
  .btn {
    display: block;
    margin-top: 1rem;
    margin: 0 auto;
  }
  .member-btn {
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;

export default Wrapper;
