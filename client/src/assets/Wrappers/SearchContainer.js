import styled from "styled-components";

const Wrapper = styled.section`
  .form-title {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--black);
  }
  .form {
    margin: 0rem 1rem 1rem 1rem;
    width: 90%;
    //min-height: 350px; /* Match the Macros container */
    background-color: var(--grey-300);
    border-radius: 16px;
    padding: 20px;
    display: flex; /* Ensure content is centered vertically */
    flex-direction: column;
    justify-content: space-between; /* Distribute content evenly */
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: left;
    row-gap: 1rem;
  }
  .form-input,
  .form-select {
    background-color: transparent;
    border: 1px solid var(--grey-500);
    border-radius: 4px;
    padding: 0.5em;
    font-size: 1rem;
    color: var(--black);
    appearance: none; /* Remove default browser styling for select */
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
  }
  .form-select {
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position: right 0.5em center;
    background-size: 1em;
    padding-right: 2em; /* Space for the arrow */
  }
  .form-btn {
    margin-top: 1rem;
    background-color: #007bff; /* Blue background */
    color: var(--white);
    border: none;
    border-radius: 4px;
    padding: 0.5em 1em;
    font-size: 1rem;
    cursor: pointer;
    width: fit-content;
  }
  .form-btn:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
  /* Remove responsive grid layouts since the first design doesn't specify them */
  @media (min-width: 992px) {
    .form-center {
      flex-direction: column; /* Keep as column */
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      flex-direction: column; /* Keep as column */
    }
  }
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
