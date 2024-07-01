import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <MotionLink
        href='/'
        className='w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold bg-blue-500 text-white dark:bg-yellow-300 dark:text-slate-950'
        whileHover={{
          backgroundColor: [
            "#FDE047",
            "#3B82F6",
            "rgb(76, 248, 1)",
            "rgb(120, 238, 255)",
            "rgb(235, 183, 83)",
            "rgb(1, 235, 83)",
            "rgba(253, 29, 29, 1)",
            "rgb(198, 121, 239)", 
            "rgb(1, 229, 170)"
          ],
          transition: {duration: 1, repeat: Infinity}
        }}
      >
        RA
      </MotionLink>
    </div>
  );
};

export default Logo;
