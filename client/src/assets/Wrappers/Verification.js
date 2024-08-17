import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;

  h1 {
    color: #28a745;
  }

  p {
    font-size: 1.2rem;
    color: #6c757d;
  }

  .btn-primary {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: var(--purple-500);
  }
`;

export default Wrapper;
