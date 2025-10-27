// Logic for VerificationPage
import {useSpring} from "@react-spring/web";

export const useVerificationPage = () => {
    const props = useSpring({
        from: {opacity: 0, transform: "translateY(100px)"},
        to: {opacity: 1, transform: "translateY(0px)"},
        config: {tension: 220, friction: 120},
    });

    return {props};
};
