import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ramp from "../public/worked_at/ramp-light.png";
import reactjs from "../public/tech_used/react.svg";
import nextjs from "../public/tech_used/nextjs.png";
import typescript from "../public/tech_used/ts.svg";
import tailwind from "../public/tech_used/tailwind.svg";
import illustrator from "../public/tech_used/illustrator.svg";
import linux from "../public/tech_used/linux.svg";
import git from "../public/tech_used/git.svg";
import python from "../public/tech_used/python.svg";

type Props = {};

const ExperienceCard = ({}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[620px] snap-center bg-[#292929] p-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[2] xl:h-[600px]"
        // src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwmouton.c57bb242.png&w=1080&q=75"
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center p-1"
          src={ramp}
          alt="ramp"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Web Developer {"@"} RAMProductions
        </h4>
        <p className="font-bold text-1xl mt-1">
          Random Access Media Productions
        </p>

        <div className="flex space-x-2 my-1">
          <Image
            className="h-10 w-10 rounded-full"
            src={reactjs}
            alt="reactjs"
          />
          <Image className="h-10 w-10 rounded-full" src={nextjs} alt="nextjs" />
          <Image
            className="h-10 w-10 rounded-full"
            src={typescript}
            alt="typescript"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={tailwind}
            alt="tailwind"
          />
          <Image className="h-10 w-10 rounded-full" src={python} alt="python" />
        </div>

        <div className="flex space-x-2 my-1">
          <Image
            className="h-10 w-10 rounded-full"
            src={illustrator}
            alt="illustrator"
          />
          <Image className="h-10 w-10 rounded-full" src={linux} alt="linux" />
          <Image className="h-10 w-10 rounded-full" src={git} alt="git" />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>

        <p className="uppercase py-5 to-gray-300">February 2022 - Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sum</li>
          <li>Sum</li>
          <li>Sum</li>
          <li>Sum</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
