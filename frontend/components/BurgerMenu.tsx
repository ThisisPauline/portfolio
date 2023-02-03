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
          <div className=" bg-[#0C26CD] h-screen sticky z-20 flex desktop:bg-inherit">
            <div className="hidden desktop:flex bg-[#0C26CD] h-screen w-[50%] items-center justify-center ">
              <Link href="/">
                <Image
                  src={donutBlueXL}
                  alt="logo"
                  width={500}
                  className={styles.donutTurn}
                />
              </Link>
            </div>

            <div className=" flex desktop:mt-[15px]  flex-col text-[#0C26CD] pt-0 desktop:w-[80%] justify-center ">
              <div className="mr-4 h-[100px]  pr-0 pt-0 w-100 absolute top-0 right-0 mb-[3%] ">
                <button
                  className={`desktop:mt-[48px] mt-[35px] justify-between pl-[5px] desktop:pl-[10px] desktop:pr-[20px] pr-[10px]   text-white text-[24px]  underline desktop:no-underline desktop:text-[36px] desktop:text-[#0C26CD] font-bold ${styles["linkWhite"]}`}
                  onClick={handleOnClick}
                >
                  Close
                </button>
              </div>
              <div className="text-white text-[24px] desktop:no-underline  desktop:text-[#0C26CD] ml-[5%] w-[620px]">
                <div className={styles.linkWhite}>
                  <Link
                    href="/"
                    className="flex items-baseline "
                    onClick={handleOnClick}
                  >
                    <p className="text-[20px] mr-5 font-[100] desktop:no-underline">
                      01
                    </p>
                    <p className="underline text-[50px] desktop:text-[80px] font-bold   desktop:no-underline">
                      Home
                    </p>
                  </Link>
                </div>
                <div className={styles.linkWhite}>
                  <Link
                    href="/projects"
                    className="flex items-baseline"
                    onClick={handleOnClick}
                  >
                    <p className="text-[20px] font-[100] mr-5">02</p>
                    <p className="underline text-[50px] font-bold desktop:text-[80px]  desktop:no-underline">
                      Projects
                    </p>
                  </Link>
                </div>
                <div className={styles.linkWhite}>
                  <Link
                    href="/About"
                    className="flex items-baseline"
                    onClick={handleOnClick}
                  >
                    <p className="text-[20px] font-[100] mr-5">03</p>
                    <p className="underline text-[50px] font-bold desktop:text-[80px]  desktop:no-underline">
                      About
                    </p>
                  </Link>
                </div>
                <div className={styles.linkWhite}>
                  <Link
                    href="/Contact"
                    className="flex items-baseline"
                    onClick={handleOnClick}
                  >
                    <p
                      className={`text-[20px] font-[100] mr-5 ${styles["linkWhite"]}`}
                    >
                      04
                    </p>
                    <p className="underline text-[50px] font-bold desktop:text-[80px] desktop:no-underline">
                      Contact
                    </p>
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
