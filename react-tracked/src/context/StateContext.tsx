import { ReactNode, createContext, useContext, useState } from 'react';

const useValue = () => useState({ count: 0, text: 'hello ' });

const StateContext = createContext<ReturnType<typeof useValue> | null>(null);

export const StateProvider = ({ children }: { children: ReactNode }) => (
  <StateContext.Provider value={useValue()}>{children}</StateContext.Provider>
);

export const useStateContext = () => {
  const stateValue = useContext(StateContext);
  if (stateValue === null) {
    throw new Error('not find provider');
  }

  return stateValue;
};
