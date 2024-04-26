import "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pages = [];
  const maxPages = 4;

  let startPage = 1;
  let endPage = totalPages;
  
  if (totalPages > maxPages) {
    const half = Math.floor(maxPages / 2);
    if (currentPage <= half) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage >= totalPages - half) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - half;
      endPage = currentPage + half - 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <li key={i} className={i === currentPage ? "active" : ""}>
        <a href="javascript:void(0)">{i}</a>
      </li>
    );
  }

  const showStartEllipsis = startPage > 1;
  const showEndEllipsis = endPage < totalPages;

  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="pagination">
          <li className="disabled">
            <a href="javascript:void(0)">&laquo;</a>
          </li>
          {showStartEllipsis && (
            <li key="startEllipsis">
              <a href="javascript:void(0)">...</a>
            </li>
          )}
          {pages}
          {showEndEllipsis && (
            <li key="endEllipsis">
              <a href="javascript:void(0)">...</a>
              <a href="javascript:void(0)">{totalPages}</a>
            </li>
          )}
          <li>
            <a href="javascript:void(0)">&raquo;</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
