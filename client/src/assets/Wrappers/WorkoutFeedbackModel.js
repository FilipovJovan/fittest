import { createGlobalStyle } from "styled-components";

const ModalStyles = createGlobalStyle`
  .custom-modal .modal-content {
    border-radius: 20px;
  }

  .custom-modal .modal-header,
  .custom-modal .modal-footer {
    border: none;
  }

  .custom-modal .form-check-label {
    //color: white;
    font-weight: 500;
  }
  @media (max-width: 456px){
    .custom-modal .modal-content {
    width: 80%;
    margin: auto;
    }
    .custom-modal .form-check-label {
        font-size: 10px;
        font-weight: 500;
    }
    .custom-modal .form-label{
        font-size: 14px;
    }
    .custom-modal .modal-container p{
        font-size: 14px;
    }
  }
`;
export default ModalStyles;
