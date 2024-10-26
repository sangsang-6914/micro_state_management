import { PrimitiveAtom, useAtom } from 'jotai';
import React from 'react';

interface Props {
  countAtom: PrimitiveAtom<number>;
}

function Counter4({ countAtom }: Props) {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

export default Counter4;
