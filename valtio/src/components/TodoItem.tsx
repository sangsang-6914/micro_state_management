import React, { memo } from 'react';
import { removeTodo, state, toggleTodo } from '../valtio/todo';

function TodoItem({ id }: { id: string }) {
  const todoState = state.todos.find((todo) => todo.id === id);
  if (!todoState) throw new Error('invalid todo id');
  const { done, title } = todoState;
  return (
    <div>
      <input type="checkbox" checked={done} onChange={() => toggleTodo(id)} />
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {title}
      </span>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
}

export default memo(TodoItem);
