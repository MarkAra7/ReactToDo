import { TodoItem, Todo } from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onDelete: (id: number) => void
}

export function TodoList({ todos, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="empty">No tasks yet — add your first one above!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  )
}
