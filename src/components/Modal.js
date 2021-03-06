import React, { useState } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
function Modal({ open, onClose, todo, fetchTodos }) {
  const [titleUpdate, setTitleUpdate] = useState('');
  const [status, setStatus] = useState(todo.completed);

  if (!open) return null;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        { title: titleUpdate, completed: status }
      );
      onClose();
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className='overlay' />
      <div className='modal'>
        <h2>EDIT TODOS</h2>
        <form className='modal-form' onSubmit={(e) => submitHandler(e)}>
          <span>ID:{todo.id}</span>
          <br />
          <span>Todo Title</span>
          <input
            placeholder={todo.title}
            onChange={(e) => setTitleUpdate(e.target.value)}
          />
          <br />
          <span>Status</span>
          <input
            type='checkbox'
            defaultChecked={todo.completed}
            onChange={() => setStatus(!status)}
          />
          <br />
          <hr />
          <input type='submit' value='Submit' className='btn btn-primary' />
          <button className='btn btn-danger' onClick={onClose}>
            Kapat
          </button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
