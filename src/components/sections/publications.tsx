"use client";

import React from 'react';
import { MotionDiv } from '@/components/motion-div';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Multi-layered Authentication System for Enhanced Security Against Shoulder-surfing',
    journal: 'International Journal of Creative Research Thoughts (IJCRT)',
    year: 'May 2025',
    link: 'https://ijcrt.org/papers/IJCRT2505454.pdf',
    description: 'This paper introduces a multi-layered authentication system to enhance security against shoulder-surfing, published in the International Journal of Creative Research Thoughts (IJCRT).'
  }
];

const PublicationsSection = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv>
          <h2 className="font-headline text-3xl md:text-4xl text-center mb-12">
            <span className="text-primary">Publications</span>
          </h2>
        </MotionDiv>
        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {publications.map((pub, index) => (
            <MotionDiv key={pub.title} delay={index * 0.1} className="h-full">
               <Card className="glassmorphism transition-all duration-300 hover:scale-105 hover:border-accent h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{pub.title}</CardTitle>
                  <CardDescription className="text-foreground/80 italic pt-1">{pub.journal} - {pub.year}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/90">{pub.description}</p>
                </CardContent>
                <CardFooter className="flex justify-start">
                  <Button asChild variant="link" className="p-0 h-auto text-base">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      Read Publication
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
