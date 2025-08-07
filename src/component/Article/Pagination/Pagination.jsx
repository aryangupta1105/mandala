"use client";
import * as React from "react";
import NavigationButton from "./NavigationButton";
import PaginationNumbers from "./PaginationNumber";


function Pagination({
  currentPage = 1,
  onPageChange,
  onPrevious,
  onNext
}) {
  return (
    <div
      className="flex flex-row justify-center items-center p-0 gap-4 w-[268px] h-10 my-12 mx-auto relative"
    >
      <NavigationButton
        iconSrc="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/78bfbce9f1b7ee360e61ae9ef9be4961ad0a7ff5?placeholderIfAbsent=true"
        opacity="10"
        onClick={onPrevious}
        ariaLabel="Go to previous page"
      />

      <PaginationNumbers
        currentPage={currentPage}
        onPageClick={onPageChange}
      />

      <NavigationButton
        iconSrc="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/88767f30a566ff602fdb71399079a5f1f543f3c1?placeholderIfAbsent=true"
        opacity="50"
        onClick={onNext}
        ariaLabel="Go to next page"
      />
    </div>
  );
}

export default Pagination;
