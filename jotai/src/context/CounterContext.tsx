import { createContext, ReactNode, useContext, useState } from 'react';

type MyContextType = [number, React.Dispatch<React.SetStateAction<number>>];

const CounterContext = createContext<MyContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('no find context!');
  }

  return context;
};
