import React from "react";
import "./TermsAndConditionsPage.scss";
import {useTermsAndConditionsPage} from "./TermsAndConditionsPage.logic";
import {Link} from "react-router-dom";

const TermsAndConditionsPage = (props) => {
    const logic = useTermsAndConditionsPage(props);
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
                <div className="container">
                    <h3>Terms & Conditions</h3>
                    <hr/>
                    <h4>1. Acceptance of Terms</h4>
                    <p>
                        By creating an account or using the Fittest App, you agree to these
                        Terms & Conditions. If you do not agree, do not use the App.
                    </p>
                    <hr/>
                    <h4>2. Eligibility</h4>
                    <p>
                        You must be at least 18 years old to use this app. By using Fittest
                        App, you confirm that you meet this requirement.
                    </p>
                    <hr/>
                    <h4>3. Health Disclaimer</h4>
                    <p>
                        <span className="bold">We are not medical professionals.</span> The
                        workouts, nutrition tips, and fitness recommendations in the app are
                        for
                        <span className="bold">informational purposes only.</span> They are{" "}
                        <span className="bold">
              not a substitute for professional medical advice, diagnosis, or
              treatment.
            </span>
                    </p>
                    <ul>
                        <li>
                            Always consult a physician before starting any fitness program.
                        </li>
                        <li>
                            Stop exercising and seek medical attention if you experience pain,
                            dizziness, or shortness of breath.
                        </li>
                    </ul>
                    <p>
                        You assume full responsibility for your health decisions and
                        outcomes related to the use of this app.
                    </p>
                    <hr/>
                    <h4>4. User Responsibilities</h4>
                    <p>You agree to:</p>
                    <ul>
                        <li>Use the app only for lawful, personal use.</li>
                        <li>Provide accurate information when signing up</li>
                        <li>Not share your account with others.</li>
                    </ul>
                    <p>
                        We reserve the right to suspend or terminate your access if you
                        violate these terms.
                    </p>
                    <hr/>
                    <h4>5. No Guarantee of Results</h4>
                    <p>
                        Fittest App does not guarantee any specific fitness results.
                        Progress depends on many individual factors, including diet,
                        consistency, genetics, and lifestyle.
                    </p>
                    <hr/>
                    <h4>6. Intellectual Property</h4>
                    <p>
                        All content in the app (logos, workouts, code, text, etc.) is the
                        property of Fittest or its licensors. You may not reproduce,
                        distribute, or exploit it without permission.
                    </p>
                    <hr/>
                    <h4>7. Modifications to the App</h4>
                    <p>
                        We may update or discontinue features in the app at any time, with
                        or without notice.
                    </p>
                    <hr/>
                    <h4>8. Limitation of Liability</h4>
                    <p>To the maximum extent permitted by law:</p>
                    <ul>
                        <li>
                            Fittest App, its developers, and affiliates are{" "}
                            <span className="bold">not liable</span> for any injury, health
                            issue, or loss (financial or otherwise) arising from the use of
                            this app.
                        </li>
                        <li>
                            Use of the app is <span className="bold">at your own risk.</span>
                        </li>
                    </ul>
                    <hr/>
                    <h4>9. Third-Party Services</h4>
                    <p>
                        The app may link to or integrate with third-party tools or
                        platforms. We are not responsible for their practices or content.
                    </p>
                    <hr/>
                    <h4>10. Data & Privacy</h4>
                    <p>
                        We respect your privacy. Please review our{" "}
                        <Link to="/privacy-policy">
                            <span className="bold">Privacy policy</span>
                        </Link>{" "}
                        to learn how we handle your data.
                    </p>
                    <hr/>
                    <h4>11. Contact</h4>
                    <p>
                        If you have questions about these Terms,
                        <br/> contact us at:
                        <span className="bold"> support@fittestsapp.com</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditionsPage;
