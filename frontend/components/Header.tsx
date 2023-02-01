import React from "react";
import Image from "next/image";
import Link from "next/link";
import donutBlueBig from "../assets/donut-blue-big.png";
import BurgerMenu from "./BurgerMenu";
import styles from "../styles/menu.module.scss";

export default function Header() {
  const [menu, setMenu] = React.useState<boolean>(false);

  if (typeof window !== "undefined") {
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  function handleOnClick() {
    setMenu(!menu);
  }

  return (
    <div className={menu ? "pt-0 gap-0 " : ""}>
      {menu ? (
        ""
      ) : (
        <div className="mt-5 flex items-center flex-row h-[100px] justify-between pl-[18px] pr-[40px] opacity-90 absolute top-0 left-0 w-screen z-10 desktop:h-[130px]">
          <Link href="/">
            <Image
              src={donutBlueBig}
              alt="logo"
              width={195}
              className={`w-[195px] ${styles["donutHover"]}`}
            />
          </Link>
          <button
            className={`text-[36px] font-bold ${styles["linkBlack"]}`}
            onClick={handleOnClick}
          >
            Menu
          </button>
        </div>
      )}
      {menu ? (
        <div className="overflow-hidden">
          <BurgerMenu menu={menu} setMenu={setMenu} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
