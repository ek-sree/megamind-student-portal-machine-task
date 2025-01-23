'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import project from '../../../../public/images/project-img.jpg'
import project1 from '../../../../public/images/project-img2.jpg'
import project2 from '../../../../public/images/project-img3.jpg'

export default function Projects() {
  const projects = [
    { name: 'ONDC Case Study', image: project },
    { name: 'Jal Jeevan Mission', image: project1 },
    { name: 'FriEasy', image: project2} ,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-11 bg-gray-50 py-7">
      <div className="flex justify-between mx-40">
        <div>
          <h3 className="text-4xl font-bold text-slate-700 w-96">
            Case Insights & Key Projects
          </h3>
        </div>
        <div className="flex text-slate-800 rounded-2xl border border-slate-300 py-1 h-10">
          <button className="px-2 bg-slate-300 rounded-xl ml-1">Case studies</button>
          <button className="px-2">Projects</button>
        </div>
      </div>

      <div className="relative mx-8 mt-8">

        <div className="absolute left-4 top-80 -translate-y-1/2 flex gap-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentIndex === index ? 'bg-slate-800' : 'bg-slate-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute right-4 top-80 -translate-y-1/2 flex gap-4">
          <button
            onClick={handlePrevious}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-slate-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-slate-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex-none w-1/3 px-2 transition-opacity duration-500 ${
                  index === currentIndex || 
                  index === (currentIndex + 1) % projects.length || 
                  index === (currentIndex + 2) % projects.length
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}