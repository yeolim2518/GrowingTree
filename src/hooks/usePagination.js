import { useState, useEffect } from 'react';

const usePagination = ({ page = 1, total = 0, perPage = 10, maxPagingCount = 5 }) => {
  const [paging, setPaging] = useState([]);
  const last = Math.max(Math.ceil(total / perPage), 1);
  const start = Math.floor((page - 1) / maxPagingCount) * maxPagingCount + 1;
  const end = Math.max(Math.min(start + (maxPagingCount - 1), last), 1);

  useEffect(() => {
    const list = [];

    for (let i = start; i <= end; i += 1) {
      list.push(i);
    }

    setPaging(list);
  }, [page, start, end]);

  return {
    start,
    end,
    last,
    page,
    paging,
  };
};

export default usePagination;
