import React, { memo } from 'react';
import { Todo } from '../atoms/todo';

interface Props {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

function TodoItem({ todo, removeTodo, toggleTodo }: Props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default memo(TodoItem);
