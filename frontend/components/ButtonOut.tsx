import arrowUp from "../assets/arrow-up.svg";
import Image from "next/image";
import styles from "../styles/menu.module.scss";

export interface ButtonPropTypes {
  label: string;
}

export default function ButtonOut(props: ButtonPropTypes) {
  return (
    <div className="flex gap-[10px]">
      <Image src={arrowUp} alt="outterLink" />
      <button className={`font-medium text-3xl ${styles["linkWhite"]}`}>
        {props.label}
      </button>
    </div>
  );
}
