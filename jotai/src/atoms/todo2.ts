import { PrimitiveAtom, atom } from 'jotai';

export type Todo2 = {
  title: string;
  done: boolean;
};

export type TodoAtom = PrimitiveAtom<Todo2>;

export const todoAtomsAtom = atom<TodoAtom[]>([]);
