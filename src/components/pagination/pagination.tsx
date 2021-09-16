import React from 'react';
import "./pagination.scss"
import ReactPaginate from "react-paginate";

interface Props {
    PageChangeHandler: (page: number) => void,
    pageCount: number
}

const Pagination = ({PageChangeHandler, pageCount}: Props) => {
    return (
        <ReactPaginate
            marginPagesDisplayed={3}
            pageCount={pageCount}
            pageRangeDisplayed={2}
            onPageChange={(e) => PageChangeHandler(e.selected + 1)}
            containerClassName="pagination"
            activeClassName="pagination__activePage"
            activeLinkClassName="pagination__activeLink"
        />
    );
};

export default Pagination;