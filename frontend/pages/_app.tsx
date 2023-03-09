import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from "react";
import Loader from "../components/loader";

export default function App({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
      setLoading(loading);
    }, 1500);
  }, [loading]);

  return (
    <>
      <title>Pauline | Frontend developer</title>
      {!domLoaded ? (
        ""
      ) : (
        <AnimatedCursor
          color="43,64,208"
          innerSize={10}
          outerSize={50}
          innerScale={1}
          outerScale={1.9}
          outerAlpha={0}
          outerStyle={{
            border: "2px solid #2b40d0",
          }}
          hasBlendMode={true}
        />
      )}

      {!domLoaded ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}
