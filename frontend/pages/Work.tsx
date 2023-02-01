import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import ButtonBlack from "@/components/ButtonInner";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-start justify-center min-h-screen mr-[60px] mt-[100px] ml-[60px]">
        <div className="flex items-end justify-between w-full border-b-2 pb-4 border-black ">
          <h1 className="text-[80px] font-bold z-10 -mb-7">Work</h1>
          <p className="text-[20px] ">02</p>
        </div>
      </div>
    </>
  );
}
