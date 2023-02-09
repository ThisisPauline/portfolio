import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";
import styles from "../styles/menu.module.scss";

export interface ButtonPropTypes {
  label: string;
}

export default function ButtonInner(props: ButtonPropTypes) {
  return (
    <div className="flex gap-3 deskop:gap-[10px]">
      <Image src={arrowRight} alt="innerLink" />
      <button className={`font-medium ${styles["linkWhite"]}`}>
        {props.label}
      </button>
    </div>
  );
}
