import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

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
          color="246, 142, 95"
          innerSize={10}
          outerSize={40}
          innerScale={1}
          outerScale={1.9}
          outerAlpha={0}
          outerStyle={{
            border: "2px solid #F68E5F",
          }}
          hasBlendMode={true}
        />
      )}
      {!domLoaded ? (
        <Loader />
      ) : (
        <div>
          <Component {...pageProps} /> <Analytics />
        </div>
      )}
    </>
  );
}
