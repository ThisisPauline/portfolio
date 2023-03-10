import Image from "next/image";
import donutBlue from "../assets/donut-blue.png";
import Link from "next/link";
import styles from "../styles/menu.module.scss";

export default function Footer() {
  return (
    <div className="flex flex-col gap-[10px] items-center mb-4">
      <Link href="/">
        <Image
          src={donutBlue}
          alt="donnut blue footer"
          className={`w-[50px] ${styles["donutHover"]}`}
        />
      </Link>
      <p className="text-[12px] font-[100] desktop:text-[16px]">
        Made with love by Pauline Kraus, 2023.
      </p>
    </div>
  );
}
