import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  /* ---------- Header ---------- */
  .rewards-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .filter-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: var(--grey-300);
    color: #111827;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
  }

  .filter-toggle:hover {
    background-color: #e5e7eb;
  }

  /* ---------- Dropdown ---------- */
  .filter-dropdown {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background-color: var(--grey-100);
    border-radius: 12px;
    margin-bottom: 1.5rem;
    padding: 1rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease forwards;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filter-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--grey-200);
    color: #374151;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border: 1px solid transparent;
  }

  .filter-option:hover {
    background-color: #e5e7eb;
  }

  .filter-option.active {
    background-color: #3b82f6;
    color: white;
    border-color: #2563eb;
    box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
  }

  .filter-option svg {
    flex-shrink: 0;
  }

  /* ---------- Grid ---------- */
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

  @media (max-width: 640px) {
    .rewards-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }

    .filter-toggle {
      font-size: 0.85rem;
      padding: 7px 12px;
      align-self: flex-start;
    }

    .filter-dropdown {
      padding: 0.8rem;
      gap: 0.5rem;
      width: fit-content;
      align-self: flex-end;
    }

    .filter-option {
      font-size: 0.85rem;
      padding: 8px 12px;
    }
  }
`;

export default Wrapper;
