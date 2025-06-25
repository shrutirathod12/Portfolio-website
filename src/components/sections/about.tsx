"use client";

import React from 'react';
import { MotionDiv } from '@/components/motion-div';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv>
          <h2 className="font-headline text-3xl md:text-4xl text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>
        </MotionDiv>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <MotionDiv delay={0.2} className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm <span className="text-foreground">Shruti Rathod</span>,
              a passionate software developer and full stack intern who enjoys building secure,
              smart and user-centric applications. My work blends clean UI/UX with practical functionality — powered by
              technologies like <span className="text-primary">Flask, JavaScript, Python, SQL, and React</span>.
            </p>

            <p>
              I'm also deeply curious about Artificial Intelligence and Human-Computer Interaction,
              and love creating systems that are not only functional but thoughtfully designed for real-world use.
            </p>

            <p className="text-sm text-muted-foreground italic">
              "Good code solves problems. Great design solves human problems."
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
