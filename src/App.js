function App() {
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
            <tr>
              <td>1</td>
              <td>"Lorem ipsum dolor sit amet, sed do eiusmod tempo</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>In Progress</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"Lorem ipsum dolor sit amet, sed do eiusmod tempo</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>In Progress</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"Lorem ipsum dolor sit amet, sed do eiusmod tempo</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>In Progress</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"Lorem ipsum dolor sit amet, sed do eiusmod tempo</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>In Progress</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"Lorem ipsum dolor sit amet, sed do eiusmod tempo</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td>In Progress</td>
              <td>
                <button className='btn btn-primary'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex flex-jc-c flex-ai-c'>
        <button className='pagination btn-primary'>Prev</button>
        <button className='pagination btn-primary'>1</button>
        <button className='pagination btn-primary'>2</button>
        <button className='pagination btn-primary'>3</button>
        <button className='pagination btn-primary'>4</button>
        <button className='pagination btn-primary'>5</button>
        <button className='pagination btn-primary'>Next</button>
      </div>
    </div>
  );
}

export default App;
