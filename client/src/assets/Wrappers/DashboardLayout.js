import styled from "styled-components";

const Wrapper = styled.div`
  .progress-box {
    background: #fff;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    width: 90%;
  }

  .progress-box:hover {
    transform: translateY(-5px);
  }

  .progress-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  .progress-bar-custom {
    height: 1.2rem;
    border-radius: 10px;
    background-color: var(--grey-200);
  }

  .progress-bar-custom .progress-bar {
    background-color: var(--primary-500);
    font-size: 0.7rem;
    font-weight: 500;
  }
  .percentage {
    text-align: right;
    font-weight: bold;
  }
  h3 {
    margin: 30px 0px 15px 0px;
    margin-left: 1rem;
  }
  .image-box {
    width: 95%;
    display: flex;
  }
  .image-box-col {
    width: fit-content;
  }
  .images {
    width: 100%;
    border-radius: 8px;
    opacity: 0.8;
    object-fit: cover;
    height: 90%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
  }
  .on-image-text {
    position: relative;
    bottom: 15%;
    margin: auto;
  }
  .on-image-text .col {
    width: fit-content;
    background-color: white;
    border-radius: 16px;
    margin: 0px 12px 0px 12px;
    padding: 5px 10px 5px 10px;
    text-align: center;
  }
  @media (max-width: 756px) {
    .progress-box {
      width: 90%;
      margin: auto;
    }
    .image-box {
      margin: auto;
      flex-direction: column;
    }
    .on-image-text {
      position: relative;
      bottom: 100%;
      transform: translateY(-100%);
      margin-bottom: 1rem;
    }
  }
`;

export default Wrapper;
