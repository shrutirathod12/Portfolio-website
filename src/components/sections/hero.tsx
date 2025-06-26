"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const subtitleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.25,
    },
  },
};

const subtitleItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const HeroSection = () => {
  const subtitles = [' Software Developer', 'AI Enthusiast', 'Fullstack Intern'];
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('about');
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-around text-center md:text-left p-4 overflow-hidden sticky top-0 animated-gradient-bg">
      <div className="z-10 flex flex-col items-center md:items-start space-y-8 max-w-lg">
        <motion.h1
          className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tighter hover:scale-105 transition-transform duration-300 ease-in-out text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0,
            scale: 1,
          }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Shruti Rathod
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 md:gap-x-4 text-xl md:text-2xl lg:text-3xl font-medium text-primary text-glow"
          variants={subtitleContainer}
          initial="hidden"
          animate="visible"
        >
          {subtitles.map((text, i) => (
            <React.Fragment key={text}>
              <motion.span variants={subtitleItem} className="inline-block">
                {text}
              </motion.span>
              {i < subtitles.length - 1 && (
                <motion.span variants={subtitleItem} className="text-accent/50 text-3xl md:text-4xl select-none -translate-y-1">
                  |
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <Button asChild size="lg" className="mt-4 button-glow">
            <a href="#about" onClick={handleScrollToAbout}>
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </a>
          </Button>
        </motion.div>
      </div>
      <div
        className="w-72 h-72 rounded-xl shadow-[0_10px_20px_hsl(var(--primary)/0.5)] cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(600px) rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src="/hero-character.png"
          alt="Shruti Rathod"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
