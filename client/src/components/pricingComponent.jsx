import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const PricingPackage = ({
  dotClass,
  title,
  description,
  priceMonthly,
  priceAnnually,
  buttonColor,
  pricingButtonText,
  includedItems,
}) => {
  const scrollToNewsletter = () => {
    const newsletterElement = document.getElementById("section-newsletter");

    if (newsletterElement) {
      newsletterElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  return (
    <Col className="pricing-packages-columns">
      <Row className="pricing-packages-upper-row">
        <span className={dotClass}></span>
        <h4 className="highlighted-text-one">{title}</h4>
        <p>{description}</p>
      </Row>
      <Row className="pricing-packages-lower-row">
        <p>
          {priceMonthly && priceAnnually ? (
            <>
              <span className="highlighted-text-one">{priceMonthly}</span> per
              month billed annually or{" "}
              <span className="highlighted-text-two">
                {priceAnnually} billed monthly
              </span>
            </>
          ) : (
            <span className="highlighted-text-free">Free</span>
          )}
        </p>
        <Button
          variant="secondary"
          className={`pricing-button ${buttonColor}`}
          onClick={scrollToNewsletter}
        >
          <p className={pricingButtonText}>Get Started</p>
        </Button>
        <h5>What's included</h5>
        {includedItems.map((item, index) => (
          <Row key={index} className="offers">
            <Col md={1} sm={1} lg={1} className="ticks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16px"
                height="16px"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </Col>
            <Col md={11} sm={11} lg={11} className="words">
              <p>{item}</p>
            </Col>
          </Row>
        ))}
      </Row>
    </Col>
  );
};

export default PricingPackage;
