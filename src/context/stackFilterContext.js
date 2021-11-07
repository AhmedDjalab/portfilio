// src/context/state.js
import { createContext, useContext, useState } from "react";

const StackFilterContext = createContext();

export function StackFilterWrapper({ children }) {
  const [stackIds, setStackIds] = useState([]);

  return (
    <StackFilterContext.Provider
      value={{
        stackIds,
        setStackIds,
      }}
    >
      {children}
    </StackFilterContext.Provider>
  );
}

export function useStackFilterContext() {
  return useContext(StackFilterContext);
}
