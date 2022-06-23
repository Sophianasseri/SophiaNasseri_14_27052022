import React from 'react';
const Pagination = ({
  children,
  pageOptions,
  previousPage,
  canPreviousPage,
  pageIndex,
  gotoPage,
  nextPage,
  canNextPage,
}) => {
  const pagesArr = [...new Array(pageOptions.length)];

  return (
    <div className="pagination">
      {children}
      <div className={`${pageOptions < 1 ? 'hide' : ''}`}>
        <button
          className="prevNext-btn "
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <span className="page-numbers">
          {pagesArr.map((num, index) => (
            <button
              key={`page-${index}`}
              className={`page-btn ${
                index + 1 === pageIndex + 1 ? 'active-btn' : ''
              }`}
              value={index + 1}
              onClick={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            >
              {index + 1}
            </button>
          ))}
        </span>
        <button
          className="prevNext-btn"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
