// Logic for PageBtnContainerComponent
import {useFoodPageContext} from "../../pages/FoodPage.jsx";
import {useLocation, useNavigate} from "react-router-dom";

export const usePageBtnContainerComponent = () => {
    const {
        data: {numOfPages, currentPage},
    } = useFoodPageContext();
    const location = useLocation();
    const navigate = useNavigate();
    // Ensure currentPage is a number and fallback to 1 if it's invalid
    const safeCurrentPage = Number(currentPage) || 1;
    const safeNumOfPages = Number(numOfPages) || 1;

    const handlePageChange = (newPage) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("page", newPage);
        // console.log(
        //   "Navigating to:",
        //   `${location.pathname}?${searchParams.toString()}`
        // );
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };
    return {safeCurrentPage, safeNumOfPages, handlePageChange};
};
