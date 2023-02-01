import Image from "next/image";
import donutBlueXL from "../assets/donut-blue-XL.png";
import Link from "next/link";
import styles from "../styles/menu.module.scss";

export interface MenuPropTypes {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerMenu(props: MenuPropTypes) {
  function handleOnClick() {
    props.setMenu(!props.menu);
  }

  return (
    <div>
      {!props.menu ? (
        ""
      ) : (
        <div>
          <div className="bg-white h-screen sticky z-20 flex">
            <div className=" bg-[#0C26CD] h-screen w-[35%] flex items-center justify-center ">
              <Link href="/">
                <Image
                  src={donutBlueXL}
                  alt="logo"
                  width={500}
                  className={styles.donutTurn}
                />
              </Link>
            </div>

            <div className=" flex flex-col text-[#0C26CD] pt-0 w-[80%] justify-center ">
              <div className="flex flex-row justify-end mt-[3%] mr-[68px] pr-0 pt-0w-100 absolute top-0 right-0 mb-[3%] ">
                <button
                  className={`text-[36px] font-bold ${styles["linkWhite"]}`}
                  onClick={handleOnClick}
                >
                  Close
                </button>
              </div>
              <div className="text-[80px] ml-[5%] w-[320px]">
                <div className={styles.linkWhite}>
                  <Link
                    href="/"
                    className="flex items-baseline"
                    onClick={handleOnClick}
                  >
                    <p className="text-[20px] mr-5 ">01</p>
                    Home
                  </Link>
                </div>
                <div className={styles.linkWhite}>
                  <Link
                    href="/Work"
                    className="flex items-baseline"
                    onClick={handleOnClick}
                  >
                    <p className="text-[20px] mr-5">02</p>
                    Work
                  </Link>
                </div>
                <div className={styles.linkWhite}>
                  <Link
                    href="/About"
                    className="flex items-baseline"
                    onClick={handleOnClick}
                  >
                    <p className="text-[20px] mr-5">03</p>
                    About
                  </Link>
                </div>
                <div className={styles.linkWhite}>
                  <Link
                    href="/Contact"
                    className="flex items-baseline"
                    onClick={handleOnClick}
                  >
                    <p className={`text-[20px] mr-5 ${styles["linkWhite"]}`}>
                      04
                    </p>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
