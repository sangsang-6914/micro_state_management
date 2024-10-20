import React from 'react';
import useCountStore from '../hooks/useStore';

function Counter1() {
  console.log('Counter1 rerendering');
  const count1 = useCountStore((state) => state.count1);
  const inc1 = () => {
    useCountStore.setState((prev) => ({ count1: prev.count1 + 1 }));
  };
  return (
    <>
      <div>{count1}</div>
      <button onClick={inc1}>+1</button>
    </>
  );
}

export default Counter1;
