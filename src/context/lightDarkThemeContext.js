// src/context/state.js
import { createContext, useContext, useState } from "react";

const lightDarkThemeContext = createContext();

export function LightDarkWrapper({ children }) {
  let [theme, setTheme] = useState("light");

  return (
    <lightDarkThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </lightDarkThemeContext.Provider>
  );
}

export function useLightDarkThemeContext() {
  return useContext(lightDarkThemeContext);
}
