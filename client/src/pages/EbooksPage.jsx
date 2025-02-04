import React from "react";
import "../assets/Wrappers/Ebooks";
import EbookTrainingImage from "../assets/images/Strength & Hypertrophy Training Guide (1).png";
import EbookDietImage from "../assets/images/Ultimate Guide to Healthy Eating & Diet Optimization (1).png";
import trainingEbook from "../assets/ebooks/Strength & Hypertrophy Training Guide.pdf";
import dietEbook from "../assets/ebooks/Ultimate Guide to Healthy Eating & Diet Optimization.pdf";
import Wrapper from "../assets/Wrappers/Ebooks";
import { Footer } from "../components";
import Newsletter from "../components/newsletterForm";
import BackArrow from "../assets/images/left-arrow-svgrepo-com.svg";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import { HashLink } from "react-router-hash-link";

const EbooksPage = () => {
  return (
    <Wrapper>
      <div className="ebooks-container">
        <Link to="../">
          <svg
            fill="#000000"
            height="40px"
            width="40px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_308_"
              d="M315,150H105V90c0-6.067-3.655-11.537-9.26-13.858c-5.606-2.322-12.058-1.038-16.347,3.252l-75,75
	c-5.858,5.858-5.858,15.355,0,21.213l75,75c2.87,2.87,6.705,4.394,10.61,4.394c1.932,0,3.881-0.374,5.737-1.142
	c5.605-2.322,9.26-7.791,9.26-13.858v-60h210c8.284,0,15-6.716,15-15C330,156.716,323.284,150,315,150z M75,203.787L36.213,165
	L75,126.213V203.787z"
            />
          </svg>
        </Link>
        {/* Page Heading */}
        <h1 className="text-center ebooks-title">
          Fitness And Nutrition E-Books 📖
        </h1>
        <p className="text-center ebooks-description">
          Unlock your full potential with our expertly crafted training and
          nutrition guides. Download now and start transforming your fitness
          journey today!
        </p>

        {/* E-Books Grid */}
        <div className="container">
          <div className="row">
            {/* Training E-Book */}
            <div className="col-md-6">
              <div className="card ebook-card">
                <img
                  src={EbookTrainingImage}
                  className="card-img-top"
                  alt="Training E-Book"
                />
                <div className="card-body">
                  <h2 className="card-title">Strength & Hypertrophy Guide</h2>
                  <p className="card-text">
                    Learn how to build muscle, optimize your workout split, and
                    improve recovery.
                  </p>
                  <a
                    href={trainingEbook}
                    download
                    className="btn btn-primary w-100"
                  >
                    📥 Download
                  </a>
                </div>
              </div>
            </div>

            {/* Diet E-Book */}
            <div className="col-md-6">
              <div className="card ebook-card">
                <img
                  src={EbookDietImage}
                  className="card-img-top"
                  alt="Diet E-Book"
                />
                <div className="card-body">
                  <h2 className="card-title">
                    Ultimate Nutrition & Diet Guide
                  </h2>
                  <p className="card-text">
                    Discover how to eat right, reduce unhealthy foods, and feel
                    amazing.
                  </p>
                  <a
                    href={dietEbook}
                    download
                    className="btn btn-secondary w-100"
                  >
                    📥 Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <p className="text-center ebooks-cta">
          Need personalized fitness plans? Check out our app for more exclusive
          content!
        </p>
        <HashLink smooth to="/#section-newsletter">
          <a
            href={Newsletter}
            className="btn btn-dark d-block mx-auto ebooks-btn"
          >
            🚀 Get the App
          </a>
        </HashLink>
      </div>
      <Footer></Footer>
    </Wrapper>
  );
};

export default EbooksPage;
