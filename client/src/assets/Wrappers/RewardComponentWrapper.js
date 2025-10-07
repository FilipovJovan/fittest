import styled from "styled-components";

const Wrapper = styled.section`
  .reward-card {
    background-color: #ffffff;
    border: 2px solid transparent;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
  }

  .reward-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  .reward-card.unlocked {
    border-color: #22c55e;
  }

  .reward-card.locked {
    border-color: #d1d5db;
    opacity: 0.75;
  }

  .reward-icon img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  .reward-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #111827;
  }

  .reward-description {
    font-size: 0.9rem;
    color: #4b5563;
    margin-bottom: 10px;
  }

  .reward-xp {
    font-size: 0.9rem;
    color: #2563eb;
    font-weight: 500;
  }

  .reward-status {
    margin-top: 8px;
    font-weight: 600;
  }

  .status-unlocked {
    color: #16a34a;
  }

  .status-locked {
    color: #dc2626;
  }

  .download-btn {
    margin-top: 12px;
    background-color: #3b82f6;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .download-btn:hover {
    background-color: #2563eb;
  }

  .locked-btn {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

export default Wrapper;
