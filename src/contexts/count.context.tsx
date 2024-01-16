import { useState, ReactNode } from "react";
import { createContext, useContext } from "react";

const countContext = createContext({});
export const useCount = () => useContext(countContext);

type countProviderProps = {
  children: ReactNode;
};

export default function CountProvider({ children }: countProviderProps) {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={{ count, setCount }}>
      {children}
    </countContext.Provider>
  );
}
