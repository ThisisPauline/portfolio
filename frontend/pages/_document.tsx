import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <meta
          name="keywords"
          content="pauline kraus web developer contact, pauline kraus dev contact, pauline kraus frontend"
        ></meta>
        <meta
          name="description"
          content="Hi, I'm Pauline, a frontend developer with a passion for pixel perfect designs. Check my work out! "
        ></meta>
        <meta
          property="og:title"
          content="Pauline kraus | Frontend developer"
        />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://i.imgur.com/yCR2tJD.jpg" />
        <meta
          property="og:description"
          content="Hi, I'm Pauline, a frontend dev with a passion for pixel-perfect designs. Check out my work!"
        />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
