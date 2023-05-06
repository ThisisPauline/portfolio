import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import ButtonOut from "@/components/ButtonOut";
import Footer from "@/components/Footer";
import styles from "../styles/menu.module.scss";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="pauline kraus web developer contact, pauline kraus dev contact, pauline kraus frontend"
        ></meta>
        <meta
          name="description"
          content="Hi, I'm Pauline, a frontend developer with a passion for pixel perfect designs. Check my work out! and contact me! "
        ></meta>
        <meta
          property="og:title"
          content="Pauline kraus | Frontend developer | Contact"
        />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://i.imgur.com/yCR2tJD.jpg" />
        <meta
          property="og:description"
          content="Hi, I'm Pauline, a frontend dev with a passion for pixel-perfect designs. Check out my work and contact me!"
        />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="flex mt-[150px] flex-col items-start justify-start   desktop:mr-[60px] desktop:ml-[180px] mr-[26px] ml-[26px]">
          <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
            <h1
              className={`font-bold z-10 desktop:-mb-7 -mb-3 ${styles["h1"]}`}
            >
              Contact
            </h1>
            <p className={`font-[100]  ${styles["number"]}`}>05</p>
          </div>
          <div className="flex desktop:flex-row flex-col desktop:items-end justify-around desktop:justify-between w-full pb-4 border-b-2 border-black h-[140px]">
            <h2 className={`font-medium  ${styles["sub"]}`}>Mail</h2>
            <Link href="mailto:hello@paulinekraus.com">
              <p
                className={`font-[100] desktop:w-[460px] ${styles["paragraphe"]}`}
              >
                hello@paulinekraus.com
              </p>
            </Link>
          </div>
          <div className="flex desktop:flex-row flex-col gap-5 desktop:gap-0 desktop:items-center justify-between w-full mt-[5%]  ">
            <h2 className={`font-medium  flex-1 ${styles["sub"]}`}>
              Social media
            </h2>
            <div className="flex flex-col desktop:gap-[30px] desktop:w-[460px]">
              <Link target="_blank" href="https://github.com/ThisisPauline">
                <ButtonOut label="GitHub" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/pauline-kraus/"
              >
                <ButtonOut label="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
