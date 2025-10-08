import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .filter-btn {
    padding: 0.6rem 1.4rem;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    background: #e5e7eb;
    color: #111827;
    cursor: pointer;
    transition: all 0.2s ease;
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

  .rewards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  .loading,
  .empty {
    text-align: center;
    color: #4b5563;
    font-size: 1rem;
    margin-top: 3rem;
  }
`;

export default Wrapper;
