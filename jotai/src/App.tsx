import { count1Atom, count2Atom } from './atoms/count';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';
import NewTodo from './components/NewTodo';
import NewTodo2 from './components/NewTodo2';
import Person from './components/Person';
import TodoList from './components/TodoList';
import TodoList2 from './components/TodoList2';
import Total from './components/Total';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <>
      {/* <CounterProvider>
        <Counter1 />
        <Counter2 />
      </CounterProvider>
      <Counter3 countAtom={count1Atom} />
      <Counter4 countAtom={count2Atom} />
      <Total />
      <Person /> */}
      <TodoList2 />
      <NewTodo2 />
    </>
  );
}

export default App;
