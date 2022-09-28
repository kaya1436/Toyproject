import DoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import DoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useMemo } from "react";
import { ArrowButton, PageButton, PageSpan } from "./GridStyle";

export const GridTotalRow = ({ totalRow }) => {
  return (
    <div>
      <span style={{ color: "rgb(137,137,137)", marginRight: "2px" }}>
        Total
      </span>
      <span
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        {totalRow}
      </span>
    </div>
  );
};

export const GridPagination = ({ currentPage, totalPage, gridApi }) => {
  const canGo = useMemo(() => {
    return {
      next: currentPage < totalPage,
      previous: currentPage - 1 > 0,
    };
  }, [currentPage, totalPage]);
  const pages = useMemo(() => {
    const start = Math.floor((currentPage - 1) / 5) * 5;
    const end = start + 5 > totalPage ? totalPage : start + 5;
    return Array.from({ length: end - start }, (_, i) => start + i + 1);
  }, [currentPage, totalPage]);
  return (
    <PageSpan>
      <ArrowButton
        onClick={() => gridApi.api.paginationGoToFirstPage()}
        disabled={!canGo.previous}
      >
        <DoubleArrowLeft />
      </ArrowButton>
      <ArrowButton
        onClick={() => gridApi.api.paginationGoToPreviousPage()}
        disabled={!canGo.previous}
      >
        <ArrowLeft />
      </ArrowButton>
      {pages.map((page, i) => (
        <PageButton
          className={currentPage === page ? "active" : null}
          onClick={() => gridApi.api.paginationGoToPage(page - 1)}
          key={i}
        >
          {page}
        </PageButton>
      ))}
      <ArrowButton
        onClick={() => gridApi.api.paginationGoToNextPage()}
        disabled={!canGo.next}
      >
        <ArrowRight />
      </ArrowButton>
      <ArrowButton
        onClick={() => gridApi.api.paginationGoToLastPage()}
        disabled={!canGo.next}
      >
        <DoubleArrowRight />
      </ArrowButton>
    </PageSpan>
  );
};
