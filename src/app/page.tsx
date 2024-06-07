"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

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
      <div className="flex items-center justify-center h-[30rem]">
        <TypewriterEffectSmooth words={words} />
      </div>
  );
}