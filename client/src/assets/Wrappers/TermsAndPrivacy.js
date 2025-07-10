import styled from "styled-components";

const Wrapper = styled.div`
  .page {
    max-width: 100%;
    margin: auto;
    background-image: linear-gradient(
      160deg,
      var(--primary-300) 50%,
      var(--purple-300) 100%
    );
    padding: 3rem;
  }
  .container {
    max-width: 800px;
    padding: 2rem;
    margin: auto;
    padding: 2rem;
    background-color: var(--white);
    border-radius: 12px;
    text-align: left;
  }
  h4 {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
  p {
    margin-top: 1rem;
  }
  .bold {
    font-weight: 600;
  }
  ul {
    list-style-type: circle;
    padding-left: 2rem;
  }
`;

export default Wrapper;
