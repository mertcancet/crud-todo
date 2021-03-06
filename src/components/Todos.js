import React, { useState } from 'react';
import Modal from './Modal';

function Todos({ todos, loadingTodos, loadingUsers, users }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loadingTodos && loadingUsers) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  }
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
                  <button
                    className='btn btn-primary'
                    onClick={() => setIsModalOpen(true)}
                  >
                    Edit
                  </button>

                  <Modal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  >
                    Fancy Modal
                  </Modal>

                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            )
        )
      )}
    </>
  );
}

export default Todos;
