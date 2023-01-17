import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Image from "next/legacy/image";
import myself from "../../../public/myself.png";
export default function AboutMe() {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Nicho.Ask</h2>
        <h3 className="text-2xl py-2 md:text-3xl">Front end coders</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
          Freelancer providing services for programming for website.Join me
          below and let's code!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-500">
        <AiFillInstagram className="cursor-pointer" />
        <AiFillLinkedin className="cursor-pointer" />
        <AiFillGithub className="cursor-pointer" />
      </div>
      <div className="relative mx-auto mt-16 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80">
        <Image src={myself} alt="myself" layout="intrinsic" objectFit="cover"/>
      </div>
    </>
  );
}
