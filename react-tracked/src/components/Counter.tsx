import React from 'react';
import { useStateContext } from '../context/StateContext';

function Counter() {
  const [state, setState] = useStateContext();
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
