import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'


function App() {
  const [todolist, setTodolist] = useState([]);
  const [x, setX] = useState('');
  let [id, setID] = useState(1);

  return (
    <>
      <h1>TO DO APP</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        setID(id + 1)
        setTodolist([...todolist, { id: id, task: x }]);
        setX('');
      }}>
        <label htmlFor="task">Input Your Tasks</label><br></br>
        <input id="task" name='task' type='task' value={x} onChange={e => setX(e.target.value)}></input>
        <button type='submit'>ADD</button>
      </form>

      <p>TO DO LIST ({todolist.length} tasks)</p>

      {todolist.length === 0 ? (
        <p className="empty">No tasks yet — add your first one above!</p>
      ) : (
        <ul className="todo-list">
          {todolist.map(tolist => (
            <li key={tolist.id} className="todo-item">
              <span className="todo-text">{tolist.task}</span>
              <button id={tolist.id} className="delete-btn" onClick={() => {
                setTodolist(todolist.filter((item) => item.id !== tolist.id));
              }}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {todolist.length > 0 && (
        <button onClick={() => setTodolist([])}>Clear All</button>
      )}



    </>
  )
}

export default App
