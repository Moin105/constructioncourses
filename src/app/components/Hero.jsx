"use client";

import GetStarted from "./GetStarted";
import styles from "../style";
import PaymentCard from "./Payment";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 1.5,
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 1.5,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 1.5,
    },
  },
};

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInLeft}
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <motion.div
        variants={fadeInLeft}
        className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-md mb-2"
      >
        <p className={`${styles.paragraph} text-xs ml-2`}>
          <span className="text-dimWhite">$120/ week</span>{" "}
          <span className="text-dimWhite">
            for expert-led sessions.{" "}
            <span className="text-white">Join Now!</span>
          </span>
        </p>
      </motion.div>

      <motion.div
        variants={fadeInLeft}
        className="flex flex-row justify-between items-end w-full"
      >
        <h1 className="flex-1 font-poppins font-semibold text-[40px] ss:text-[64px] text-white ss:leading-[100px] leading-[75px]">
          SHEIKH
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">CONSTRUCTION</span>
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="ss:flex hidden md:mx-4 mr-0 "
        >
          <GetStarted />
        </motion.div>
      </motion.div>
      <motion.h1
        variants={fadeInLeft}
        className="w-full font-poppins font-semibold text-[40px] ss:text-[64px] text-white ss:leading-[100px] leading-[75px]"
      >
        & RENOVATION
      </motion.h1>

      <motion.p
        variants={fadeInLeft}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Join our educational course and unleash your potential. Our expert-led
        sessions will guide you through the intricate world of construction and
        renovation, empowering you with the skills and knowledge needed to
        succeed.
      </motion.p>
    </motion.div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInRight}
      className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
    >
      <motion.div
        variants={fadeInRight}
        className="z-[3] flex justify-center items-center w-full"
      >
        <PaymentCard />
      </motion.div>

      <div className="absolute top-0 z-[0] w-[35%] h-[35%] pink__gradient " />
      <div className="absolute bottom-40 z-[1] w-[75%] h-[75%] white__gradient " />
      <div className="absolute right-20 bottom-20 z-[0] w-[45%] h-[45%] blue__gradinet " />
    </motion.div>
  </section>
);
export default Hero;
