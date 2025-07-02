import styled from "styled-components";

const Wrapper = styled.section`
  .form {
    background-color: var(--grey-300);
    max-width: none;
    width: 100%;
  }
  .form-input {
    padding: 5px;
    background-color: var(--white);
    border-radius: 12px;
    padding-left: 8px;
  }
  h5 {
    margin-top: 5px;
  }
  .heading {
    text-align: left;
    color: var(--black);
    margin-bottom: 30px;
  }
  .button {
    background-color: var(--primary-400);
    border: none;
    border-radius: 12px;
    color: var(--white);
    padding: 6px 12px 6px 12px;
  }
  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: var(--white);
    padding: 10px;
    border-radius: 12px;
    border: 1px solid var(--grey-400);
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: var(--grey-100);
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .checkbox-label input[type="checkbox"] {
    accent-color: var(--primary-400);
  }

  @media (max-width: 756px) {
    .row {
      flex-direction: column;
    }
  }
`;
export default Wrapper;
