'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import linkedIn from "../.././../../public/images/linkedin-icon.png";
import Image from "next/image";
import avatar from "../../../../public/images/9286c820b0386e71f0ad7fec5f59c7c4.jpg";

const testimonials = [
  {
    name: "Neha Saini",
    title: "Tech Lead | Blockchain Professional",
    image: avatar,
    endorsement: "Saksham is very hardworking and always keen to learn new technologies. He proactively takes the work and was a good team player. All the best Saksham for your future projects."
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    image: avatar,
    endorsement: "Saksham is a talented developer who always delivers high-quality work. He's a great team player and I'd be happy to work with him again."
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    image: avatar,
    endorsement: "Saksham's attention to detail and problem-solving skills are impressive. He's a valuable asset to any team and I highly recommend him."
  },
  {
    name: "Michael Johnson",
    title: "Data Scientist",
    image: avatar,
    endorsement: "Saksham is an excellent communicator and collaborator. He quickly grasps complex technical concepts and translates them into practical solutions."
  }
];

const Endorsements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-gray-200 mt-14 py-5">
      <div className="flex justify-between mx-40">
        <div className="py-3">
          <h3 className="text-4xl font-bold text-slate-700 w-[27rem]">
            Endorsements from Mentors & Peers
          </h3>
          <h2 className="text-lg text-slate-400 w-[27rem] mt-3">
            Insights from those who&apos;ve worked with me
          </h2>
        </div>
        <div className="flex text-slate-800 bg-slate-300 rounded-2xl px-2 py-2 mt-7 h-10 justify-center items-center">
          <Download />
          <button className="px-2 rounded-xl ml-1">Letters of Recommendation</button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="bg-white max-w-md py-3 ml-7 rounded-lg px-4 mt-4">
            <div className="flex justify-end">
              <Image src={linkedIn} alt="logo" />
            </div>

            <div className="flex items-center gap-4">
              <Image src={testimonial.image} alt="avatar" className="rounded-full w-16 h-16" />

              <div>
                <span className="block font-semibold text-slate-800">{testimonial.name}</span>
                <span className="text-slate-600 text-sm">{testimonial.title}</span>
              </div>
            </div>

            <span className="block mt-3 text-slate-700">{testimonial.endorsement}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
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
    </section>
  );
};

export default Endorsements;
