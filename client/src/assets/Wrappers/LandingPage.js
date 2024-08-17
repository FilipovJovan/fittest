import styled from "styled-components";

const Wrapper = styled.section`
  .section-one {
    max-width: 100%;
    margin: auto;
    margin-bottom: 100px;
    background-image: linear-gradient(
      160deg,
      var(--primary-300) 50%,
      var(--purple-300) 100%
    );
    padding: 15px;
    height: 95vh;
    --bs-gutter-x: none;
  }
  .main-row {
    margin: 0 auto;
  }

  .text-headings h1 {
    font-weight: bold;
    color: var(--black);
    font-size: 96px;
  }
  .first-text {
    color: var(--white);
    position: relative;
    transform: translate(50%, -50%);
    text-shadow: var(--shadow-4);
  }
  .da {
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 80px;
  }

  .rowAppLinks {
    margin: 10px;
    padding: 5px;
    border-radius: 8px;
    color: var(--black);
  }
  .appLinks {
    width: 100%;
  }
  .svg-icons {
    width: 30px;
    position: relative;
    transform: translate(0, 50%);
  }
  .container-link-to-app {
    position: relative;
    transform: translate(-100%, 70%);
    background-color: var(--white);
    border-radius: 6px;
    text-align: left;
    width: 220px;
    height: 65px;
    margin-right: 200px;
  }
  .appLinksText {
    line-height: 0;
    position: relative;
    top: 50%;
    transform: translate(28%, -40%);
  }
  h5 {
    font-weight: 600;
  }
  .phoneImage {
    width: 290px;
    position: relative;
    top: 20%;
    left: 15%;
    transform: translate(-30%, -30%);
  }
  .section-two {
    background-color: var(--white);
    max-width: 800px;
    margin: auto;
    --bs-gutter-x: none;
    text-align: center;
  }
  .section-two h1 {
    font-weight: 600;
    font-size: 48px;
  }
  .section-two-rows-left {
    margin-top: 20px;
    flex-direction: row;
  }
  .section-two-right {
    text-align: left;
  }
  .section-two-left {
    text-align: right;
  }
  .section-two-right svg {
    position: relative;
    top: 25%;
    transform: translate(0, -25%);
  }
  .section-two-left svg {
    position: relative;
    top: 25%;
    transform: translate(0, -25%);
  }
  .section-two-text {
    max-width: 350px;
    // text-align: justify;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    line-height: 1.5;
    position: relative;
    top: 25%;
    transform: translate(0, -25%);
  }
  .section-two-text h3 {
    line-height: 42px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 36px;
  }
  .section-two-heading {
    margin-bottom: 50px;
  }
  .section-two-images {
    width: 350px;
    border-radius: 20px;
  }
  .mid-section {
    background-image: linear-gradient(
      155deg,
      var(--primary-400) 20%,
      var(--purple-300) 100%
    );
    text-align: center;
    color: var(--white);
    height: 30vh;
    width: 100%;
    margin: auto;
    margin-top: 60px;
  }
  .mid-section h2 {
    font-size: 48px;
    font-weight: 500;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .mid-section p {
    font-size: 28px;
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
  }
  .section-three {
    background-color: var(--white);
    max-width: 900px;
    margin: auto;
    --bs-gutter-x: none;
    text-align: center;
  }
  .section-three h1 {
    font-size: 48px;
    font-weight: 600;
    margin-top: 50px;
  }
  .pricing-packages {
    max-width: 100%;
    text-align: left;
    margin: auto;
    margin-bottom: 320px;
  }
  .pricing-packages-columns {
    margin: 2px;
    padding: 0px 30px 0px 30px;
    height: 50vh;
  }
  .pricing-packages p {
    font-size: 16px;
  }
  .pricing-packages-upper-row {
    background-color: var(--primary-10);
    padding: 10px;
    border-radius: 8px 8px 0px 0px;
  }
  .pricing-packages-lower-row {
    background-color: var(--primary-15);
    padding: 10px;
    border-radius: 0px 0px 8px 8px;
  }
  .pricing-packages-lower-row h5 {
    margin-bottom: 5px;
  }
  .dot-one {
    margin: 15px 0px 5px 10px;
    height: 25px;
    width: 25px;
    background-color: var(--purple-25);
    border-radius: 50%;
  }
  .dot-two {
    margin: 15px 0px 5px 10px;
    height: 25px;
    width: 25px;
    background-color: var(--purple-100);
    border-radius: 50%;
  }
  .dot-three {
    margin: 15px 0px 5px 10px;
    height: 25px;
    width: 25px;
    background-color: var(--purple-500);
    border-radius: 50%;
  }
  .pricing-button {
    background-color: var(--primary-10);
    border-color: var(--gray-50);
    margin: 10px 0px 10px 0px;
  }
  .pricing-button-premium {
    background-color: var(--purple-500);
  }
  .pricing-button-text-white {
    color: var(--white);
  }
  .pricing-button-text-black {
    color: var(--black);
  }
  .pricing-button p {
    margin-bottom: 0;
    font-weight: 500;
  }
  .highlighted-text-one {
    font-size: 22px;
    font-weight: 550;
  }
  .highlighted-text-two {
    font-size: 18px;
    font-weight: 550;
  }
  .highlighted-text-free {
    font-size: 18px;
    font-weight: 550;
  }
  @media (max-width: 992px) {
    .section-one {
      padding: 0;
      margin: 0 auto;
      height: 120vh;
      margin-bottom: 50px;
    }
    .da {
      height: 20vh;
      flex-direction: column;
      flex-wrap: nowrap;
      max-width: 800px;
      text-align: center;
      margin: auto;
    }
    .container-link-to-app {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--white);
      border-radius: 6px;
      text-align: left;
      width: 200px;
      height: 65px;
      margin: auto;
    }
    .phoneImage {
      width: 290px;
      position: relative;
      top: 50%;
      left: 18.5%;
      transform: translate(-50%, -30%);
    }
    .text-headings h1 {
      font-weight: bold;
      color: var(--black);
      font-size: 70px;
    }

    .first-text {
      margin: auto;
      text-align: center;
      top: 0;
      left: 0;
      position: relative;
      transform: translate(0, 0);
    }
    .section-two {
      background-color: var(--white);
      max-width: 750px;
      margin: auto;
      --bs-gutter-x: none;
      text-align: center;
    }
    .section-two-right {
      text-align: center;
    }
    .section-two-left {
      text-align: center;
    }
    .section-two-rows svg {
      max-width: 280px;
    }
    .section-two-text {
      max-width: 280px;
    }
    .section-two-images {
      width: 280px;
      border-radius: 20px;
    }
    .mid-section h2 {
      font-size: 40px;
      line-break: loose;
    }
    .mid-section p {
      font-size: 20px;
    }
    .pricing-packages {
      max-width: 550px;
      text-align: left;
      margin: auto;
      flex-direction: column;
    }
    .pricing-packages-columns {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 768px) {
    .section-one {
      max-width: 100%;
      margin: auto;
      margin-bottom: 40px;
      padding: 15px;
      height: 120vh;
      --bs-gutter-x: none;
    }
    .phoneImage {
      width: 255px;
      position: relative;
      top: 0%;
      left: 0%;
      transform: translate(-0%, -0%);
    }
    .first-text {
      margin-bottom: 20px;
    }
    .text-headings h1 {
      font-size: 56px;
      margin-top: 20px;
    }
    .rowAppLinks {
      width: 100%; /* Ensure the parent container takes full width */
      display: flex; /* Enable flexbox layout */
      justify-content: center; /* Center children horizontally */
      align-items: center; /* Center children vertically if needed */
      flex-direction: column; /* Stack children vertically */
    }
    .container-link-to-app {
      position: relative;
      top: 65%;
      left: 65%;
      transform: translate(-65%, -65%);
      background-color: var(--white);
      border-radius: 6px;
      text-align: left;
      width: 170px;
      height: 50px;
      margin: 5px;
    }
    .container-link-to-app p {
      font-size: 13px;
    }
    .container-link-to-app h5 {
      font-size: 16px;
    }
    .svg-icons {
      width: 25px;
      position: relative;
      transform: translate(0, 50%);
    }
    p {
      margin-bottom: 0.5rem;
    }
    .section-two-rows-left {
      margin: auto;
    }
    .section-two-rows-right {
      margin: auto;
    }
    .section-two-text {
      max-width: 240px;
    }
    .section-two-images {
      width: 240px;
      border-radius: 20px;
    }
    .section-two-text {
      position: relative;
      top: 1%;
      transform: translate(0, -1%);
    }
    .section-two-left svg {
      position: relative;
      bottom: 1%;
      transform: translate(0, -40%);
    }
    .section-two-right svg {
      position: relative;
      bottom: 1%;
      transform: translate(0, -50%);
    }
    .pricing-packages {
      max-width: 400px;
      text-align: left;
      margin: auto;
      flex-direction: column;
    }
    .pricing-packages-columns {
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 575px) {
    .section-one {
      max-width: 100%;
      margin: auto;
      margin-bottom: 40px;
      background-color: var(--primary-200);
      padding: 15px;
      height: 105vh;
      --bs-gutter-x: none;
    }
    .da {
      height: 40vh;
      position: relative;
    }
    .first-text {
      margin-top: 100px;
    }
    .text-headings h1 {
      margin-top: 20px;
    }
    .container-link-to-app {
      position: relative;
      top: 15%;
      left: 15%;
      transform: translate(-15%, -15%);
      background-color: var(--white);
      border-radius: 6px;
      text-align: left;
      width: 160px;
      height: 50px;
      margin: 5px;
    }
    p {
      margin-bottom: 0.5rem;
    }
    .phoneImage {
      width: 220px;
      position: relative;
      top: 2%;
      left: 2%;
      transform: translate(-2%, -2%);
      margin-top: 50px;
    }

    .section-two-rows {
      margin: auto;
    }
    .section-two-rows-left {
      display: flex;
      flex-direction: column-reverse;
    }
    .section-two-rows-right {
      display: flex;
      flex-direction: column;
    }
    .section-two-text {
      max-width: 240px;
      margin: auto;
      /* position: relative;
      top: 1%;
      left: 1%;
      transform: translate(-1%, -1%);*/
      margin-bottom: 20px;
    }
    .section-two-images {
      position: relative;
      top: 1%;
      left: 1%;
      transform: translate(-1%, -1%);
    }
    .section-two-rows {
      flex-direction: column;
    }
    .section-two-left {
      flex-direction: column-reverse;
    }
    .section-two-left svg {
      position: relative;
      top: 1%;
      left: 1%;
      transform: translate(-1%, -1%);
      width: 60px;
      margin-top: 20px;
    }
    .section-two-right svg {
      position: relative;
      text-align: left;
      top: 1%;
      left: 1%;
      transform: translate(-1%, -1%);
      width: 60px;
      margin-top: 20px;
    }
    .section-two-right {
      text-align: center;
    }
    .section-two-left {
      text-align: center;
    }
    .section-two-rows .section-two-text {
      order: 1;
    }
    .section-two-rows .section-two-images {
      order: 2;
    }
    .pricing-packages {
      max-width: 350px;
      text-align: left;
      margin: auto;
      flex-direction: column;
    }
    .pricing-packages-columns {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .ticks {
      max-width: min-content;
    }
    .words {
      max-width: max-content;
    }
  }
  @media (max-width: 450px) {
    .phoneImage {
      width: 180px;
      position: relative;
      top: 2%;
      left: 2%;
      transform: translate(-2%, -2%);
      margin-top: 50px;
    }
    .text-headings h1 {
      font-size: 48px;
      margin-top: 20px;
    }
  }
`;

export default Wrapper;
