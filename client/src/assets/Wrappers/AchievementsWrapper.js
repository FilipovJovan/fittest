import styled from "styled-components";
const Wrapper = styled.section`
  margin: auto;
  h2 {
    margin-bottom: 1rem;
  }
  .progress-box {
    background: #fff;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    max-width: 100%;
    margin: auto;
  }

  .progress-box:hover {
    transform: translateY(-5px);
  }

  .progress-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  .progress-bar-custom {
    height: 1.2rem;
    border-radius: 10px;
    background-color: var(--grey-200);
  }

  .progress-bar-custom .progress-bar {
    background-color: var(--primary-500);
    font-size: 0.7rem;
    font-weight: 500;
  }
  .percentage {
    text-align: right;
    font-weight: bold;
  }
  .level-streak-row {
    max-width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .level-streak {
    flex: 1;
    background-color: var(--grey-100);
    padding: 2rem 2rem 1rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .streak-row {
    font-size: 0.9rem;
    color: #444;
  }

  .streak-text {
    margin: 0;
    font-weight: 500;
  }
  .badges-card {
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  }

  .challenges-card {
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  }

  .rewards-card {
    background: linear-gradient(135deg, #fddb92, #d1fdff);
  }
  .badges-card:hover,
  .challenges-card:hover,
  .rewards-card:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    transition: 300ms ease-in-out;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  .card-subtext {
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.5rem;
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

  @media (max-width: 756px) {
    .level-streak-row {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
