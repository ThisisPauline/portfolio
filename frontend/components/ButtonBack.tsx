import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";
import styles from "../styles/menu.module.scss";

export interface ButtonPropTypes {
  label: string;
}

export default function ButtonBack(props: ButtonPropTypes) {
  return (
    <div className="flex gap-3 deskop:gap-[10px]">
      <Image src={arrowRight} alt="innerLink" className="rotate-180" />
      <button className={`text-left font-medium ${styles["linkWhite"]}`}>
        {props.label}
      </button>
    </div>
  );
}
