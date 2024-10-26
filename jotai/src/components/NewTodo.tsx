import { useSetAtom } from 'jotai';
import React, { useState } from 'react';
import { todosAtom } from '../atoms/todo';

function NewTodo() {
  const setTodos = useSetAtom(todosAtom);
  const [text, setText] = useState('');
  const onClick = () => {
    setTodos((prev) => [
      ...prev,
      { id: String(Math.random() * 100), title: text, done: false },
    ]);
    setText('');
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onClick} disabled={!text}>
        Add
      </button>
    </div>
  );
}

export default NewTodo;
