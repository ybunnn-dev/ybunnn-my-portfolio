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

const LazyExperience = dynamic(() => import("./sections/experience"), {
  ssr: false,
  loading: () => <SkeletonLoader className="w-full h-96 mt-20" />
});

const LazyTechStack = dynamic(() => import("./sections/tech_stack"), {
  ssr: false,
  loading: () => <SkeletonLoader className="w-full h-96 mt-20" />
});

// Added Projects dynamic import
const LazyProjects = dynamic(() => import("./sections/projects"), {
  ssr: false,
  loading: () => <SkeletonLoader className="w-full h-96 mt-20" />
});

// Added Gallery dynamic import
const LazyGallery = dynamic(() => import("./sections/gallery"), {
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
  const [activeSection, setActiveSection] = useState("home");

  // Handle Dark Mode Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle Active Navigation Link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "tech-stack", "projects", "gallery"];
      
      // Find the section currently in the viewport
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is near the top of the viewport
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Smooth Scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset by the navbar height (approximately 64px)
      const offsetTop = element.offsetTop - 64; 
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      // Optionally update active section immediately for snappier feedback
      setActiveSection(sectionId);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" },
  ];


  return (
    <div className="w-full bg-[#F4F4F4] dark:bg-gray-900 transition-colors duration-300">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-white/50 dark:bg-[#1E293B]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          
          {/* Logo / Name - Updated to cyan-950 in light mode */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="text-2xl font-bold text-cyan-950 dark:text-white tracking-wide"
          >
            {"<ybunnn-dev />"}
          </a>

          {/* Nav Links & Controls */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`transition-colors relative py-1 ${
                    activeSection === link.id 
                      // Active State: Bright Cyan
                      ? "text-cyan-600 dark:text-cyan-400" 
                      // Default State: Deep Cyan (Light Mode) / Light Gray (Dark Mode)
                      : "text-cyan-900 dark:text-gray-300 hover:text-cyan-700 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active Indicator Underline */}
                  {activeSection === link.id && (
                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600 dark:bg-cyan-400 rounded-full"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Interactive Sun/Moon Dark Mode Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full text-cyan-900 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {!isDarkMode ? (
                // Sun Icon (Visible in Light Mode)
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                // Moon Icon (Visible in Dark Mode)
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT SECTIONS --- */}
      <main className="w-full flex flex-col items-center">
        
        {/* Profile / Hero Section */}
        <div id="home" className="w-full">
          <LazyProfileSec />
        </div>

        {/* About Me Section */}
        <section id="about" className="w-full min-h-[80vh] flex items-center py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeInSection>
            <LazyAboutMe />
          </FadeInSection>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="w-full min-h-[80vh]">
          <LazyExperience />
        </section>
        
        {/* Tech Stack Section */}
        <section id="tech-stack" className="w-full min-h-[80vh] flex items-center py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeInSection>
            <LazyTechStack />
          </FadeInSection>
        </section>
            
        {/* Projects Section 
        <section id="projects" className="w-full min-h-[80vh] flex items-center py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeInSection>
            <LazyProjects />
          </FadeInSection>
        </section>

     
        <section id="gallery" className="w-full min-h-[80vh] flex items-center py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeInSection>
            <LazyGallery />
          </FadeInSection>
        </section>
        */}
      </main>
    </div>
  );
}