import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";
import {
  LightDarkWrapper,
  useLightDarkThemeContext,
} from "../context/lightDarkThemeContext";
import { StackFilterWrapper } from "../context/stackFilterContext";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <StackFilterWrapper>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </StackFilterWrapper>
  );
}

export default MyApp;
