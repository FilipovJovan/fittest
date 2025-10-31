import React, {useRef} from "react";
import "./AnimationScroll.scss";
import {useAnimationScroll} from "./AnimationScroll.logic.js";

const AnimationOnScroll = ({children, animationClass}) => {
    const ref = useRef();
    useAnimationScroll(ref, animationClass);

    return (
        <>
            <div ref={ref} className="animated-element">
                {children}
            </div>
        </>
    );
};

export default AnimationOnScroll;
