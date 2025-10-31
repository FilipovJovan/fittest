// Logic for NewsletterComponent
import {useState} from "react";
import {useInView} from "react-intersection-observer";
import {useSpring} from "react-spring";
import axios from "axios";

export const useNewsletterComponent = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [hovered, setHovered] = useState(false);
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1});

    const fade = useSpring({
        opacity: message || error ? 1 : 0,
        transform: message || error ? "translateY(0)" : "translateY(10px)",
        config: {tension: 170, friction: 26},
    });

    const hoverAnimation = useSpring({
        transform: hovered ? "scale(1.05)" : "scale(1)",
        config: {tension: 300, friction: 10},
    });

    // Apply reveal animation to the whole container
    const revealAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        config: {tension: 170, friction: 20},
    });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        try {
            const response = await axios.post("/signup", {email});
            setMessage(response.data);
            setEmail("");
        } catch (err) {
            console.error("Error response:", err.response);
            setError(
                err.response && err.response.data
                    ? err.response.data
                    : "An error occurred"
            );
        }
    };
    return {
        handleSubscribe,
        handleEmailChange,
        fade,
        hoverAnimation,
        revealAnimation,
        ref,
        setHovered,
        message,
        email,
        error
    };
};
