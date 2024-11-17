import { useTracked } from '../context/StateContext';

function Counter() {
  const [state, setState] = useTracked();
  console.log('Counter1 Rerender');
  const inc = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <div>
      {state.count}
      <button onClick={inc}>+</button>
    </div>
  );
}

export default Counter;
