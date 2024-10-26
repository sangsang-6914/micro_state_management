import { useAtom } from 'jotai';
import React, { useCallback } from 'react';
import { todosAtom } from '../atoms/todo';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useAtom(todosAtom);

  const removeTodo = useCallback(
    (id: string) => setTodos((prev) => prev.filter((todo) => todo.id !== id)),
    [setTodos]
  );

  const toggleTodo = useCallback(
    (id: string) =>
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      ),
    [setTodos]
  );
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
