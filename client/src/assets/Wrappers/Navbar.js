import styled from "styled-components";
const Wrapper = styled.div`
  Link {
    cursor: pointer;
  }
  .logo {
    border-radius: 6px;
  }
  .fluid {
    position: sticky;
    z-index: 1;
    max-width: 100%;
    background-image: linear-gradient(var(--primary-500), var(--primary-300));
    //border-radius: 0px 0px 15px 15px;
  }
  .navbar-items {
    color: var(--black);
    font-size: 18px;
    padding-left: 15px;
    white-space: nowrap;
  }
  .navbar-items:hover {
    color: var(--white);
    transition: var(--transition);
  }
  .toggle-icon {
    color: var(--black);
    border: none;
    border-color: var(--primary-500);
    font-size: 2rem;
  }
  @media (max-width: 991px) {
    .navbar-items {
      padding: 6px;
    }
  }
`;
export default Wrapper;
