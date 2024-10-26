import React from 'react';
import useCountStore from '../hooks/useStore';

function Counter2() {
  console.log('Counter2 rerendering!');
  const count2 = useCountStore((state) => state.count2);
  const inc2 = () => {
    useCountStore.setState((prev) => ({ count2: prev.count2 + 1 }));
  };
  return (
    <>
      <div>{count2}</div>
      <button onClick={inc2}>+1</button>
    </>
  );
}

export default Counter2;
