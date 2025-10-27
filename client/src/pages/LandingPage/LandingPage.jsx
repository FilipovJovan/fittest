import React from "react";
import "./LandingPage.scss";
import {useLandingPage} from "./LandingPage.logic";
import NavigationBar from "../../components/NavigationBar.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import phoneImage from "../../assets/images/phoneImage.png";
import AnimationScroll from "../../components/AnimationScroll.jsx";
import fitnessImage from "../../assets/images/fitnessImage.jpg";
import dietImage from "../../assets/images/dietImage.jpg";
import progressImage from "../../assets/images/progress.png";
import PricingPackage from "../../components/pricingComponent.jsx";
import Footer from "../../components/Footer.jsx";
import Wrapper from "../../assets/Wrappers/LandingPage.js";

const LandingPage = (props) => {
    const logic = useLandingPage(props);
    return (
        <>
            <NavigationBar/>
            <Row className="section-one" id="section-one">
                <Row className="main-row">
                    <Col md={12} sm={7} lg={6} className="da">
                        <Row>
                            <div className="first-text">
                                <div className="text-headings">
                                    <h1>FITTEST.</h1>
                                </div>
                                <p>
                                    Customized workouts personalized for you including meals &
                                    recipes
                                </p>
                            </div>
                        </Row>
                        <Row>
                            <div className="appLinks">
                                <Row className="rowAppLinks">
                                    <Col md={6} sm={6} lg={6}>
                                        <Container className="container-link-to-app">
                                            {/*
                      <Col md={3} sm={3} lg={3}>
                        <svg
                          className="svg-icons"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 333334 332780"
                          shape-rendering="geometricPrecision"
                          text-rendering="geometricPrecision"
                          image-rendering="optimizeQuality"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        >
                          <path d="M67387 0h198559c37063 0 67387 30324 67387 67387v198005c0 37063-30324 67387-67387 67387H67387C30324 332779 0 302455 0 265392V67387C0 30324 30324 0 67387 0zm192804 188911c8471 0 15339 6868 15339 15339 0 8472-6868 15339-15339 15339h-13707l12369 21361c4186 7375 1601 16748-5774 20934-7376 4186-16748 1600-20933-5775l-21148-36520h-292l-18180-30679h707l-17948-30995 17460-31129 35974 62123h31472zM137016 91830c-4186-7376-1601-16748 5775-20934 7375-4186 16748-1601 20933 5774l3533 6102 3041-5232c4186-7375 13559-9960 20934-5774s9960 13559 5775 20933l-12043 20650 35 60-9218 15688-34881 59815h36634l17798 30678-71907 1-19809 34780c-4186 7375-13559 9960-20933 5774-7375-4186-9961-13558-5774-20934l11175-19619H73143c-8471 0-15339-6868-15339-15340 0-8471 6868-15339 15339-15339h32415l43922-75559-12464-21524z" />
                        </svg>
                      </Col>
                      <Col md={9} sm={9} lg={9}>
                        <div className="appLinksText">
                          <p>Soon on</p>
                          <h5>App Store</h5>
                        </div>
                      </Col>*/}
                                            <Link to="/register">
                                                <h4 className="register-text">Register</h4>
                                            </Link>
                                        </Container>
                                    </Col>
                                    <Col md={6} sm={6} lg={6}>
                                        <Container className="container-link-to-app">
                                            {/*
                      <Col md={3} sm={3} lg={3}>
                        <svg
                          className="svg-icons"
                          xmlns="http://www.w3.org/2000/svg"
                          shape-rendering="geometricPrecision"
                          text-rendering="geometricPrecision"
                          image-rendering="optimizeQuality"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          viewBox="0 0 466 511.98"
                        >
                          <g id="Layer_x0020_1">
                            <path
                              fill="#EA4335"
                              fill-rule="nonzero"
                              d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"
                            />
                            <path
                              fill="#FBBC04"
                              fill-rule="nonzero"
                              d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"
                            />
                            <path
                              fill="#34A853"
                              fill-rule="nonzero"
                              d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"
                            />
                            <path
                              fill="#4285F4"
                              fill-rule="nonzero"
                              d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"
                            />
                          </g>
                        </svg>
                      </Col>
                      <Col md={9} sm={9} lg={9}>
                        <div className="appLinksText">
                          <p>Soon on</p>
                          <h5>Google Play</h5>
                        </div>
                      </Col>
                       */}
                                            <Link to="/login">
                                                <h4 className="login-text">Login</h4>
                                            </Link>
                                        </Container>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Col>
                    <Col md={12} sm={12} lg={6} className="da">
                        <img
                            src={phoneImage}
                            className="phoneImage"
                            alt="Phone image"
                            loading="lazy"
                        />
                    </Col>
                </Row>
            </Row>
            {/* <Newsletter id="section-newsletter" /> */}
            <Row className="section-two" id="section-two">
                <h1 className="section-two-heading">How it works</h1>
                <Row className="section-two-rows-left">
                    <Col>
                        <AnimationScroll animationClass="right-animation"></AnimationScroll>
                        <img
                            src={fitnessImage}
                            className="section-two-images"
                            alt="Fitness Image"
                            loading="lazy"
                        />
                    </Col>
                    <Col className="section-two-right">
                        <AnimationScroll animationClass="left-animation">
                            <svg
                                fill="#007bff"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="70px"
                                height="70px"
                                viewBox="0 0 485.535 485.535"
                                xml:space="preserve"
                                stroke="#007bff"
                            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                  {" "}
                                    <g>
                    {" "}
                                        <g id="_x35__13_">
                      {" "}
                                            <g>
                        {" "}
                                                <path
                                                    d="M55.465,123.228c-15.547,0-28.159,12.608-28.159,28.161v56.673C11.653,211.908,0,225.928,0,242.765 c0,16.842,11.652,30.861,27.306,34.707v56.666c0,15.555,12.612,28.16,28.159,28.16c15.546,0,28.16-12.605,28.16-28.16V151.389 C83.625,135.837,71.011,123.228,55.465,123.228z"/>
                                                {" "}
                                                <path
                                                    d="M334.498,65.278c-23.092,0-41.811,18.719-41.811,41.812v93.864h-12.801h-60.585h-19.625l-6.827-0.163V107.09 c0-23.092-18.72-41.812-41.813-41.812c-23.091,0-41.812,18.719-41.812,41.812v271.355c0,23.093,18.721,41.812,41.812,41.812 c23.094,0,41.813-18.719,41.813-41.812v-93.653c0,0,4.501-0.211,6.827-0.211h19.625h60.585h12.801v93.864 c0,23.093,18.719,41.812,41.811,41.812c23.094,0,41.812-18.719,41.812-41.812V107.089 C376.311,83.998,357.592,65.278,334.498,65.278z"/>
                                                {" "}
                                                <path
                                                    d="M458.229,208.062v-56.673c0-15.552-12.613-28.161-28.158-28.161c-15.547,0-28.16,12.608-28.16,28.161v182.749 c0,15.555,12.613,28.16,28.16,28.16c15.545,0,28.158-12.605,28.158-28.16v-56.666c15.654-3.846,27.307-17.865,27.307-34.707 C485.535,225.927,473.883,211.908,458.229,208.062z"/>
                                                {" "}
                      </g>
                                            {" "}
                    </g>
                                        {" "}
                  </g>
                                    {" "}
                </g>
              </svg>
                            <div className="section-two-text">
                                <h4>Personalized workout plan</h4>
                                <p>
                                    Personalized workout plans tailored through advanced
                                    algorithm.
                                </p>
                            </div>
                        </AnimationScroll>
                    </Col>
                </Row>
                <Row className="section-two-rows-right">
                    <Col className="section-two-left">
                        <AnimationScroll animationClass="right-animation">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="#007bff"
                                width="70px"
                                height="70px"
                            >
                                <path
                                    d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"/>
                            </svg>
                            <div className="section-two-text">
                                <h4>Food & nutrition</h4>
                                <p>
                                    Access to a variety of meal recipes and nutritional
                                    recommendations.
                                </p>
                            </div>
                        </AnimationScroll>
                    </Col>
                    <Col>
                        <AnimationScroll animationClass="left-animation"></AnimationScroll>
                        <img
                            src={dietImage}
                            className="section-two-images"
                            alt="Diet Image"
                            loading="lazy"
                        />
                    </Col>
                </Row>
                <Row className="section-two-rows-left">
                    <Col>
                        <AnimationScroll animationClass="right-animation"></AnimationScroll>
                        <img
                            src={progressImage}
                            className="section-two-images"
                            alt="Progress Image"
                            loading="lazy"
                        />
                    </Col>
                    <Col className="section-two-right">
                        <AnimationScroll animationClass="left-animation">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="#007bff"
                                width="70px"
                                height="70px"
                            >
                                <path
                                    d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                            </svg>
                            <div className="section-two-text">
                                <h4>Progress tracking</h4>
                                <p>
                                    Set goals, track workouts, log meals, and see progress in
                                    real-time.
                                </p>
                            </div>
                        </AnimationScroll>
                    </Col>
                </Row>
            </Row>

            <Row className="section-three" id="section-three">
                <h1 className="section-two-heading">Pricing and packages</h1>
                <Row className="pricing-packages">
                    <PricingPackage
                        dotClass="dot-one"
                        title="Basic"
                        description="For people who want to get in touch with fitness"
                        priceMonthly="Free"
                        pricingButtonText="pricing-button-text-black"
                        includedItems={[
                            "1 month workout plan",
                            "Meal suggestion",
                            "1 newsletter per week",
                            "Exercise access",
                            "4 pre-made splits",
                        ]}
                    />
                    <PricingPackage
                        dotClass="dot-three"
                        title="Premium"
                        description="For people who want the best fitness experience"
                        priceMonthly="$15"
                        priceAnnually="$20"
                        buttonColor="pricing-button-premium"
                        pricingButtonText="pricing-button-text-white"
                        includedItems={[
                            "All from free",
                            "Weight algorithm",
                            "Progress tracking",
                            "10+ pre-made splits",
                            "Calculated macros",
                            "Calculated calories",
                            "Meals access",
                            "Meal suggestion",
                            "Changing exercises",
                        ]}
                    />
                </Row>
            </Row>
            <Row className="section-four" id="section-four"></Row>
            <Footer/>
        </>
    );
};

export default LandingPage;
