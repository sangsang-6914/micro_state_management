import { useDispatch } from 'react-redux';
import { useTrackedState } from '../context/StateContext3';

function TextBox3() {
  const dispatch = useDispatch();
  console.log('TextBox3 Rendering');
  const { text } = useTrackedState();
  const setText = (text: string) => {
    dispatch({ type: 'SET_TEXT', text });
  };
  return (
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  );
}

export default TextBox3;
