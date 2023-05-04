import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import ButtonBlack from "@/components/ButtonInner";
import Link from "next/link";
import styles from "../styles/menu.module.scss";

import donutBlueXL from "../assets/donut-blue-XL.png";

const inter = Inter({ subsets: ["latin"] });

export default function Lost() {
  return (
    <div className="flex flex-col max-h-screen">
      <Header />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-row text-left items-center justify-center ">
          <h1 className={`font-bold ${styles["mainHeading"]}`}>4</h1>
          <Image
            src={donutBlueXL}
            alt="logo"
            width={190}
            height={190}
            className={styles.donutTurn}
          />
          <h1 className={`font-bold ${styles["mainHeading"]}`}>4</h1>
        </div>
        <h1 className={`font-medium  ${styles["sub"]}`}>Oops, you got lost!</h1>
        <div className="mt-10 ">
          <Link href="/">
            <ButtonBlack label="Home" />
          </Link>
        </div>
      </div>
    </div>
  );
}
