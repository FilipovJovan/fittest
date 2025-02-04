import styled from "styled-components";

const Wrapper = styled.div`
  .ebooks-container {
    background-color: #f8f9fa;
    padding: 40px 20px;
    min-height: 100vh;
  }

  .ebooks-description {
    margin-top: 15px;
  }
  .ebooks-title {
    font-size: 2.5rem;
    color: #007bff;
    font-weight: bold;
  }

  .ebooks-description {
    font-size: 1.2rem;
    color: #6c757d;
    margin-bottom: 30px;
    text-align: center;
  }

  .ebook-card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }

  .ebook-card:hover {
    transform: translateY(-5px);
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .ebooks-cta {
    font-size: 1.2rem;
    color: #6c757d;
    margin-top: 40px;
    text-align: center;
  }

  .ebooks-btn {
    width: 200px;
    margin: 10px auto;
    display: block;
  }

  /* Grid Layout */
  .row {
    max-width: 800px;
    margin: auto;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .row {
      max-width: 100%;
    }

    .col-md-6 {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

export default Wrapper;
