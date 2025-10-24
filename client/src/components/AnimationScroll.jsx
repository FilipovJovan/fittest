import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/Wrappers/AnimationScroll";

// eslint-disable-next-line react/prop-types
const AnimationOnScroll = ({ children, animationClass }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Adjust this value for earlier/later triggers
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass]);

  return (
    <Wrapper>
      <div ref={ref} className="animated-element">
        {children}
      </div>
    </Wrapper>
  );
};

export default AnimationOnScroll;
