import styled from "styled-components";

const Wrapper = styled.div`
  .wizard-container {
    max-width: 600px;
    height: fit-content; /* Full screen height */
    //margin: 0 auto;
    margin-bottom: 13rem;
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
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .gender-icons {
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 20px;
    align-items: center;
  }

  /* Each gender icon container */
  .gender-icons-male,
  .gender-icons-female {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
    transition: all 0.3s ease;
    width: 130px;
    height: 130px;
    position: relative;
    user-select: none; /* Prevent text/icon selection */
    -webkit-tap-highlight-color: transparent; /* Prevent tap highlight on mobile */
  }

  /* Specific icon colors and font weight */
  .gender-icons-male {
    color: #007bff;
    font-weight: 700;
  }

  .gender-icons-female {
    color: var(--purple-500);
    font-weight: 700;
  }

  /* Selected state */
  .gender-icons-male.selected,
  .gender-icons-female.selected {
    transform: scale(1.2);
  }

  /* Ensure colors remain the same when selected */
  .gender-icons-male.selected p {
    color: #007bff;
  }
  .gender-icons-female.selected p {
    color: var(--purple-500);
  }

  /* Hover effect */
  .gender-icons-male:hover,
  .gender-icons-female:hover {
    transform: scale(1.05);
  }

  /* Ensure selected state is visible when hovered */
  .gender-icons-male.selected:hover,
  .gender-icons-female.selected:hover {
    transform: scale(1.1);
  }
  .goal-button.selected {
    background-color: var(--purple-500);
    color: white;
  }

  /* Default gray color */
  /* Default state for Male and Female */
  .gender-icons-male img,
  .gender-icons-female img {
    filter: brightness(0) saturate(100%) invert(46%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(90%) contrast(90%);
  }

  /* When selected, Male turns Blue (approx. #007bff) */
  .gender-icons-male.selected svg {
    filter: brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(900%)
      hue-rotate(190deg) brightness(99%) contrast(100%);
  }

  /* When selected, Female turns Purple (approx. #8400ff) */
  .gender-icons-female.selected svg {
    filter: brightness(0) saturate(100%) invert(20%) sepia(70%) saturate(600%)
      hue-rotate(270deg) brightness(90%) contrast(100%);
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
  .react-datepicker-wrapper {
    display: inline;
  }
  .unit-switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem; /* Adds spacing between elements */
  }

  .unit-toggle {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem; /* Moves inputs further down */
  }

  .unit-toggle button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: #ddd;
    border-radius: 5px;
    font-weight: bold;
  }

  .unit-toggle button.active {
    background-color: var(--primary-500); /* Adjust based on your theme */
    color: white;
  }

  .unit-switch button:hover {
    background: #e0e0e0;
  }
  .registration-form {
    background: none;
    margin: auto;
  }
  .registration-form input {
    background: none;
    margin: 5px 0px 5px 0px;
    padding: 5px;
    font-size: 14px;
    border-radius: 8px;
  }
  .create-button {
    color: white;
    background-color: var(--primary-500);
    border-radius: 12px;
    border: none;
    padding: 0.5rem;
    width: 200px;
    cursor: pointer;
  }

  @media screen and (max-width: 420px) {
    .picker-item {
      font-size: 15px;
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

  .activity-level-options {
    display: flex;
    flex-direction: column;
  }

  .activity-level-option {
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .activity-level-option.selected {
    background-color: #007bff; /* Blue background for selected option */
    color: white;
  }
`;

export default Wrapper;
