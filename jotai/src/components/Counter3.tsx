import { useAtom } from 'jotai';
import React from 'react';
import { countAtom } from '../atoms/count';

function Counter3() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

export default Counter3;
