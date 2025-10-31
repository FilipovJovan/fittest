import React from "react";
import "./PageBtnContainerComponent.scss";
import {usePageBtnContainerComponent} from "./PageBtnContainerComponent.logic";
import {HiChevronDoubleLeft, HiChevronDoubleRight} from "react-icons/hi";

const PageBtnContainerComponent = () => {
    const {safeCurrentPage, safeNumOfPages, handlePageChange} = usePageBtnContainerComponent();
    const addPageButton = ({pageNumber, activeClass}) => {
        return (
            <button
                className={`btn page-btn ${activeClass ? "active" : ""}`}
                onClick={() => handlePageChange(pageNumber)}
            >
                {pageNumber}
            </button>
        );
    };

    const renderPageButtons = () => {
        const pageButtons = [];

        // First page
        pageButtons.push(
            <React.Fragment key={`page-1`}>
                {addPageButton({pageNumber: 1, activeClass: safeCurrentPage === 1})}
            </React.Fragment>
        );

        if (safeCurrentPage > 3) {
            pageButtons.push(
                <span className="page-btn dots" key="dots-1">
          ....
        </span>
            );
        }

        if (safeCurrentPage !== 1 && safeCurrentPage !== 2) {
            pageButtons.push(
                <React.Fragment key={`page-${safeCurrentPage - 1}`}>
                    {addPageButton({
                        pageNumber: safeCurrentPage - 1,
                        activeClass: false,
                    })}
                </React.Fragment>
            );
        }

        if (
            safeCurrentPage !== 1 &&
            safeCurrentPage !== safeNumOfPages &&
            safeCurrentPage !== 0
        ) {
            pageButtons.push(
                <React.Fragment key={`page-${safeCurrentPage}`}>
                    {addPageButton({
                        pageNumber: safeCurrentPage,
                        activeClass: true,
                    })}
                </React.Fragment>
            );
        }

        if (
            safeCurrentPage !== safeNumOfPages &&
            safeCurrentPage !== safeNumOfPages - 1
        ) {
            pageButtons.push(
                <React.Fragment key={`page-${safeCurrentPage + 1}`}>
                    {addPageButton({
                        pageNumber: safeCurrentPage + 1,
                        activeClass: false,
                    })}
                </React.Fragment>
            );
        }

        if (safeCurrentPage < safeNumOfPages - 2) {
            pageButtons.push(
                <span className="page-btn dots" key="dots+1">
          ....
        </span>
            );
        }

        // Last page
        pageButtons.push(
            <React.Fragment key={`page-${safeNumOfPages}`}>
                {addPageButton({
                    pageNumber: safeNumOfPages,
                    activeClass: safeCurrentPage === safeNumOfPages,
                })}
            </React.Fragment>
        );

        return pageButtons;
    };

    return (
        <>
            <button
                className="prev-btn"
                onClick={() => {
                    let prevPage = safeCurrentPage - 1;
                    if (prevPage < 1) prevPage = safeNumOfPages;
                    handlePageChange(prevPage);
                }}
            >
                <HiChevronDoubleLeft/>
                prev
            </button>
            <div className="btn-container">{renderPageButtons()}</div>
            <button
                className="btn next-btn"
                onClick={() => {
                    let nextPage = safeCurrentPage + 1;
                    if (nextPage > safeNumOfPages) nextPage = 1;
                    handlePageChange(nextPage);
                }}
            >
                next
                <HiChevronDoubleRight/>
            </button>
        </>
    );
};

export default PageBtnContainerComponent;
