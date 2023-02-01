import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";
import styles from "../styles/menu.module.scss";

export interface ButtonPropTypes {
  label: string;
}

export default function ButtonBlack(props: ButtonPropTypes) {
  return (
    <div className="flex gap-[10px]">
      <Image src={arrowRight} alt="innerLink" />
      <button className={`font-medium text-3xl ${styles["linkWhite"]}`}>
        {props.label}
      </button>
    </div>
  );
}
