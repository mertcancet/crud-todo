import React from 'react';

function Pagination({ totalTodos, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / 10); i++) {
    pageNumbers.push(i);
  }

  const prevHandler = (currentPage) => {
    if (currentPage !== 1) {
      paginate(currentPage - 1);
    }
  };
  const nextHandler = (currentPage) => {
    if (currentPage !== pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };
  return (
    <div className='flex flex-jc-c flex-ai-c'>
      <button
        className='pagination btn-primary'
        onClick={() => prevHandler(currentPage)}
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={'pagination  ' + (number === currentPage && 'btn-primary')}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}

      <button
        className='pagination btn-primary'
        onClick={() => nextHandler(currentPage)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
