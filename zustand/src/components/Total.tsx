import React from 'react';
import useCountStore from '../hooks/useStore';

function Total() {
  const total = useCountStore((state) => state.count1 + state.count2);
  console.log('Total rerendering!');
  return <div>{total}</div>;
}

export default Total;
