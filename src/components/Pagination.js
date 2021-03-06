import React from 'react';

function Pagination({ totalTodos, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex flex-jc-c flex-ai-c'>
      <button className='pagination btn-primary'>Prev</button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className='pagination btn-primary'
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}

      <button className='pagination btn-primary'>Next</button>
    </div>
  );
}

export default Pagination;
