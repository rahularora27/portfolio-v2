import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  const isDarkMode = document.documentElement.classList.contains('dark');

  const lightModeColors = [
    "#FDE047", // Background
    "rgb(254, 116, 254)",
    "rgb(120, 238, 255)",
    "rgb(255, 179, 1)",
    "rgb(76, 248, 1)",
    "rgb(235, 139, 83)"
  ];
  const darkModeColors = [
    "#3B82F6", // Background
    "rgb(1, 139, 83)",
    "rgba(253, 29, 29, 1)",
    "rgba(131, 58, 180, 1)", 
    "rgb(1, 139, 170)",
  ];

  const backgroundColors = isDarkMode ? darkModeColors : lightModeColors;

  return (
    <div className='flex items-center justify-center'>
      <MotionLink
        href='/'
        className='w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold'
        style={{
          backgroundColor: backgroundColors[0],
          color: isDarkMode ? '#FFFFFF' : '#000000',
        }}
        whileHover={{
          backgroundColor: backgroundColors,
          transition: { duration: 1, repeat: Infinity},
        }}
      >
        RA
      </MotionLink>
    </div>
  );
};

export default Logo;
