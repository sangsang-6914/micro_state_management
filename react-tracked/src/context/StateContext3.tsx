import { useSelector } from 'react-redux';
import { createTrackedSelector } from 'react-tracked';
import { createStore } from 'redux';

type State = { count: number; text: string };
type Action = { type: 'INC' } | { type: 'SET_TEXT'; text: string };

const initialState: State = { count: 0, text: 'hello' };
const reducer = (state = initialState, action: Action) => {
  if (action.type === 'INC') {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === 'SET_TEXT') {
    return { ...state, text: action.text };
  }
  return state;
};

export const store = createStore(reducer);

export const useTrackedState = createTrackedSelector<State>(useSelector);
