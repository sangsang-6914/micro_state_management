import React from 'react';
import { useSnapshot } from 'valtio';
import { state } from '../valtio/count';

function Counter1() {
  const snap = useSnapshot(state);
  const inc = () => ++state.count1;
  return (
    <div>
      {snap.count1} <button onClick={inc}>+1</button>
    </div>
  );
}

export default Counter1;
