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
          color="222, 145, 81"
          innerSize={10}
          outerSize={40}
          innerScale={1}
          outerScale={1.9}
          outerAlpha={0}
          outerStyle={{
            border: "2px solid #de9151",
          }}
          hasBlendMode={true}
        />
      )}

      {!domLoaded ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}
