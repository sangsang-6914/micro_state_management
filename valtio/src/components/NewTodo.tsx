import React, { useState } from 'react';
import { createTodo } from '../valtio/todo';

function NewTodo() {
  const [text, setText] = useState('');
  const onClick = () => {
    createTodo(text);
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
