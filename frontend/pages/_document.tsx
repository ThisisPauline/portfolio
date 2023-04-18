import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="https://i.imgur.com/yCR2tJD.jpg" />
        <meta property="og:title" content="Pauline | Frontend developer" />
        <meta
          property="og:description"
          content="Hi, I'm Pauline, a frontend developer with a passion for pixel perfect designs. Check my work out! "
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
