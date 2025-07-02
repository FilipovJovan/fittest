import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    margin: auto;
    margin-top: 10rem;
    border-radius: 12px;
    background-color: var(--grey-100);
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
  }

  button {
    color: white;
    background-color: var(--primary-500);
    border-radius: 12px;
    border: none;
    padding: 0.5rem;
    width: 200px;
    cursor: pointer;
  }
  .spinner {
    margin: 20px auto;
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-left-color: #09f;
    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
