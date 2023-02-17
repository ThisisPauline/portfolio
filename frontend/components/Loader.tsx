import React from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import donutBlueBig from "../assets/donut-blue-big.png";
import styles from "../styles/menu.module.scss";

const DonutLoader = () => {
  const textProps = useSpring({
    loop: { reverse: true },
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 50 },
    config: { tension: 200, friction: 10, duration: 1500 },
  });

  return (
    <div className="flex flex-col justify-around items-center min-h-screen">
      <Image
        src={donutBlueBig}
        alt="Donut loader"
        className={`${styles["donutTurn"]} -m-[50px]`}
        width={300}
        height={300}
      />
      <animated.p style={textProps} className="text-center -mt-[50px]">
        Coding donuts...
      </animated.p>
    </div>
  );
};

export default DonutLoader;
