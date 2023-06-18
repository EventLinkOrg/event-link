import { useMemo } from "react";

type PaginationProps = {
  onPrev: () => void;
  onNext: () => void;
  onClick: (key: string) => void;
  totalPages: number;
  page: number;
};

const midPages = (page: number, totalPages: number) => {
  if (totalPages <= 5) return undefined;
  if (page === totalPages) return [1, "...", page - 1, page];
  if (page === totalPages - 1) return [1, "...", page - 1, page, totalPages];
  if (page === totalPages - 2)
    return [1, "...", page - 1, page, totalPages - 1, totalPages];
  if (page === 1) return [1, 2, "...", totalPages];
  if (page === 2) return [1, 2, 3, "...", totalPages];
  if (page === 3) return [1, 2, 3, 4, "...", totalPages];
  return [1, "...", page - 1, page, page + 1, "...", totalPages];
};

const Pagination = ({
  onPrev,
  onNext,
  page,
  totalPages = 0,
  onClick,
}: PaginationProps) => {
  const pageNums = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      return midPages(page, totalPages);
    }
  }, [totalPages, page]);

  return (
    <>
      {totalPages !== 0 && (
        <div className="pagination">
          <button className="btn" onClick={onPrev} disabled={page === 1}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4167C11.4074 14.7417 11.9324 14.7417 12.2574 14.4167C12.5824 14.0917 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z"
                fill="#969696"
              />
            </svg>
          </button>
          {totalPages <= 5 && pageNums && (
            <>
              {pageNums.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => onClick(pageNumber.toString())}
                  className={pageNumber === page ? "btn btn-active" : "btn"}
                >
                  {pageNumber}
                </button>
              ))}
            </>
          )}
          {totalPages > 5 && pageNums && (
            <>
              {pageNums.map((pageNumber) => {
                if (pageNumber === "...") {
                  return (
                    <button disabled className="btn">
                      {pageNumber}
                    </button>
                  );
                } else {
                  return (
                    <button
                      key={pageNumber}
                      className={pageNumber === page ? "btn btn-active" : "btn"}
                      onClick={() => onClick(pageNumber.toString())}
                    >
                      {pageNumber}
                    </button>
                  );
                }
              })}
            </>
          )}
          {/* <button className="btn btn-active">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button> */}
          <button
            className="btn"
            onClick={onNext}
            disabled={page === totalPages}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.74375 5.2448C7.41875 5.5698 7.41875 6.0948 7.74375 6.4198L10.9771 9.65314L7.74375 12.8865C7.41875 13.2115 7.41875 13.7365 7.74375 14.0615C8.06875 14.3865 8.59375 14.3865 8.91875 14.0615L12.7437 10.2365C13.0687 9.91147 13.0687 9.38647 12.7437 9.06147L8.91875 5.23647C8.60208 4.9198 8.06875 4.9198 7.74375 5.2448Z"
                fill="#969696"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export { Pagination };
