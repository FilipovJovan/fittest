import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  .card-components {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    border-radius: 3px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  .card-components:hover {
    transition: all 400ms ease-in-out;
    background-color: var(--grey-200);
  }
`;
export default Wrapper;
