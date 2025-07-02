import styled from "styled-components";

const Wrapper = styled.div`
  .progress-container {
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 12px;
    background-color: var(--grey-100);
    min-height: 100vh;
    overflow-y: auto;
  }

  .muscle-group-container {
    margin-bottom: 2.5rem;
  }

  .muscle-group-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--grey-800);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
  }

  .muscle-card {
    margin-bottom: 2rem;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s ease;
  }

  .muscle-card:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 16px;
  }

  .muscle-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--grey-700);
    text-transform: capitalize;
    margin-bottom: 0.75rem;
  }
  .weekly-volume-container {
    margin-bottom: 2.5rem;
  }

  .weekly-volume-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748; /* Equivalent to text-gray-800 */
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1.5rem;
  }

  .volume-card {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .volume-card:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  .progress-container {
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 12px;
    background-color: var(--grey-100);
  }
  .progress-stats {
    margin-top: 1rem;
    background-color: var(--grey-100);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.5rem;
    border-radius: 12px;
    width: 80%;
  }
  .progress-stat-label {
    color: var(--black);
  }
  .finished {
    color: green;
  }
  .skipped {
    color: orange;
    font-weight: 700;
  }
  .not-finished {
    color: red;
  }
  h5 {
    margin-top: 1rem;
    font-weight: 400;
  }
  @media (max-width: 992px) {
    .progress-stats {
      width: 100%;
    }
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
`;

export default Wrapper;
