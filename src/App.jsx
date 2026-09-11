import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'


function App() {
   const [todolist, setTodolist] = useState([]);
   const [x, setX] = useState('');

  return (
    <>
      <h1>TO DO APP</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        setTodolist([...todolist, x])
        setX('')
      }}>
        <label htmlFor="task">Input Your Tasks</label><br></br>
        <input id="task" name='task' type='task' value={x} onChange={e => setX(e.target.value)}></input>
        <button type='submit'>ADD</button>
      </form>

      <p>TO DO LIST</p>

      <ul className="todo-list">
        {todolist.map((tolist, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{index + 1}. {tolist}</span>
          </li>
        ))}
      </ul>



    </>
  )
}

export default App
