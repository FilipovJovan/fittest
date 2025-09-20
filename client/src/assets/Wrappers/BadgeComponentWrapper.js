import styled from "styled-components";
const Wrapper = styled.section`
  .badge-card {
    background-color: #e7f0ff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    width: 100%;
    max-width: 380px;
    margin: auto;
  }

  .badge-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .badge-card.unlocked {
    border-color: #22c55e;
  }

  .badge-card.locked {
    border-color: #d1d5db;
    opacity: 0.7;
  }

  .badge-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  .badge-icon img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  .badge-name {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: #111827;
  }

  .badge-description {
    font-size: 0.875rem;
    color: #4b5563;
  }

  .badge-status {
    margin-top: 8px;
    font-weight: 500;
  }

  .badge-status.status-unlocked {
    color: #16a34a;
  }

  .badge-status.status-locked {
    color: #dc2626;
  }
`;

export default Wrapper;
