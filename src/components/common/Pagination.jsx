import usePagination from '../../hooks/usePagination';

const Pagination = ({
  page, total, perPage, move
}) => {
  const maxPagingCount = 10;
  const { paging, page: currentPage, last } = usePagination({
    page, total, perPage, maxPagingCount
  });

  return (
    <div className="pagination">
      <div>
        <div className="item left-item arrow double" onClick={() => move(1)}>
          <i className="left icon" />
        </div>
        <div className="item left-item arrow" onClick={() => move(Math.max(currentPage - 1, 1))}>
          <i className="left icon" />
        </div>
        {
        !!paging.length && paging.map((value) => (
          <div key={value} className={`item ${value === currentPage ? 'active' : ''}`} onClick={() => move(value)}>{value}</div>
        ))
      }
        <div className="item right-item arrow" onClick={() => move(Math.min(currentPage + 1, last))}>
          <i className="right icon" />
        </div>
        <div className="item right-item arrow double" onClick={() => move(last)}>
          <i className="right icon" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
