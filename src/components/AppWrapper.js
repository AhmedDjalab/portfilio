import React from "react";
import { useLightDarkThemeContext } from "../context/lightDarkThemeContext";

export function AppWrapper({ pageProps, Component }) {
  let theme = useLightDarkThemeContext();
  console.log("this is data ", theme);
  return (
    <Component {...pageProps}>
      <div className={`${theme}`}> </div>
    </Component>
  );
}
