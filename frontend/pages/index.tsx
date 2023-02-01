import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import ButtonBlack from "@/components/ButtonInner";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[96px] font-bold">Hi!</h1>
        <h1 className="text-[96px] font-bold">
          I&apos;m <span className="text-[#0C26CD]">Pauline</span>
        </h1>
        <p className="text-[40px] w-[40%] text-center mb-[44px]">
          A bilingual Frontend Web Developer keen on design.
        </p>
        <div className="flex items-center justify-center gap-[10%] w-full ">
          <Link href="/Work">
            <ButtonBlack label="See my projects" />
          </Link>
          <Link href="/About">
            <ButtonBlack label="About me" />
          </Link>
        </div>
      </div>
    </>
  );
}
