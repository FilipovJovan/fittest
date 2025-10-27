import Wrapper from "../assets/Wrappers/Ebooks";
import { Footer } from "../components";
import Newsletter from "../components/newsletterForm";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import EbookCard from "../components/EBookCard";

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
                        {/* eslint-disable-next-line react/no-unknown-property */}
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
                        <EbookCard
                            image="/images/Strength & Hypertrophy Training Guide (1).png"
                            title="Strength & Hypertrophy Guide"
                            description="Learn how to build muscle, optimize your workout split, and improve recovery."
                            downloadLink="/ebooks/Strength & Hypertrophy Training Guide.pdf"
                        />

                        <EbookCard
                            image="/images/Ultimate Guide to Healthy Eating & Diet Optimization (1).png"
                            title="Ultimate Diet & Nutrition Guide"
                            description="Master nutrition, cut unhealthy fats, and fuel your body for success."
                            downloadLink="/ebooks/Ultimate Guide to Healthy Eating & Diet Optimization.pdf"
                        />

                        <EbookCard
                            image="/images/The Power of Sleep Unlocking Peak Performance & Recovery.jpg"
                            title="The Ultimate Guide to Sleep & Recovery"
                            description="Boost muscle growth, enhance recovery, and improve mental clarity with better sleep."
                            downloadLink="/ebooks/The Power of Sleep Unlocking Peak Performance & Recovery.pdf"
                        />
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

