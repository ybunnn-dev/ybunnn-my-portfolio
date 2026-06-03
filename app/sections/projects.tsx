"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import IHealthLinkProject from "./projects/ihealthlink";
// import DocsProject from "./projects/docs";
// import MaloiInventoryProject from "./projects/maloi-inventory";

// --- LOCAL SCROLL ANIMATION WRAPPER ---
const FadeInSection = ({ children }: { children: ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15 } 
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`w-full transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      {children}
    </div>
  );
};

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center bg-[#0AC4E0] dark:bg-[#0AC4E0]/10 py-16 md:py-24 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        
        {/* --- SECTION HEADER --- */}
        <FadeInSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white dark:text-white drop-shadow-sm transition-colors duration-300">
              Featured Projects
            </h2>
            <div className="w-16 h-1.5 bg-white/80 dark:bg-cyan-500 rounded-full mx-auto mt-4 mb-6"></div>
            <p className="text-white/90 dark:text-gray-300 max-w-2xl mx-auto font-medium text-lg drop-shadow-sm">
              A showcase of the systems and applications I've developed, focusing on robust architecture, clean code, and seamless user experiences.
            </p>
          </div>
        </FadeInSection>

        {/* --- PROJECTS CONTAINER --- */}
        <div className="flex flex-col gap-32">
          
          {/* Project 1 */}
          <FadeInSection>
            <div className="w-full">
              <IHealthLinkProject />
            </div>
          </FadeInSection>

          {/* Future Project Placeholder 
          <FadeInSection>
            <div className="w-full">
              <DocsProject />
            </div>
          </FadeInSection>
          */}

        </div>

      </div>
    </div>
  );
}