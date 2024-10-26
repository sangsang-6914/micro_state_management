import React, { memo } from 'react';
import { TodoAtom } from '../atoms/todo2';
import { useAtom } from 'jotai';

interface Props {
  todoAtom: TodoAtom;
  remove: (todoAtom: TodoAtom) => void;
}

function TodoItem2({ todoAtom, remove }: Props) {
  const [todo, setTodo] = useAtom(todoAtom);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => setTodo((prev) => ({ ...prev, done: !prev.done }))}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => remove(todoAtom)}>Delete</button>
    </div>
  );
}

export default memo(TodoItem2);
