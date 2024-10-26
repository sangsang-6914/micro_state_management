import { useCounterContext } from '../context/CounterContext';

function Counter2() {
  const [count, setCount] = useCounterContext();
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

export default Counter2;
