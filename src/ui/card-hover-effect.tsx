import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    githubLink?: string;
    readMoreLink?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-500 dark:bg-yellow-300 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription
              description={item.description}
              githubLink={item.githubLink}
              readMoreLink={item.readMoreLink}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl h-full w-full p-4 overflow-hidden dark:bg-black bg-gray-300 border border-transparent z-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-2xl text-black dark:text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  description,
  githubLink,
  readMoreLink,
}: {
  className?: string;
  description: React.ReactNode;
  githubLink?: string;
  readMoreLink?: string;
}) => {
  return (
    <div className={cn("mt-8 text-zinc-800 dark:text-zinc-400 tracking-wide leading-relaxed text-base", className)}>
      <p className="min-h-[10rem]">{description}</p>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        {githubLink && (
          <Link href={githubLink} className="text-3xl px-4 py-2 text-black dark:text-white" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
        )}
        {readMoreLink && (
          <Link href={readMoreLink} className="text-lg px-4 py-2 text-black dark:text-white rounded-lg font-bold" target="_blank" rel="noopener noreferrer">
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};
