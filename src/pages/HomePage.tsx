import { useState } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ClearAllButton } from '../components/ClearAllButton'
import { Todo } from '../components/TodoItem'

export function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [nextId, setNextId] = useState(1)

  const handleAddTask = (task: string) => {
    setTodos([...todos, { id: nextId, task }])
    setNextId(nextId + 1)
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleClearAll = () => {
    setTodos([])
  }

  return (
    <>
      <h1>TO DO APP</h1>
      <TodoForm onAddTask={handleAddTask} />
      <p>TO DO LIST ({todos.length} tasks)</p>
      <TodoList todos={todos} onDelete={handleDelete} />
      {todos.length > 0 && <ClearAllButton onClear={handleClearAll} />}
    </>
  )
}
