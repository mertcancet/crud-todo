import React from 'react';

import axios from 'axios';
import Edit from './Edit';

function Todos({ todos, loadingTodos, loadingUsers, users, fetchTodos }) {
  if (loadingTodos && loadingUsers) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  }

  const deleteTodoHandler = async (id) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

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
                  <Edit todo={todo} fetchTodos={fetchTodos} />
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
