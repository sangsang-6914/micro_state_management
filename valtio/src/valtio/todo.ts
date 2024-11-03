import { proxy } from 'valtio';

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export const state = proxy<{ todos: Todo[] }>({
  todos: [],
});

export const createTodo = (title: string) => {
  state.todos.push({
    id: String(Math.random() * 100),
    title,
    done: false,
  });
};

export const removeTodo = (id: string) => {
  const index = state.todos.findIndex((item) => item.id === id);
  state.todos.splice(index, 1);
};

export const toggleTodo = (id: string) => {
  const index = state.todos.findIndex((item) => item.id === id);
  state.todos[index].done = !state.todos[index].done;
};
