import Image from 'next/image';
import React from 'react';
import { images } from './imageExports';
import {AnimatedTooltip} from '../../ui/animated-tooltip';

const About: React.FC = () => {
  const tech = [
    {
      id: 1,
      name: "React",
      designation: "",
      image: images.react
        
    },
    {
      id: 2,
      name: "Node.js",
      designation: "",
      image: images.node
        
    },
    {
      id: 3,
      name: "Express",
      designation: "",
      image: images.express
        
    },
    {
      id: 4,
      name: "MongoDB",
      designation: "",
      image: images.mongodb
        
    },
    {
      id: 5,
      name: "JavaScript",
      designation: "",
      image: images.javascript
        
    },
    {
      id: 6,
      name: "Java",
      designation: "",
      image: images.java
        
    },
  ];

  return (
    <section className="flex items-center justify-evenly min-h-screen mt-16 md:mt-0">
      <div className="mx-auto px-4 flex flex-col xl:flex-row items-center xl:text-left text-center">
        <div className="overflow-hidden xl:mr-8 mb-4 xl:mb-0">
          <Image
            src={images.rahul}
            alt="Rahul Arora"
            width={350}
            height={350}
            className="object-cover border-4 border-primary"
          />
        </div>
        <div className='max-w-2xl space-y-4'>
          <h1 className="text-3xl font-bold text-center">About Me</h1>
          <p className="text-lg font-semibold">
          Hi there! I'm Rahul Arora, a Final year student at Manipal University Jaipur pursuing Bachelors of Technology in Computer Science, passionate about building innovative and user-friendly web applications. I'm constantly learning and exploring new technologies, and I'm excited to share my journey and creations with you. This portfolio showcases some of my projects and experiences. I'd love to hear your thoughts, so feel free to browse around and connect with me!
          </p>
        <div className="flex flex-col items-center justify-evenly space-y-2">
          <h1 className='font-semibold text-3xl'>Technical Skills</h1>
          <div className="flex flex-row items-center">
            <AnimatedTooltip items={tech} />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
