import React from "react";
import { motion } from "framer-motion";

type Props = {};

const circleStyles = {
  surrDiv: `relative flex justify-center items-center`,
  circLow: `absolute border border-[#656565] rounded-full h-[200px] w-[200px] mt-52 animate-ping`,
  circMid: `rounded-full border border-[#656565] h-[300px] w-[300px] absolute mt-52`,
  circHigh: `rounded-full border border-[#656565] h-[500px] w-[500px] absolute mt-52`,
  circOuterPulse: `rounded-full border border-[#00FF99] opacity-5 h-[650px] w-[650px] absolute mt-52 animate-pulse`,
  circBd: `rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52`,
};

const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.1],
        borderRadius: ["20%", "20%", "50%", "80%", "20"],
      }}
      transition={{
        duration: 2.5,
      }}
      className={circleStyles.surrDiv}
    >
      <div className={circleStyles.circLow} />
      <div className={circleStyles.circMid} />
      <div className={circleStyles.circHigh} />
      <div className={circleStyles.circOuterPulse} />
      <div className={circleStyles.circBd} />
    </motion.div>
  );
};

export default BackgroundCircles;
