import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import ButtonBlack from "@/components/ButtonInner";
import Link from "next/link";
import profilePicture from "../assets/profilePicture.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-start justify-center min-h-screen mt-[100px] mr-[60px] ml-[60px]">
        <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
          <h1 className="text-[80px] font-bold z-10 -mb-7">About</h1>
          <p className="text-[20px] ">03</p>
        </div>
        <div className="flex mt-[5%]">
          <p className="font-light text-3xl leading-9 flex-1 mr-[2%]">
            Born in Paris, I’ve lived in the south of Spain for the past four
            years and am now looking to settle in Berlin. Adapting to living in
            a foreign country gave me the skills to push myself outside of my
            comfort zone. After pursuing my career in Publishing for five years,
            I decided to embrace change again by retraining as a Full Stack Web
            Developer. Now, I’m looking for a junior position as a Frontend
            Developer as my passion lies in pixel perfect designs.{" "}
          </p>
          <Image src={profilePicture} alt="Pauline Kraus" />
        </div>
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1Cs35SU6-t5wk9ONO05Gsa5H9-cuvyFT2/view?usp=share_link"
        >
          <p className="underline font-bold text-3xl">Download my cv</p>
        </Link>
      </div>
    </>
  );
}
