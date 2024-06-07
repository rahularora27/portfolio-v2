"use client";
import React from "react";
import { BackgroundGradient } from "../../ui/background-gradient";
import Image from "next/image";
import img from "../../../public/rahul.png"

export default function About() {
  return (
    <div className="max-w-sm">
      <BackgroundGradient className="rounded-[22px] bg-black">
        <Image
          src={img}
          alt="image"
          className="object-fill rounded-[22px]"
        />
      </BackgroundGradient>
    </div>
  );
}
