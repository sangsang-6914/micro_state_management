import { atom, useSetAtom } from 'jotai';
import React, { useState } from 'react';
import { Todo2, todoAtomsAtom } from '../atoms/todo2';

function NewTodo2() {
  const setTodoAtoms = useSetAtom(todoAtomsAtom);
  const [text, setText] = useState('');
  const onClick = () => {
    setTodoAtoms((prev) => [
      ...prev,
      atom<Todo2>({ title: text, done: false }),
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

export default NewTodo2;
