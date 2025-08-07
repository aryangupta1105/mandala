"use client";
import * as React from "react";

function PaginationNumbers({
  currentPage = 1,
  onPageClick
}) {
  const pages = [1, 2, 3, "...", 9];

  return (
    <nav
      className="flex gap-3 items-center self-stretch px-5 py-2 my-auto text-xl font-semibold text-center text-black whitespace-nowrap rounded-3xl"
      style={{ backgroundColor: 'rgba(163, 102, 0, 0.08)' }}
      aria-label="Pagination"
    >
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {typeof page === "number" ? (
            <button
              className="self-stretch my-auto text-black hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50 rounded"
              onClick={() => onPageClick && onPageClick(page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          ) : (
            <span className="self-stretch my-auto" aria-hidden="true">
              {page}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default PaginationNumbers;
