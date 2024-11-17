import { ReactNode, createContext, useContext, useState } from 'react';
import { createContainer } from 'react-tracked';

const useValue = () => useState({ count: 0, text: 'hello ' });

export const { Provider, useTracked } = createContainer(useValue);

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
