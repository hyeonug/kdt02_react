export default function TailPageNation({ currentPage, totalPage, onPageChange }) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 10;  
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let endPage = Math.min(totalPage, startPage + maxPageNumbersToShow - 1);

    // 전체 페이지 끝에 도달하면 시작 페이지를 조정
    if (endPage - startPage + 1 < maxPageNumbersToShow) {
      startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }

    // 1페이지부터 시작하지 않는 경우 시작 부분에 "..."를 추가
    if (startPage > 1) {
      pageNumbers.push(
        <button
          key="prev-ellipsis"
          onClick={() => onPageChange(startPage - 1)}
          className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          ...
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`
            px-4 py-2 mx-1 rounded-md
            ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
            hover:bg-blue-600 hover:text-white transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          `}
        >
          {i}
        </button>
      );
    }

    // totalPage에서 끝나지 않는 경우 끝에 "..."를 추가
    if (endPage < totalPage) {
      pageNumbers.push(
        <button
          key="next-ellipsis"
          onClick={() => onPageChange(endPage + 1)}
          className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          ...
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="mt-5">
      {/* 페이지네이션 컨트롤 */}
      <div className="flex justify-center items-center flex-wrap gap-2">
        {/* 이전 페이지 버튼 */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`
            px-4 py-2 rounded-md bg-gray-300 text-gray-800
            hover:bg-gray-400 transition-colors duration-200
            ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
          `}
        >
          이전
        </button>

        {/* 페이지 번호 버튼들 */}
        <div className="flex flex-wrap justify-center gap-1">
          {renderPageNumbers()}
        </div>

        {/* 다음 페이지 버튼 */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
          className={`
            px-4 py-2 rounded-md bg-gray-300 text-gray-800
            hover:bg-gray-400 transition-colors duration-200
            ${currentPage === totalPage ? 'opacity-50 cursor-not-allowed' : ''}
            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
          `}
        >
          다음
        </button>
      </div>

      <p className="text-center text-gray-600 mt-4 text-sm">
        현재 페이지: {currentPage} / 총 페이지: {totalPage}
      </p>
    </div>
  );
}