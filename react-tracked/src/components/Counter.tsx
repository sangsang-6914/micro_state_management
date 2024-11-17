import { useTrackedState, useUpdate } from '../context/StateContext';

function Counter() {
  const { count } = useTrackedState();
  const setState = useUpdate();
  console.log('Counter Rerendering');
  const inc = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <div>
      {count}
      <button onClick={inc}>+</button>
    </div>
  );
}

export default Counter;
