import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import ButtonOut from "@/components/ButtonOut";
import Footer from "@/components/Footer";
import styles from "../styles/menu.module.scss";
import Meta from "@/components/Meta";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Meta
        keywords="pauline kraus web developer contact, pauline kraus dev contact, pauline kraus frontend"
        description="Hi, I'm Pauline, a frontend developer with a passion for pixel perfect designs. Check my work out! "
        ogDescription="Hi, I'm Pauline, a frontend developer with a passion for pixel perfect designs. Check my work out! "
        ogTitle="Pauline kraus | Frontend developer | Contact"
        ogType=""
        ogUrl=""
        ogImage="https://i.imgur.com/yCR2tJD.jpg"
        title="Pauline kraus | Frontend developer | Contact"
      />
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
