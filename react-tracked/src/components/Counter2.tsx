import React from 'react';
import { useTracked } from '../context/StateContext2';

function Counter2() {
  const [state, dispatch] = useTracked();
  const inc = () => {
    dispatch({ type: 'INC' });
  };
  return (
    <div>
      {state.count}
      <button onClick={inc}>+</button>
    </div>
  );
}

export default Counter2;
