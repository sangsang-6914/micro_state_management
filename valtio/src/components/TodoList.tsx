import React from 'react';
import { useSnapshot } from 'valtio';
import { state } from '../valtio/todo';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useSnapshot(state);
  const todoIds = todos.map((todo) => todo.id);
  return (
    <div>
      {todoIds.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
}

export default TodoList;
