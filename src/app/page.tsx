"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HomePage() {
    const words = [
      {
        text: "Hey!",
      },
      {
        text: "I",
      },
      {
        text: "am",
      },
      {
        text: "Rahul.",
        className: "text-blue-500 dark:text-yellow-300",
      },
    ];
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
       <div className="flex justify-center">
         <TypewriterEffectSmooth words={words} />
       </div>
       <div className="flex items-center justify-center space-x-2">
        <a href="https://github.com/rahularora27" target="_blank" rel="noopener noreferrer">
         <FaGithub className='fill-black dark:fill-white h-6 w-6 xl:h-12 xl:w-12' />
        </a>
        <a href="https://www.linkedin.com/in/rahularora2715" target="_blank" rel="noopener noreferrer">
         <FaLinkedin className='fill-blue-500 dark:fill-yellow-300 h-6 w-6 xl:h-12 xl:w-12' />
        </a>
        <a href="https://x.com/RahulArora2715" target="_blank" rel="noopener noreferrer">
         <FaTwitter className='fill-blue-500 dark:fill-yellow-300 h-6 w-6 xl:h-12 xl:w-12' />
        </a>
        <a href="mailto:rahularora2715@gmail.com" target="_blank" rel="noopener noreferrer">
         <div className="icons8-gmail"></div>
        </a>
        </div>
      </div>
  );
}