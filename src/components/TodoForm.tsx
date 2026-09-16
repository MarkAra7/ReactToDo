import { useState } from 'react'

interface TodoFormProps {
  onAddTask: (task: string) => void
}

export function TodoForm({ onAddTask }: TodoFormProps) {
  const [task, setTask] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(task)
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Input Your Tasks</label><br />
      <input
        id="task"
        name="task"
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  )
}
