import { useCallback, useEffect, useMemo, useState } from "react";

export const usePagination = ({ gotoPage, pageSize, pageCount }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const canGo = useMemo(() => {
    return {
      next: currentPage < pageCount,
      previous: currentPage - 1 > 0,
    };
  }, [currentPage, pageCount]);

  const pages = useMemo(() => {
    const start = Math.floor((currentPage - 1) / 5) * 5;
    const end = start + 5 > pageCount ? pageCount : start + 5;
    return Array.from({ length: end - start }, (_, i) => start + i + 1);
  }, [currentPage, pageCount]);

  useEffect(() => {
    gotoPage(currentPage - 1);
  }, [currentPage, gotoPage]);

  useEffect(() => {
    if (pageSize) {
      goTo(1);
    }
  }, [pageSize]);

  const goTo = (pg) => {
    setCurrentPage(pg);
  };

  const goNext = useCallback(() => {
    if (canGo.next) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [canGo]);

  const goPrev = useCallback(() => {
    if (canGo.previous) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [canGo]);

  return {
    canGo,
    currentPage,
    pages,
    goTo,
    goNext,
    goPrev,
    pageCount,
  };
};
