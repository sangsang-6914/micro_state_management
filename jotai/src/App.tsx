import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <>
      <CounterProvider>
        <Counter1 />
        <Counter2 />
      </CounterProvider>
      <Counter3 />
      <Counter4 />
    </>
  );
}

export default App;
