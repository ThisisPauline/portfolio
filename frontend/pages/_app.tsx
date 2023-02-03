import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { BounceLoader } from "react-spinners";

export default function App({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
      setLoading(loading);
    }, 1500);
  }, [loading]);

  const override: CSSProperties = {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    marginTop: "300px",
    marginLeft: "40%",
    borderColor: "#0C26CD",
    width: "100vw",
    height: "100vh",
    zIndex: "500",
    overflowY: "hidden",
  };

  let [color, setColor] = useState("#0C26CD");
  return (
    <>
      {!domLoaded ? (
        <BounceLoader
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
