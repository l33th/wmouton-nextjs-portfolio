import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { FaCode, FaCoffee } from "react-icons/fa";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://linkedin.com/in/wmouton"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/l33th"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      {/* --------------- */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <FaCode color="gray" bg-color="transparent" />
        <Link href="https://wmouton.vercel.app">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Portfolio
          </p>
        </Link>
      </motion.div>
      {/* --------------- */}

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="mailto:wmouton.dev@gmail.com"
        />
        <Link href="mailto:wmouton.dev@gmail.com">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
