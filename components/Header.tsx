import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const styles = {
  headerStyles: `sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center`,
  headerDivStyles: `flex flex-row items-center`,
  cursorPointer: `cursor-pointer`,
  getInTouch: `uppercase hidden md:inline-flex text-sm text-gray-400`,
  emailDivIcon: `flex flex-row items-center text-gray-300 cursor-pointer`,
};

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className={styles.headerStyles}>
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
        className={styles.headerDivStyles}
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
        <SocialIcon
          url="https://twitter.com/l33th_dev"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

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
        className={styles.emailDivIcon}
      >
        <SocialIcon
          className={styles.cursorPointer}
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className={styles.getInTouch}>Get In Touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
