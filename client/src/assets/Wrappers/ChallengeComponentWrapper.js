import styled from "styled-components";
const Wrapper = styled.section`
  .challenge-card {
    background-color: #e7f0ff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    width: 100%;
    max-width: 380px;
    margin: auto;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .challenge-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .challenge-card.enrolled {
    border: 2px solid #22c55e;
  }

  .challenge-card.not-enrolled {
    border: 2px solid #d1d5db;
    opacity: 0.7;
  }

  .challenge-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  .challenge-icon img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  .challenge-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: #111827;
  }

  .challenge-description {
    font-size: 0.875rem;
    color: #4b5563;
    margin-bottom: 8px;
  }

  /* New fields */
  .challenge-type {
    font-size: 0.9rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 4px;
  }

  .challenge-goal {
    font-size: 0.9rem;
    color: #1f2937;
    margin-bottom: 6px;
  }

  .challenge-dates {
    font-size: 0.8rem;
    color: #6b7280;
    margin-bottom: 10px;
  }

  .challenge-reward {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 10px 0;
    font-weight: 500;
    color: #111827;
  }

  .challenge-reward span {
    background: #f3f4f6;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.85rem;
  }

  .challenge-status {
    margin-top: 8px;
    font-weight: 600;
  }

  .challenge-status.status-enrolled {
    color: #16a34a;
  }

  .challenge-status.status-not-enrolled {
    color: #dc2626;
  }

  .challenge-card.completed {
    border: 2px solid gold;
    background: linear-gradient(145deg, #fff9c4, #ffecb3);
    color: #333;
    position: relative;
  }

  .completed-badge {
    background: gold;
    color: #222;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 10px;
    text-align: center;
    margin-top: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .status-completed {
    color: #ffb300;
    font-weight: bold;
  }
`;

export default Wrapper;
