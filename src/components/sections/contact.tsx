"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowUp, Download } from 'lucide-react';

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center">
            <p className="italic text-3xl md:text-4xl font-headline mb-8 max-w-xs text-foreground">
              I'd love to hear<br />from you.
            </p>
            <div className="flex space-x-6">
              <Link href="https://github.com/shrutirathod12" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8 text-foreground/70 hover:text-primary hover:scale-110 transition-all" />
              </Link>
              <Link href="https://www.linkedin.com/in/shruti-rathod-75775523b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8 text-foreground/70 hover:text-primary hover:scale-110 transition-all" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-start items-start space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">shrutivrathod@gmail.com</p>
              <p className="text-sm text-muted-foreground">9321730866</p>
            </div>
            <Button asChild size="lg">
              <a href="/Shruti_Rathod_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute right-10 bottom-10 border border-primary rounded-full p-2 hover:bg-primary/10 transition"
      >
        <ArrowUp className="h-5 w-5 text-primary" />
      </button>
    </section>
  );
};

export default ContactSection;
