"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, User, Layers, CheckCircle2 } from "lucide-react";

const PROJECT_IMAGES = [
  { id: 1, src: "/projects/ihealthlink/dash.jpg", color: "bg-blue-100/20", title: "Main Dashboard" },
  { id: 2, src: "/projects/ihealthlink/enroll.jpg", color: "bg-cyan-100/20", title: "Resident Enrollment" },
  { id: 3, src: "/projects/ihealthlink/sync.jpg", color: "bg-sky-100/20", title: "Mobile Sync Module" },
  { id: 4, src: "/projects/ihealthlink/records.jpg", color: "bg-teal-100/20", title: "Health Records" },
  { id: 5, src: "/projects/ihealthlink/mobile1.jpg", color: "bg-indigo-100/20", title: "Flutter App View" },
  { id: 6, src: "/projects/ihealthlink/mobile2.jpg", color: "bg-blue-100/20", title: "Offline Entry" },
];

export default function IHealthLinkProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = PROJECT_IMAGES[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % PROJECT_IMAGES.length);
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? PROJECT_IMAGES.length - 1 : prev - 1));

  return (
    <div className="w-full animate-fade-in font-sans flex flex-col gap-6">
      
      {/* --- TOP SECTION: WIDE GALLERY --- */}
      <div className="w-full flex flex-col lg:flex-row gap-2">
        
        {/* Main Display View */}
        <div className="relative group w-full lg:w-2/3 aspect-video lg:aspect-auto lg:min-h-[400px] rounded-lg overflow-hidden flex-shrink-0 bg-black/10 dark:bg-black/20">
          <div key={activeIndex} className={`relative w-full h-full flex items-center justify-center animate-fade-in ${activeImage.color}`}>
            <span className="absolute inset-0 flex items-center justify-center text-white/50 text-xl md:text-3xl font-bold tracking-wider z-10 text-center px-4 mix-blend-overlay">
              {activeImage.title}
            </span>
            <img 
              src={activeImage.src} 
              alt={activeImage.title} 
              className="relative w-full h-full object-cover z-20"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-30">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-30">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnails Grid */}
        <div className="w-full lg:w-1/3 grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 content-start">
          {PROJECT_IMAGES.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={img.id}
                onClick={() => setActiveIndex(index)}
                className={`relative w-full aspect-square rounded-lg overflow-hidden transition-all duration-300 border ${
                  isActive 
                    ? "border-white opacity-100 scale-[0.98]" 
                    : "border-transparent opacity-60 hover:opacity-100"
                } bg-black/10`}
              >
                <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold z-10 text-center px-1 mix-blend-overlay">
                  {img.title}
                </span>
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="relative w-full h-full object-cover z-20"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* --- BOTTOM SECTION: PROJECT DETAILS --- */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
        
        {/* Description Column */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="mb-6 border-b border-white/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
              iHealthLink
            </h1>
            <div className="flex items-center gap-2 mt-3 text-cyan-50 font-medium drop-shadow-sm">
              <Calendar className="w-4 h-4" />
              <span>July 2025 – October 2025</span>
            </div>
          </div>

          <div className="space-y-4 text-white/90 leading-relaxed text-base md:text-lg drop-shadow-sm">
            <p>
              iHealthLink is a comprehensive Barangay Healthcare Management System developed to streamline local health administration and resident management. The platform modernizes record-keeping by replacing traditional paper trails with a highly responsive, unified digital ecosystem.
            </p>
            <p>
              The system features extensive resident enrollment modules, intelligent backend logic, and a seamless mobile synchronization architecture. To ensure strict data integrity across multiple devices, the synchronization logic explicitly prioritizes server-side IDs during record lookup, falling back to local IDs only in the event that the server ID is definitively not found.
            </p>
          </div>
        </div>

        {/* Role & Stack Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          
          {/* Role Box */}
          <div className="relative overflow-hidden flex-1">
           
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow-sm">
              <User className="w-5 h-5 text-white" />
              Role
            </h3>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3 text-white/90 text-base drop-shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span>Full-Stack Developer</span>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-base drop-shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span>System Architecture & DB Design</span>
              </li>
            </ul>
          </div>

          {/* Stack Box */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 drop-shadow-sm">
              <Layers className="w-5 h-5 text-white" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Laravel', 'Flutter', 'MariaDB', 'SQLite', 
                'Dart', 'PHP', 'Figma', 'Eloquent ORM', 
                'MVC', 'TailwindCSS', 'Flowbite'
              ].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-md border border-white/20 shadow-sm transition-colors hover:bg-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}