import { useState } from "react";

const usePagination = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [skipCount, setSkipCount] = useState<number>(0);
  const [maxResultCount, setMaxResultCount] = useState<number>(10);

  const refreshPagination = () => {
    setMaxResultCount(0);
    setSkipCount(0);
    setMaxResultCount(10);
  };

  const nextPagination = (count: number) => {
    setSkipCount((prev) => prev + 10);
    setTotalCount(count);
  };

  return {
    maxResultCount,
    setMaxResultCount,
    skipCount,
    setSkipCount,
    totalCount,
    setTotalCount,
    refreshPagination,
    nextPagination,
  };
};

export default usePagination;
