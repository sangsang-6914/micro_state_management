import { useDispatch } from 'react-redux';
import { useTrackedState } from '../context/StateContext3';

function Counter3() {
  const dispatch = useDispatch();
  console.log('Counter3 Rendering');
  const { count } = useTrackedState();
  const inc = () => {
    dispatch({ type: 'INC' });
  };
  return (
    <div>
      {count}
      <button onClick={inc}>+</button>
    </div>
  );
}

export default Counter3;
