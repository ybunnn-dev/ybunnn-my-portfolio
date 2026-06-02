"use client";

import React, { useState, useEffect, useRef } from "react";

const timeline = [
  {
    year: "2026",
    title: "DOST Region V Internship",
    desc: "Contributed to DOCS 2.0 as an Assistant Full-Stack Developer and UI/UX Designer."
  },
  { year: "2025", title: "Lead Developer", desc: "Led Capstone Project such as Integrated Barangay Healthcare Management System as well as projects such as Hotel Management System." },
  { year: "2024", title: "First Backend Experience", desc: "Collaborated in building web applications such as Inventory Management System and E-Commerce Website" },
  { year: "2023", title: "2nd Year College - Academic Projects", desc: "Collaborated on various university-level software engineering projects such as Java and Web Development." },
  { year: "2022", title: "First Year College", desc: "Started my journey into coding C, C++, and Java." },
];

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the content is visible
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Determine if the item sits on the left or right side of the timeline
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={domRef}
      className={`relative flex w-full mb-12 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${isLeft ? "md:flex-row-reverse" : "flex-row"}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[20px] md:left-1/2 w-5 h-5 rounded-full bg-cyan-600 dark:bg-cyan-500 border-[4px] border-white dark:border-[#1E293B] -translate-x-1/2 z-10 shadow-sm"></div>

      {/* Empty Space for Desktop Alignment */}
      <div className="hidden md:block w-1/2"></div>

      {/* Content - Removed the card wrappers entirely */}
      <div className={`w-full ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
        <div className={`py-1 ${isLeft ? "md:text-right" : "text-left"}`}>
          
          <span className="text-sm font-bold text-cyan-800 dark:text-cyan-400 mb-1 block uppercase tracking-wider">
            {item.year}
          </span>
          
          <h3 className="font-bold text-cyan-950 dark:text-white text-xl leading-tight mb-2">
            {item.title}
          </h3>
          
          <p className="text-base text-cyan-900 dark:text-gray-300 font-medium leading-relaxed">
            {item.desc}
          </p>

        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-500 to-cyan-100 dark:from-dark_gradient dark:to-light_gradient py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Centered Header - Updated to deep cyan */}
        <h2 className="font-bold text-3xl md:text-4xl mb-16 text-center text-cyan-950 dark:text-white">
          My Experience
        </h2>
        
        <div className="relative w-full">
          {/* Central Line - Tinted cyan for light mode to blend better with the gradient */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-cyan-700/20 dark:bg-gray-700/60 -translate-x-1/2 rounded-full"></div>

          {/* Render Timeline Items */}
          {timeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}