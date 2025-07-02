import styled from "styled-components";

const Wrapper = styled.div`
  /* workout.css */
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 1rem;
  }
  .workout-page {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2rem;
    padding: 30px;
    background-color: #f4f4f4;
  }
  .workout-page.nested-route {
    background-color: transparent; /* Remove gray background for nested routes */
    padding: 0; /* Remove padding for nested routes */
  }
  p {
    margin-bottom: 0px;
    width: fit-content;
  }
  .weight-question-button {
    padding: 1rem;
    margin: 1rem 1rem 0rem 0rem;
  }
  .weight-question-text p {
    margin-bottom: 1rem;
  }
  .weight-question-text {
    width: 90%;
  }
  .weight-form-col {
    width: 45%;
  }
  .form-input {
    padding: 0.5rem;
    border-radius: 12px;
  }
  .weight-unit-button:hover {
    background-color: var(--purple-500);
  }
  .set-knows-weight.selected {
    background-color: var(--purple-500);
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
  .weight-entry-form {
    margin: 2rem 0rem 2rem 0rem;
    background-color: var(--grey-100);
    padding: 1rem;
    border-radius: 12px;
  }
  .weight-entry-form h4 {
    font-weight: 600;
  }
  .weight-entry-form button {
    margin-right: 1rem;
  }
  .instruction-button {
    margin: 1rem 0rem 0.5rem 0rem;
    background-color: var(--purple-200);
  }
  .instruction-button:hover {
    background-color: var(--purple-400);
  }
  .instruction-text {
    width: 80%;
  }
  .enter-weights-button {
    margin: 1rem 0rem 2rem 0rem;
  }
  .weight-summary ul {
    background-color: var(--grey-100);
    padding: 1rem;
    border-radius: 12px;
    width: fit-content;
  }
  .weight-summary button {
    margin-bottom: 4rem;
  }
  .workout-week-card {
    transition: all 0.3s ease;
    cursor: pointer;
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .workout-week-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  .workout-week-card:hover {
    transform: scale(1.03);
    transition: 0.4s;
  }
  .week-finished {
    background-color: #e0f7fa;
  }

  .week-current {
    background-color: #b3e5fc;
  }

  .week-not-started {
    background-color: #4fc3f7;
  }
  .status {
    position: relative;
    bottom: 20%;
    transform: translateY(-20%);
  }
  .week-1 {
    background-color: var(--primary-100);
  }
  .week-2 {
    background-color: var(--primary-200);
  }
  .week-3 {
    background-color: var(--primary-300);
  }
  .week-4 {
    background-color: var(--primary-400);
  }
  .week-5 {
    background-color: var(--primary-500);
  }
  .week-page {
    display: grid;
    gap: 2rem;
    padding: 30px;
    background-color: #f9f9f9;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
  .progress-bar-week {
    margin-top: 1rem;
    width: 100%;
    height: 15px;
    background-color: var(--grey-400);
    border-radius: 12px;
    overflow: hidden;
  }
  .progress-fill-week {
    height: 100%;
    background-color: var(--white);
    width: 30%;
  }
  .status-pill {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
  }

  .status-pill.finished {
    background: #c8e6c9;
    color: #2e7d32;
  }

  .status-pill.current {
    background: #bbdefb;
    color: #1565c0;
  }

  .status-pill.not-started {
    background: #ffcdd2;
    color: #c62828;
  }

  .days-completed {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #555;
  }

  .current-day-badge {
    margin-top: 12px;
    background: #e0f7fa;
    color: #00796b;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.95rem;
    display: inline-block;
  }

  .no-current-day {
    margin-top: 12px;
    color: #999;
    font-size: 0.9rem;
  }
  .day-card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    height: 20vh;
    width: 80%;
    max-width: 80%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background-color: var(--primary-100);
  }
  .day-card:hover {
    transform: scale(1.03);
    transition: 0.4s;
  }
  .day-page {
    padding: 30px;
    background-color: #f9f9f9;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
  .rest-day-container {
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }

  .rest-day-container h2 {
    color: #2f4f4f;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .rest-day-container p {
    color: #556b2f;
    font-size: 1.2rem;
  }
  .go-back-button {
    width: 20%;
    height: 3rem;
    margin-bottom: 1rem;
  }
  .workout-header {
    font-size: 24px;
    font-weight: bold;
  }

  .workout-exercise {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .sets-reps {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  .exercise-item {
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f0f0f0;
  }
  .exercise-header {
    justify-content: center;
    align-items: center;
  }
  .exercise-header h3 {
    margin-bottom: 0px;
  }
  button {
    background-color: var(--primary-300);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 12px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--primary-500);
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .col-circle {
    width: fit-content;
  }

  table {
    border-collapse: separate;
    border-spacing: 20px; /* This adds space between cells */
  }

  td {
    border: 1px solid black;
    padding: 1rem; /* This adds space inside the cell */
  }
  .td-button {
    padding: 0px;
    border: none;
  }
  .table-button {
    width: 100%;
    height: 60px;
    border-radius: 0px;
  }
  .progress-bar {
    width: 90%;
    height: 20px;
    background-color: var(--primary-100); /* background of entire bar */
    margin-bottom: 10px;
    border-radius: 16px;
    overflow: hidden;
  }

  .progress-fill {
    width: 90%;
    height: 100%;
    background-color: var(--purple-500); /* color of progress fill */
    border-radius: 16px 0 0 16px; /* round left side */
    transition: width 0.3s ease; /* smooth progress transition */
  }
  .status-text.completed {
    color: green;
    font-weight: 700;
  }
  .status-text.skipped {
    color: orange;
  }
  .status-text.pending {
    color: red;
  }

  /* Circle as a separate span */
  .circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 8px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  .circle.completed {
    border: 2px solid green;
  }
  .circle.skipped {
    border: 2px solid orange;
  }
  .circle.pending {
    border: 2px solid red;
  }
  .circle.completed::after {
    content: "✓";
    color: green;
    font-size: 10px;
    position: relative;
    bottom: 70%;
    left: 20%;
    transform: translate(70%, -20%);
    font-weight: 800;
  }
  .row-timer-instruction {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .clock-button {
    background-color: transparent;
  }
  .clock-button:hover {
    background-color: transparent;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
  .col {
    padding: 0 15px;
    flex: 0 0 auto;
  }

  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }

  p.finished {
    color: #48bb78; /* Green for finished */
  }

  p.current {
    color: #3b82f6; /* Blue for current */
  }

  p.not-started {
    color: #6b7280; /* Gray for not started */
  }
  .col-circle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .circle.finished {
    background-color: #48bb78;
  }

  .circle.current {
    background-color: #3b82f6;
  }

  .circle.not-started {
    background-color: #6b7280;
  }
  .current-day {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgb(248, 248, 248); /* Blue for current day */
  }

  .no-current-day {
    font-size: 0.9rem;
    color: rgb(41, 44, 49); /* Gray for no current day */
  }

  .enhanced-day-card {
    padding: 1.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    background-color: white;
    transition: all 0.3s ease;
    position: relative;
    cursor: pointer;
    margin-bottom: 1.5rem;
  }

  .enhanced-day-card:hover {
    background-color: #f9f9f9;
    transform: translateY(-4px);
  }

  .day-name {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .status-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .status-text {
    font-size: 1rem;
    font-weight: 500;
  }

  .circle {
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  .day-date {
    position: absolute;
    bottom: 12px;
    right: 12px;
    font-size: 0.85rem;
    color: #999;
  }
  .enhanced-day-card:active {
    background-color: #ececec;
    transform: scale(0.98);
  }
  .current-label {
    font-size: 0.9rem;
    color: var(--primary-400); /* nice green */
    margin-left: 8px;
  }
  .day-name-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .day-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #222; /* dark normal text */
    margin: 0;
  }
  .form-weight {
    background-color: var(--grey-100);
    border-radius: 12px;
    padding: 1rem;
  }
  .button-group-weight {
    margin-bottom: 1rem;
  }
  .set-knows-weight {
    width: fit-content;
    padding: 1rem 2rem 1rem 2rem;
    margin-right: 1rem;
  }

  .weight-knowledge-check {
    background-color: var(--grey-100);
    padding: 0.5rem;
    border-radius: 12px;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: Arial, sans-serif;
    color: #333;
  }

  .weight-knowledge-check h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .weight-info-text {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .set-knows-weight {
    padding: 0.75rem 1.5rem;
    background-color: #0e7cff;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .set-knows-weight:hover {
    background-color: #006fde;
  }

  .info-box {
    background-color: var(--grey-200);
    padding: 1rem 1.25rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }

  .info-box h4 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #222;
  }

  .info-box ul {
    padding-left: 1.2rem;
    font-size: 0.9rem;
    color: #444;
  }

  .weight-note {
    font-size: 0.85rem;
    color: #888;
    text-align: center;
  }
  .bolder-text {
    font-weight: 600;
    text-decoration: underline;
  }
  @media (max-width: 992px) {
    .col-lg-4,
    .col-lg-8 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media (max-width: 768px) {
    .col-md-4,
    .col-md-8 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .workout-week-card {
      padding: 15px;
      border-radius: 10px;
      margin-left: 1rem;
    }
    .funit-button {
      width: fit-content;
      padding-right: 1rem;
      padding-left: 1rem;
    }
    .weight-form {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 576px) {
    .col-sm-6 {
      flex: 0 0 100%;
      width: 100%;
    }
    .workout-week-card {
      height: 100%;
    }
    .weight-form-col {
      width: 100%;
    }
  }
  @media (max-width: 415px) {
    .workout-page {
      margin: auto;
    }
    .workout-week-card {
      width: 70%;
    }
    .go-back-button {
      font-size: 12px;
      height: 4rem;
    }
  }
  @media (max-width: 490px) {
    .day-page {
      padding: 0px;
    }
    td,
    th {
      font-size: 12px;
    }
    table {
      border-spacing: 10px;
    }
  }
  @media (max-width: 796px) {
    .go-back-button {
      height: 4rem;
    }
  }
  @media (max-width: 992px) {
    .workout-page {
      margin-bottom: 2rem;
    }
    .week-page {
      margin-bottom: 2rem;
    }
    .day-page {
      margin-bottom: 2rem;
    }
  }
`;
export default Wrapper;
