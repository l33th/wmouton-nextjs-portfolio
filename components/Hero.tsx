import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import wmouton from "../public/wmouton.png";
import Link from "next/link";

type Props = {};

const heroStyles = {
  surrDiv: `h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden`,
  profileImg: `relative rounded-full h-32 w-32 mx-auto object-cover`,
  profileH2: `text-sm uppercase text-gray-500 pb-2 tracking-[15px]`,
  profileH1: `text-5xl lg:text-6xl font-semibold scroll-px-10`,
  spanTxt: `mr-3`,
};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Welcome! I'm Will",
      "Passionate Sofware Engineer",
      "<EatSleepCodeRepeat/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={heroStyles.surrDiv}>
      <BackgroundCircles />
      <Image className={heroStyles.profileImg} src={wmouton} alt="wmouton" />
      <div className="z-20">
        <h2 className={heroStyles.profileH2}>Software Engineer</h2>
        <h1 className={heroStyles.profileH1}>
          <span className={heroStyles.spanTxt}>{text}</span>
          <Cursor cursorColor="#00CF5D" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
