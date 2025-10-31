// Logic for PricingComponent
export const usePricingComponent = () => {
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
    return {scrollToNewsletter};
};
