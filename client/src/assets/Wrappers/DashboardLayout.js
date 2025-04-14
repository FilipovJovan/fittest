import styled from "styled-components";

const Wrapper = styled.div`
  .progress-box {
    width: 45%;
    background-color: var(--grey-300);
    padding: 15px 8px 15px 8px;
    border: none;
    border-radius: 12px;
    margin-left: 0px;
  }
  .progress-box-col {
    margin: auto;
  }
  .progress-box-col p {
    margin-bottom: 0px;
  }
  .progress-box-col h6 {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .percentage {
    text-align: right;
    font-weight: bold;
  }
  h3 {
    margin: 30px 0px 10px 0px;
  }
  .image-box {
    width: 95%;
  }
  .image-box-col {
  }
  .images {
    width: 100%;
    border-radius: 8px;
    opacity: 0.8;
    object-fit: cover;
    height: 90%;
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
`;

export default Wrapper;
