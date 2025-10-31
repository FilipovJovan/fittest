// Logic for AnimationScroll
import {useEffect} from "react";

export const useAnimationScroll = (ref, animationClass) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target);
                }
            },
            {threshold: 0.1} // trigger when 10% visible
        );

        const current = ref.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [ref, animationClass]);
};
