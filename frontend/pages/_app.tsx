import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function App({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("Retardée d'une seconde.");
    }, 3000);
    setDomLoaded(true);
  }, []);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#0C26CD",
    height: "100vh",
  };

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0C26CD");
  return (
    <>
      {!domLoaded ? (
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
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

      <Component {...pageProps} />
    </>
  );
}
