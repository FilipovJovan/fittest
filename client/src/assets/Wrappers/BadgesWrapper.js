import styled from "styled-components";
const Wrapper = styled.section`
  margin: auto;
  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: none;
    background: #e5e7eb;
    color: #111827;
    cursor: pointer;
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  .filter-btn:hover {
    background: #d1d5db;
  }

  .filter-btn.all {
    background: #3b82f6;
    color: white;
  }

  .filter-btn.unlocked {
    background: #22c55e;
    color: white;
  }

  .filter-btn.locked {
    background: #ef4444;
    color: white;
  }

  .badge {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .badge {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
