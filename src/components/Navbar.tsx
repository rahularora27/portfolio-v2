// components/Navbar.tsx
"use client";
import React from "react";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { SunIcon, MoonIcon } from "./Icons";

export const Navbar: React.FC = () => {

    const [mode, setMode] = useThemeSwitcher();

  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="text-black dark:text-white font-bold">Navbar</div>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
      {
        mode === "dark" ?
        <SunIcon className = {"fill-dark"} />
        : <MoonIcon className = {"fill-dark"} />
      }
      </button>
    </nav>
  );
};
