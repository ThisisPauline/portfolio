import Image from "next/image";
import donutBlue from "../assets/donut-blue.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col gap-[10px] items-center mb-4">
      <Link href="/">
        <Image src={donutBlue} alt="donnut blue footer" className="w-[50px]" />
      </Link>
      <p>Made with love by Pauline Kraus, 2023</p>
    </div>
  );
}
