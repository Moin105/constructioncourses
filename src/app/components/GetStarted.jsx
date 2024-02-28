import React from "react";
import styles from "../style";
import { arrowUp } from "../../assets";
import Image from "next/image";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-1 cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-base leading-5 text-gradient">
          Get
        </p>
        <Image
          priority
          src={arrowUp}
          alt="arrow point up"
          className="ml-1 object-contain w-[20px] h-[20px]"
        />
      </div>
      <p className="font-poppins font-medium text-base leading-5 text-gradient">
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
