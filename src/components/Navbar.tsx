// components/Navbar.tsx
"use client";
import React from "react";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { SunIcon, MoonIcon } from "./Icons";
import Link from 'next/link';

export const Navbar: React.FC = () => {

    const [mode, setMode] = useThemeSwitcher();

    const commonClassName = "text-lg font-semibold cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-yellow-300";

  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50 flex justify-between">
      <ul className="flex space-x-4 items-center">
        <li>
          <Link className={commonClassName} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={commonClassName} href="/projects">
            Projects
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
      <a
        href="/RahulArora_Resume.pdf"
        download="RahulArora_Resume.pdf"
        className="bg-gray-300 hover:bg-gray-400 text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        Resume
      </a>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
      {
        mode === "dark" ?
        <SunIcon className = {"fill-dark"} />
        : <MoonIcon className = {"fill-dark"} />
      }
      </button>
      </div>
    </nav>
  );
};
