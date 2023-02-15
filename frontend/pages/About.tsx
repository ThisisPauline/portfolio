import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import profilePicture from "../assets/profilePicture.png";
import Image from "next/image";
import Footer from "@/components/Footer";
import styles from "../styles/menu.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-start justify-center min-h-screen mt-[150px] desktop:mr-[60px] desktop:ml-[180px] mr-[26px] ml-[26px]">
        <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
          <h1 className={`font-bold z-10 desktop:-mb-7 -mb-3  ${styles["h1"]}`}>
            About
          </h1>
          <p className={`font-[100] ${styles["number"]}`}>03</p>
        </div>
        <div className="flex flex-col-reverse desktop:flex-row mt-[5%]">
          <p
            className={`mt-[8%] mb-[5%] desktop:mt-0 text-[18px] font-[100] desktop:text-3xl desktop:leading-9 flex-1 mr-[2%] ${styles["paragraphe"]}`}
          >
            Born in Paris, I’ve lived in the sunny south of Spain for the past
            four years. Adapting to life in a foreign country has taught me
            valuable skills in resilience, adaptability, and cross-cultural
            communication. After five years in the publishing industry, I felt
            the urge to pursue a new challenge and decided to retrain as a Full
            Stack Web Developer. I'm now eager to embark on the next phase of my
            career as a Frontend Developer, as my true passion lies in crafting
            visually stunning, pixel-perfect designs.
          </p>
          <div className="flex flex-1 justify-center items-center">
            <Image
              src={profilePicture}
              alt="Pauline Kraus"
              className=" w-[400px] h-[400]"
            />
          </div>
        </div>
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1Cs35SU6-t5wk9ONO05Gsa5H9-cuvyFT2/view?usp=share_link"
        >
          <p
            className={`underline font-bold  mt-5 mb-10 desktop:mt-0 desktop:mb-0  ${styles["paragraphe"]}`}
          >
            Download my cv
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
