import Head from "next/head";

export interface MetaPropTypes {
  title: string;
  keywords: string;
  description: string;
  ogTitle: string;
  ogType: string;
  ogUrl: string;
  ogImage: string;
}

export default function Meta(props: MetaPropTypes) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={props.keywords}></meta>
      <meta name="description" content={props.description}></meta>
      <meta property="og:title" content={props.ogTitle} />
      <meta property="og:type" content={props.ogType} />
      <meta property="og:url" content={props.ogUrl} />
      <meta property="og:image" content={props.ogImage} />
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{props.title}</title>
    </Head>
  );
}
Meta.defaultProps = {
  title: "Pauline kraus | Frontend developer",
  keywords:
    "Pauline Kraus frontend, frontend ui developer, pauline kraus frontend developer",
  description:
    "Hi, I'm Pauline, a frontend developer with a passion for pixel perfect designs. Check my work out! ",
  ogTitle: "Pauline | Frontend developer",
};
