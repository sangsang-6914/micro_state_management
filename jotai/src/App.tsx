import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <CounterProvider>
      <Counter1 />
      <Counter2 />
    </CounterProvider>
  );
}

export default App;
