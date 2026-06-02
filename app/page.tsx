"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import dynamic from "next/dynamic";

// --- SKELETON LOADER COMPONENT ---
const SkeletonLoader = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg ${className}`}></div>
);

// --- DYNAMIC IMPORTS ---
const LazyProfileSec = dynamic(() => import("./sections/profile_section"), {
  ssr: false,
  loading: () => <SkeletonLoader className="w-full h-screen rounded-none" />
});

const LazyAboutMe = dynamic(() => import("./sections/about"), {
  ssr: false,
  loading: () => <SkeletonLoader className="w-full h-96 mt-20" />
});

// Added Tech Stack dynamic import
const LazyTechStack = dynamic(() => import("./sections/tech_stack"), {
  ssr: false,
  loading: () => <SkeletonLoader className="w-full h-96 mt-20" />
});

const LazyExperience = dynamic(() => import("./sections/experience"), {
  ssr: false,
  loading: () => <SkeletonLoader className="w-full h-96 mt-20" />
});

// --- SCROLL ANIMATION WRAPPER ---
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


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="w-full bg-[#F4F4F4] dark:bg-gray-900 transition-colors duration-300">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-white/50 dark:bg-[#1E293B]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
            Ybunnn
          </a>

          {/* Nav Links & Controls */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600 dark:text-gray-300">
              <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
              {/* Added Tech Stack link */}
              <a href="#tech-stack" className="hover:text-gray-900 dark:hover:text-white transition-colors">Tech Stack</a>
              <a href="#experience" className="hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
            </div>

            {/* Interactive Sun/Moon Dark Mode Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none ${
                isDarkMode ? "bg-slate-700" : "bg-gray-300"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {/* Sun Icon */}
              <svg className="absolute left-1.5 w-3.5 h-3.5 text-gray-100" viewBox="0 0 64 64" fill="currentColor">
                 <circle cx="32.003" cy="32.005" r="16.001"></circle>
              </svg>
              
              {/* Moon Icon */}
              <svg className="absolute right-1.5 w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>

              {/* Sliding Thumb */}
              <div 
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 z-10 ${
                  isDarkMode ? "translate-x-7" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT SECTIONS --- */}
      <main className="w-full flex flex-col items-center">
        
        {/* Profile / Hero Section */}
        <div className="w-full">
          <LazyProfileSec />
        </div>

        {/* About Me Section */}
        <section id="about" className="w-full min-h-[80vh] flex items-center py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeInSection>
            <LazyAboutMe />
          </FadeInSection>
        </section>
        
        {/* Experience Section (Full Width, No FadeInSection Wrapper) */}
        <section id="experience" className="w-full min-h-[80vh]">
          <LazyExperience />
        </section>
        
        {/* Tech Stack Section */}
        <section id="tech-stack" className="w-full min-h-[80vh] flex items-center py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeInSection>
            <LazyTechStack />
          </FadeInSection>
        </section>
      </main>
    </div>
  );
}