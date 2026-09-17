export interface Todo {
  id: number
  task: string
}

interface TodoItemProps {
  todo: Todo
  onDelete: (id: number) => void
}

export function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.task}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  )
}
