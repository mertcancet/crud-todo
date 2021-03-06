import React from 'react';
import ReactDom from 'react-dom';

function Modal({ open, onClose, todo }) {
  if (!open) return null;

  console.log(todo.completed);
  return ReactDom.createPortal(
    <>
      <div className='overlay' />
      <div className='modal'>
        <p>{todo.id}</p>
        <button onClick={onClose}>Close Modal</button>
        <input placeholder={todo.title}></input>
        <input type='checkbox' checked={todo.completed} />
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
