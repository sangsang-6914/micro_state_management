import { atom } from 'jotai';

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export const todosAtom = atom<Todo[]>([]);
