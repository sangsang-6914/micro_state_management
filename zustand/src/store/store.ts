import { create } from 'zustand';

type State = {
  count: number;
  text: string;
};

interface CounterState {
  count: number;
  text: string;
  setState: (state: State) => void;
  inc: () => void;
}

const useStore = create<CounterState>((set) => ({
  count: 0,
  text: 'hello',
  setState: (state: State) => set(state),
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

useStore.subscribe(
  (newVal, prevVal) => console.log(`${prevVal.count} => ${newVal.count}`) // count 값만 구독
);

export default useStore;
