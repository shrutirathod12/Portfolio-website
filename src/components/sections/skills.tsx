"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MotionDiv } from '@/components/motion-div';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'C/C++', 'JavaScript'],
  },
  {
    category: 'Web',
    skills: ['HTML', 'CSS', 'Node.js', 'Flask', 'Spring Boot'],
  },
  {
    category: 'Databases',
    skills: ['SQL', 'SQLite', 'SQLAlchemy'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'GCP', 'Postman'],
  },
  {
    category: 'Concepts',
    skills: ['OOP', 'Cloud Computing', 'Computer Network'],
  },
  {
    category: 'Others',
    skills: ['Octave', 'Data Structures', 'Algorithms'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv>
          <h2 className="font-headline text-3xl md:text-4xl text-center mb-12">
            <span className="text-primary">Skills</span>
          </h2>
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <MotionDiv key={category.category} delay={index * 0.1}>
              <Card className="glassmorphism h-full">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary/90">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-base px-3 py-1 bg-primary/20 text-primary border-0 cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
