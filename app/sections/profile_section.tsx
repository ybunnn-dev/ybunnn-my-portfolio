"use client";

import React, { useState, useEffect } from "react";

export default function ProfileSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-cyan-500 to-cyan-100 dark:from-dark_gradient dark:to-light_gradient transition-colors duration-300"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        
        {/* ☀️ LIGHT MODE: Dot Grid ONLY */}
        <div className="absolute inset-0 block dark:hidden w-full h-full opacity-70">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* 🌙 DARK MODE: Blade Runner Stars ONLY */}
        <div className="absolute inset-0 hidden dark:block w-full h-full opacity-80">
          <svg
            viewBox="0 0 1000 300"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full object-cover"
          >
            <style>{`
              @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }
              @keyframes shoot { 0% { transform: translate(1100px, -50px); opacity: 0; } 5% { opacity: 1; } 15% { transform: translate(400px, 300px); opacity: 0; } 100% { opacity: 0; } }
              
              .star { animation: twinkle var(--duration) ease-in-out infinite; }
              .shooting-star { stroke: url(#meteorGrad); stroke-width: 2.5; stroke-linecap: round; }
            `}</style>

            <defs>
              <linearGradient id="meteorGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="1" /> {/* Pink */}
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" /> {/* Purple */}
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" /> {/* Cyan Fade */}
              </linearGradient>
            </defs>

            {/* Background Stars */}
            {[...Array(60)].map((_, i) => {
              const colors = ["#ffffff", "#ffffff", "#ec4899", "#a855f7", "#22d3ee"]; 
              const fill = colors[Math.floor(Math.random() * colors.length)];
              return (
                <circle
                  key={i}
                  className="star"
                  cx={Math.random() * 1000}
                  cy={Math.random() * 300}
                  r={Math.random() * 1.5 + 0.5}
                  fill={fill}
                  style={{ '--duration': `${Math.random() * 4 + 2}s` } as React.CSSProperties}
                />
              );
            })}

            {/* Shooting Star */}
            <line className="shooting-star" x1="0" y1="0" x2="-60" y2="30" style={{ animation: 'shoot 6s linear infinite 2s' }} />
          </svg>
        </div>
      </div>

      {/* --- FOREGROUND CONTENT (Animated) --- */}
      <div 
        className={`relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 transition-all duration-1000 ease-out transform ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        
        {/* Left Side: Portrait Profile Picture */}
        <div className="flex-shrink-0">
          <div className="w-56 h-72 md:w-[22rem] md:h-[28rem] rounded-2xl border-[6px] border-white dark:border-[#1E293B] overflow-hidden bg-gray-200 dark:bg-dark_gradient flex items-center justify-center transition-colors duration-300 shadow-2xl">
            <img 
              src="/pictures/front-pic.jpg" 
              alt="John Ivan B. Belaro"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-950 dark:text-white transition-colors mb-4 leading-tight">
            Hi, I'm Ivan. An Aspiring Full-Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-cyan-900 dark:text-gray-300 font-medium transition-colors mb-8">
              Building practical software solutions that make essential services more accessible and efficient.
          </p>
          {/* Buttons & Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            
            {/* Changed to 'a' tag to enable actual file downloading */}
            <a 
              href="/Belaro_JohnIvanB_Resume.pdf" 
              download="John_Ivan_Belaro_Resume.pdf"
              className="bg-cyan-700 dark:bg-gray-700 hover:bg-cyan-800 dark:hover:bg-gray-600 text-white text-xs px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg text-center cursor-pointer"
            >
              Download Resume
            </a>
                        
            <div className="flex items-center gap-5 text-cyan-800 dark:text-gray-300">
              
              {/* GitHub */}
              <a href="https://github.com/ybunnn-dev" target="_blank" className="hover:text-cyan-950 dark:hover:text-white transition-colors transform hover:scale-110" aria-label="Github">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/johnivan.belaro" target="_blank" className="hover:text-[#1877F2] transition-colors transform hover:scale-110" aria-label="Facebook">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              
              {/* LinkedIn (Make sure to swap the '#' with your actual LinkedIn profile URL) */}
              <a href="#" target="_blank" className="hover:text-[#0A66C2] transition-colors transform hover:scale-110" aria-label="LinkedIn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}