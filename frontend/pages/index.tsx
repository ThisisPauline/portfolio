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
        <div className="flex flex-col text-left desktop:items-center justify-center min-h-screen ">
          <h1 className="pl-[30px] desktop:ml-0  desktop:text-[96px] font-bold z-10 desktop:-mb-7 -mb-4 text-[60px]">
            Hi!
          </h1>
          <h1 className="hidden desktop:inline pl-[30px] desktop:ml-0  desktop:text-[96px] desktop:font-bold desktop:z-10 desktopmt-0 text-[60px]">
            I&apos;m <span className="text-[#0C26CD] ">Pauline</span>
          </h1>
          <h1 className="desktop:hidden pl-[30px]  font-bold z-10  -mb-4 text-[60px]">
            I'm
          </h1>
          <h1 className="desktop:hidden pl-[30px]  font-bold z-10  -mb-4 text-[70px] text-[#0C26CD]">
            Pauline
          </h1>
          <p className="pl-[30px] desktop:ml-0 text-left desktop:text-[40px] desktop:w-[40%] desktop:text-center mb-[44px] z-10 text-[20px] w-[100%]">
            A bilingual Frontend Web Developer keen on design.
          </p>
          <div className="pl-[30px] desktop:ml-0 flex desktop:flex-row flex-col desktop:items-center justify-around desktop:justify-center gap-5 desktop:gap-[10%] w-full z-10">
            <Link href="/Work">
              <ButtonBlack label="See my projects" />
            </Link>
            <Link href="/About">
              <ButtonBlack label="About me" />
            </Link>
          </div>
          <div className="hidden desktop:flex w-screen items-center justify-center absolute z-1">
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
          <div className="desktop:hidden flex w-screen items-center justify-center absolute z-1">
            <Image
              src={donutWhiteXL}
              alt="donut White Background"
              width={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
