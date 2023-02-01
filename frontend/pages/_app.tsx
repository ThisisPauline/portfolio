import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatedCursor
        color="12, 38, 205"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "1px solid #0C26CD",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
