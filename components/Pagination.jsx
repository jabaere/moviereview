const Pagination = ({ currentPage, setCurrentPage, data }) => {
  return (
    <div className="flex justify-center w-[80vw] mx-auto my-0">
      <div className="mx-auto my-0 flex items-baseline gap-10">
        {data && (
          <>
            <button
              type="button"
              className="btn w-[15.5rem] h-[4.4rem] bg-[primary-brown] mb-8"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            >
              &#8249; Previous
            </button>
            <p>{data.page + "/" + Math.round(data.total_results / 20)}</p>
            <button
              type="button"
              className="btn w-[15.5rem] h-[4.4rem] mb-8"
              onClick={() => (
                setCurrentPage(
                  currentPage < Math.round(data.total_results / 20) &&
                    currentPage + 1
                ),
                localStorage.setItem("currentPage", currentPage + 1)
              )}
            >
              Next &#8250;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
