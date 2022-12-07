import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutIMG from "../public/ssj.png";

type Props = {};

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        // className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[2] xl:h-[600px]"
        // src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwmouton.c57bb242.png&w=1080&q=75"
      >
        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[600px] md:h-[260px] xl:w-[860px] xl:h-[360px]"
          src={aboutIMG}
          alt="wmouton"
        />
      </motion.div>

      <div className="space-y-10 p-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A little{" "}
          <span className="underline decoration-[#00CF5D]/50">bit</span> about
          me.
        </h4>
        <p className="text-base">
          I`ve been coding for about 4 years now and I am currently working as a
          freelance Full-Stack Software Engineer while seeking out a permanent
          position with the right company. My focus is on full-stack web
          development, APIs, nitty-gritty business logic and some front-end
          integration, what a great journey it is! My main focus is to build
          Front-end Web Applications using ReactJS and Full-stack Web
          Applications using NextJS.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
