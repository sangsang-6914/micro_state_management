import React, { memo } from 'react';
import useTodoStore, { Todo } from '../hooks/useTodoStore';

function TodoItem({ todo }: { todo: Todo }) {
  console.log('TodoItem Renrender');
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
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
