import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Wrapper from "../assets/Wrappers/LandingPage";
import phoneImage from "../assets/images/phoneImage.png";
import fitnessImage from "../assets/images/fitnessImage.jpg";
import progressImage from "../assets/images/progress.png";
import dietImage from "../assets/images/dietImage.jpg";
import PricingPackage from "../components/pricingComponent";
import Newsletter from "../components/newsletterForm";
import Footer from "../components/Footer";
import AnimationScroll from "../components/AnimationScroll";

const LandingPage = () => {
  return (
    <Wrapper>
      <NavigationBar />
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
                      </Col>
                    </Container>
                  </Col>
                  <Col md={6} sm={6} lg={6}>
                    <Container className="container-link-to-app">
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
                    </Container>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
          <Col md={12} sm={12} lg={6} className="da">
            <img src={phoneImage} className="phoneImage" />
          </Col>
        </Row>
      </Row>
      <Newsletter />
      <Row className="section-two" id="section-two">
        <h1 className="section-two-heading">How it works</h1>
        <Row className="section-two-rows-left">
          <Col>
            <AnimationScroll animationClass="right-animation"></AnimationScroll>
            <img src={fitnessImage} className="section-two-images" />
          </Col>
          <Col className="section-two-right">
            <svg
              fill="#007bff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="70px"
              height="70px"
              viewBox="0 0 485.535 485.535"
              xmlSpace="preserve"
              stroke="#007bff"
            >
              {/* SVG Content */}
            </svg>
            <AnimationScroll animationClass="left-animation">
              <div className="section-two-text">
                <h3>Personalized workout plan</h3>
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
                {/* SVG Content */}
              </svg>
              <div className="section-two-text">
                <h3>Food & nutrition</h3>
                <p>
                  Access to a variety of meal recipes and nutritional
                  recommendations.
                </p>
              </div>
            </AnimationScroll>
          </Col>
          <Col>
            <AnimationScroll animationClass="left-animation"></AnimationScroll>
            <img src={dietImage} className="section-two-images" />
          </Col>
        </Row>
        <Row className="section-two-rows-left">
          <Col>
            <AnimationScroll animationClass="right-animation"></AnimationScroll>
            <img src={progressImage} className="section-two-images" />
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
                {/* SVG Content */}
              </svg>
              <div className="section-two-text">
                <h3>Progress tracking</h3>
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
        <AnimationScroll animationClass="left-animation">
          <h1 className="section-two-heading">Pricing and packages</h1>
        </AnimationScroll>
        <Row className="pricing-packages">
          <PricingPackage
            dotClass="dot-one"
            title="Basic"
            description="For people who want to get in touch with fitness"
            priceMonthly="Free"
            pricingButtonText="pricing-button-text-black"
            includedItems={[
              "1 month workout plan",
              "Meal suggestions",
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
              "Calories calculator",
              "Warm-up routines",
              "Stretching routines",
              "Daily reminders",
              "100$ worth of ebooks",
            ]}
          />
        </Row>
      </Row>
      <Row className="section-four" id="section-four"></Row>
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
