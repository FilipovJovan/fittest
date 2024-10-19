import styled from "styled-components";

const Wrapper = styled.section`
  .button {
    background-color: var(--purple-500);
    color: white;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 1rem;
    transition: transform 0.3s ease-in-out;
    &:hover {
      background-color: var(--purple-700);
      transform: scale(1.05);
    }
  }

  .container {
    background-color: var(--grey-200);
    max-width: 80%;
    margin-bottom: 50px;
    border-radius: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: transform 0.3s ease-in-out;
  }

  input:focus {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
  }

  .p-4 {
    box-shadow: none;
  }

  .mt-3 {
    border: none;
  }
`;

export default Wrapper;
