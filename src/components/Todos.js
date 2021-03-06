import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import Edit from './Edit';

function Todos({ todos, loadingTodos, loadingUsers, users, fetchTodos }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loadingTodos && loadingUsers) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  }
  const closeModal = () => {
    setIsModalOpen(false);
    console.log('tık');
  };
  const deleteTodoHandler = async (id) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      console.log(res);
      fetchTodos();
    } catch (error) {
      console.log('error');
    }
  };
  return (
    <>
      {todos.map((todo) =>
        users.map(
          (user) =>
            todo.userId === user.id && (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{user.name}</td>
                <td>{todo.completed ? <>Done</> : <>In Progress</>}</td>
                <td>
                  <Edit todo={todo} />
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteTodoHandler(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
        )
      )}
    </>
  );
}

export default Todos;
