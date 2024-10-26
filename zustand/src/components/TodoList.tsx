import React from 'react';
import useTodoStore from '../hooks/useTodoStore';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
