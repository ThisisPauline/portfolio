import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import ButtonBlack from "@/components/ButtonInner";
import Link from "next/link";
import donutWhiteXL from "../assets/donut-white-XL.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-[96px] font-bold z-10 -mb-7">Hi!</h1>
          <h1 className="text-[96px] font-bold z-10 mt-0">
            I&apos;m <span className="text-[#0C26CD]">Pauline</span>
          </h1>
          <p className="text-[40px] w-[40%] text-center mb-[44px] z-10">
            A bilingual Frontend Web Developer keen on design.
          </p>
          <div className="flex items-center justify-center gap-[10%] w-full z-10">
            <Link href="/Work">
              <ButtonBlack label="See my projects" />
            </Link>
            <Link href="/About">
              <ButtonBlack label="About me" />
            </Link>
          </div>
          <div className="flex w-screen items-center justify-center absolute z-1">
            <MouseParallaxContainer
              globalFactorX={0.4}
              globalFactorY={0.4}
              useWindowMouseEvents={true}
            >
              <MouseParallaxChild factorX={0.3} factorY={0.3}>
                <Image
                  src={donutWhiteXL}
                  alt="donut White Background"
                  width={500}
                  className="w-full"
                />
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
        </div>
      </div>
    </>
  );
}
