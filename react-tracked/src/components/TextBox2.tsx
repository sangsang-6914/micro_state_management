import React from 'react';
import { useTracked } from '../context/StateContext2';

function TextBox2() {
  const [state, dispatch] = useTracked();
  const setText = (text: string) => {
    dispatch({ type: 'SET_TEXT', text });
  };
  return (
    <input
      type="text"
      value={state.text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default TextBox2;
