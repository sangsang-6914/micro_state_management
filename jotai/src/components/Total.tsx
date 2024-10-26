import { useAtom } from 'jotai';
import React from 'react';
import { totalAtom } from '../atoms/count';

function Total() {
  const total = useAtom(totalAtom);
  return <div>Total : {total}</div>;
}

export default Total;
