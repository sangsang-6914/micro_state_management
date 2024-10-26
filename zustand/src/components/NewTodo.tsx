import React, { ReactHTMLElement, useState } from 'react';
import useTodoStore from '../hooks/useTodoStore';

function NewTodo() {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [text, setText] = useState('');
  const onClick = () => {
    addTodo(text);
    setText('');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) setText(e.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClick(); // Enter 키가 눌렸을 때 onClick 함수 실행
    }
  };
  return (
    <div>
      <input value={text} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={onClick} disabled={!text}>
        Add
      </button>
    </div>
  );
}

export default NewTodo;
