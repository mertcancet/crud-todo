import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingTodos, setLoadingTodos] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const fetchTodos = async () => {
    setLoadingTodos(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setTodos(res.data);
    setLoadingTodos(false);
    console.log('1');
  };
  const fetchUsers = async () => {
    setLoadingUsers(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(res.data);
    setLoadingUsers(false);
  };
  useEffect(() => {
    fetchTodos();
    fetchUsers();
  }, []);

  //Pagination
  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentTodos = todos.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <div className='flex flex-jc-c flex-ai-c'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <Todos
              todos={currentTodos}
              loadingTodos={loadingTodos}
              loadingUsers={loadingUsers}
              users={users}
              fetchTodos={fetchTodos}
            />
          </tbody>
        </table>
      </div>
      <Pagination
        totalTodos={todos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
