import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import ButtonBlack from "@/components/ButtonInner";
import Link from "next/link";
import profilePicture from "../assets/profilePicture.png";
import Image from "next/image";
import ButtonOut from "@/components/ButtonOut";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="min-w-screen">
      <Header />
      <div className="flex flex-col items-start justify-center min-h-screen mt-[150px] desktop:mr-[60px] desktop:ml-[180px] mr-[26px] ml-[26px]">
        <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
          <h1 className="text-[40px] desktop:text-[80px] font-bold z-10 desktop:-mb-7 -mb-3">
            Contact
          </h1>
          <p className="text-[16px] desktop:text-[20px] ">05</p>
        </div>
        <div className="flex desktop:flex-row flex-col desktop:items-end justify-around desktop:justify-between w-full pb-4 border-b-2 border-black h-[140px]">
          <h2 className="font-medium text-[30px] desktop:text-[40px]">Mail</h2>
          <Link href="mailto:kraus.pauline@gmail.com">
            <p className="text-[18px] desktop:text-[30px] desktop:w-[460px]">
              kraus.pauline@gmail.com
            </p>
          </Link>
        </div>
        <div className="flex desktop:flex-row flex-col gap-5 desktop:gap-0 desktop:items-center justify-between w-full mt-[5%]  ">
          <h2 className="font-medium text-[30px] desktop:text-[40px]  flex-1">
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
  );
}
