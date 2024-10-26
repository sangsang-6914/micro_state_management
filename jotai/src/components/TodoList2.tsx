import { useAtom } from 'jotai';
import React, { useCallback } from 'react';
import { TodoAtom, todoAtomsAtom } from '../atoms/todo2';
import TodoItem2 from './TodoItem2';

function TodoList2() {
  const [todoAtoms, setTodoAtoms] = useAtom(todoAtomsAtom);

  const remove = useCallback(
    (todoAtom: TodoAtom) =>
      setTodoAtoms((prev) => prev.filter((todo) => todo !== todoAtom)),
    [setTodoAtoms]
  );

  return (
    <div>
      {todoAtoms.map((todoAtom) => (
        <TodoItem2 key={`${todoAtom}`} todoAtom={todoAtom} remove={remove} />
      ))}
    </div>
  );
}

export default TodoList2;
