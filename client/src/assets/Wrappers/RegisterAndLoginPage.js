import styled from "styled-components";
const Wrapper = styled.section`
  margin-top: 2rem;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .form {
    max-width: 400px;
    width: 90vw;
    border-radius: 60px 5px 60px 5px;
    background-color: var(--primary-100);
  }
  .form-input {
    padding: 5px;
  }
  h4,
  h2 {
    text-align: center;
    margin-bottom: 1.38rem;
    font-weight: 800;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 1.38rem;
  }
  .register-text {
    text-align: center;
    color: var(--black);
    font-weight: 800;
  }
  .btn {
    display: block;
    margin-top: 1rem;
    margin: 0 auto;
  }
  .member-btn {
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
export default Wrapper;
