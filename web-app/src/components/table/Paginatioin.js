import DoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import DoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import { ArrowButton, PageButton, PageSpan } from "./tableStyle";
import { useEffect } from "react";
import { usePaginationPages } from "./usePagination";

function Pagination({ gotoPage, length, pageSize, setPageSize }) {
  const { canGo, currentPage, pages, goTo, goNext, goPrev, totalPages } =
    usePaginationPages({
      gotoPage,
      length,
      pageSize,
    });

  useEffect(() => {
    setPageSize(Number(pageSize));
  }, [pageSize, setPageSize]);

  return (
    <PageSpan>
      <ArrowButton onClick={() => goTo(1)} disabled={!canGo.previous}>
        <DoubleArrowLeft />
      </ArrowButton>
      <ArrowButton onClick={goPrev} disabled={!canGo.previous}>
        <ArrowLeft />
      </ArrowButton>
      {pages.map((page, i) => (
        <PageButton
          className={currentPage === page ? "active" : null}
          onClick={() => goTo(page)}
          key={i}
        >
          {page}
        </PageButton>
      ))}
      <ArrowButton onClick={goNext} disabled={!canGo.next}>
        <ArrowRight />
      </ArrowButton>
      <ArrowButton onClick={() => goTo(totalPages)} disabled={!canGo.next}>
        <DoubleArrowRight />
      </ArrowButton>
    </PageSpan>
  );
}

export default Pagination;
