import styled from "styled-components";

const Wrapper = styled.div`
  .progress-stat-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 8px 0;
  }

  .progress-stat-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .progress-stat-icon {
    width: 24px;
    height: 24px;
    color: var(--primary-500);
  }

  .progress-stat-label {
    font-size: 14px;
    font-weight: 500;
  }

  .progress-stat-number {
    font-size: 14px;
    font-weight: 700;
  }
`;

export default Wrapper;
