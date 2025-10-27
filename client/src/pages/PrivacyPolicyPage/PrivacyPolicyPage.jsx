import React from "react";
import "./PrivacyPolicyPage.scss";
import {usePrivacyPolicyPage} from "./PrivacyPolicyPage.logic";
import {Link} from "react-router-dom";

const PrivacyPolicyPage = () => {
    return (
        <>
            <div className="page">
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
                <div className="container">
                    <h3>Privacy policy</h3>
                    <hr/>
                    <h4>1. Information We Collect</h4>
                    <p>
                        <span className="bold">a. Account Information</span>
                    </p>
                    <ul>
                        <li>Name</li>
                        <li>Last name</li>
                        <li>Email address</li>
                        <li>Password (hashed)</li>
                        <li>Date of birth</li>
                    </ul>
                    <p>
                        <span className="bold">b. Fitness & Health Info</span>
                    </p>
                    <ul>
                        <li>Workout preferences</li>
                        <li>Logged exercises, reps, sets, weights</li>
                        <li>Metrics like weight, height, or fitness goals</li>
                    </ul>
                    <p>
                        <span className="bold">c. Device & Usage Data</span>
                        <ul>
                            <li>IP address</li>
                            <li>Device type</li>
                            <li>App usage patterns</li>
                        </ul>
                    </p>
                    <hr/>
                    <h4>2. How We Use Your Information</h4>
                    <p>We use your data to:</p>
                    <ul>
                        <li>Create and manage your account</li>
                        <li>Provide personalized workout programs</li>
                        <li>Send verification or other emails</li>
                        <li>Improve our app features or performance</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                    <p>
                        We <span className="bold">do not sell </span>your personal
                        information
                    </p>
                    <hr/>
                    <h4>3. Email Communication</h4>
                    <p>We may send:</p>
                    <ul>
                        <li>
                            Account-related emails (verification, password reset, advices)
                        </li>
                        <li>Announcements or app updates</li>
                    </ul>
                    <p>You can opt out of non-essential emails at any time.</p>
                    <hr/>
                    <h4>4. Data Sharing</h4>
                    <p>We only share your information with:</p>
                    <ul>
                        <li>
                            <span className="bold">Email delivery providers</span> (e.g.,
                            Resend) to send verification or system emails
                        </li>
                        <li>
                            <span className="bold">Hosting & analytics services</span> to help
                            us maintain the app
                        </li>
                        <li>
                            <span className="bold">Legal authorities</span> if required by law
                            or in response to valid legal requests
                        </li>
                    </ul>
                    <p>
                        We never sell or rent your personal information to third parties.
                    </p>
                    <hr/>
                    <h4>5. How We Protect Your Data</h4>
                    <ul>
                        <li>All passwords are hashed using industry standards</li>
                        <li>Data is transmitted over encrypted HTTPS connections</li>
                        <li>
                            We restrict access to personal data to authorized personnel only
                        </li>
                    </ul>
                    <p>
                        Despite our efforts,{" "}
                        <span className="bold">
              {" "}
                            no method of transmission is 100% secure
            </span>
                        , and we cannot guarantee absolute security.
                    </p>
                    <hr/>
                    <h4>6. User Rights</h4>
                    <p>Depending on your location, you may have the right to:</p>
                    <ul>
                        <li>Access or update your personal data</li>
                        <li>Delete your account and associated data</li>
                        <li>Withdraw consent for data processing</li>
                        <li>Request a copy of your data</li>
                    </ul>
                    <p>
                        To make a request, email us at{" "}
                        <span className="bold">support@fittestsapp.com.</span>
                    </p>
                    <hr/>
                    <h4>7. Children’s Privacy</h4>
                    <p>
                        Fittest is not intended for users under the age of 18. We do not
                        knowingly collect data from children.
                    </p>
                    <hr/>
                    <h4>8. Data Retention</h4>
                    <p>
                        We retain your data as long as your account is active or as needed
                        to provide services. You can request deletion at any time.
                    </p>
                    <hr/>
                    <h4>9. Third-Party Links</h4>
                    <p>
                        We may link to third-party sites or services. We are not responsible
                        for their privacy practices.
                    </p>
                    <hr/>
                    <h4>10. Changes to This Policy</h4>
                    <p>
                        We may update this Privacy Policy from time to time. Changes will be
                        posted within the app or on our website.
                    </p>
                    <hr/>
                    <h4>11. Contact Us</h4>
                    <p>
                        If you have any questions or concerns about this Privacy Policy,
                        reach out: <span className="bold">support@fittests.com</span>
                    </p>
                </div>
            </div>
        </>

    );
};

export default PrivacyPolicyPage;
