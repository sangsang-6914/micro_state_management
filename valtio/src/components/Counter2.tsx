import React from 'react';
import { useSnapshot } from 'valtio';
import { state } from '../valtio/count';

function Counter2() {
  const snap = useSnapshot(state);
  const inc = () => {
    ++state.count2;
  };
  return (
    <div>
      {snap.count2}
      <button onClick={inc}>+1</button>
    </div>
  );
}

export default Counter2;
