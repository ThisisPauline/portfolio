import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from "react";
import { WorkContext, initialWorkState } from "../context/WorkContext";

export default function App({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);
  const [workStatus, setWorkStatus] = useState(initialWorkState);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <AnimatedCursor
          color="12, 38, 205"
          innerSize={10}
          outerSize={40}
          innerScale={1}
          outerScale={1.9}
          outerAlpha={0}
          outerStyle={{
            border: "2px solid #0C26CD",
            mixBlendMode: "exclusion",
          }}
          hasBlendMode={true}
        />
      )}
      <WorkContext.Provider value={{ workStatus, setWorkStatus }}>
        <Component {...pageProps} />
      </WorkContext.Provider>
    </>
  );
}
