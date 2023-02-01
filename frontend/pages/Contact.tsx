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
    <div>
      <Header />
      <div className="flex flex-col items-start justify-center min-h-screen mt-[100px] mr-[60px] ml-[60px]">
        <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
          <h1 className="text-[80px] font-bold z-10 -mb-7">Contact</h1>
          <p className="text-[20px] ">05</p>
        </div>
        <div className="flex items-end justify-between w-full pb-4 border-b-2 border-black h-[140px]">
          <h2 className="font-medium text-[40px]">Mail</h2>
          <Link href="mailto:kraus.pauline@gmail.com">
            <p className="text-[30px] w-[420px]">kraus.pauline@gmail.com</p>
          </Link>
        </div>
        <div className="flex items-center justify-between w-full mt-[5%]  ">
          <h2 className="font-medium text-[40px]   flex-1">Social media</h2>
          <div className="flex flex-col gap-[30px] f w-[420px]">
            <Link href="mailto:kraus.pauline@gmail.com">
              <ButtonOut label="GitHub" />
            </Link>
            <Link href="mailto:kraus.pauline@gmail.com">
              <ButtonOut label="LinkedIn" />
            </Link>
            <Link href="mailto:kraus.pauline@gmail.com">
              <ButtonOut label="Instagram" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
