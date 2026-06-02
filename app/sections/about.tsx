"use client";

import React from "react";

export default function AboutMe() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch">
      
      {/* --- LEFT COLUMN (Smaller) --- */}
      <div className="col-span-1 lg:col-span-4 flex flex-col gap-2">
        
        {/* Card 1: Picture, Name & Location */}
        <div className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center transition-colors duration-300">
          
          {/* Circular Profile Picture */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-[4px] border-gray-100 dark:border-gray-700 bg-gray-200 dark:bg-gray-800">
            <img 
              src="/pictures/main_pic.JPG" 
              alt="Profile"
              className="w-full h-full object-cover block dark:hidden"
            />
            <img 
              src="/pictures/main_pic-dark.png" 
              alt="Profile"
              className="w-full h-full object-cover hidden dark:block"
            />
          </div>

          {/* Full Name */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 text-center leading-tight">
            John Ivan B. Belaro
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-sm">Irosin, Sorsogon</span>
          </div>
          
        </div>

        {/* Card 2: Educational Background */}
        <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300 flex-1">
          <h2 className="font-bold text-xl mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            Education
          </h2>
          
          {/* Timeline Container */}
          <div className="relative border-l-2 border-gray-200 dark:border-gray-600 ml-3">
            
            {/* Timeline Item 1 */}
            <div className="mb-6 pl-6 relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-[#1E293B]"></span>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">
                Bicol University College of Science
              </h3>
              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1 block">
                2022 - 2026
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Bachelor of Science in Information Technology
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="pl-6 relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white dark:border-[#1E293B]"></span>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">
                Daraga National High School
              </h3>
              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1 block">
                2020 - 2022
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Computer Systems Servicing
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* --- RIGHT COLUMN (Larger) --- */}
      <div className="col-span-1 lg:col-span-8 flex flex-col gap-2">
        
        {/* Main About Me Card */}
        <div className="bg-white dark:bg-[#1E293B] rounded-lg p-8 border border-gray-200 dark:border-gray-700 flex-1 transition-colors duration-300 flex flex-col justify-start">
          <h2 className="font-bold text-xl mb-4 text-gray-900 dark:text-white flex items-center gap-4">
            About Me
          </h2>
          
          <div className="space-y-6 text-base md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            <p>
              Hello! I'm John Ivan B. Belaro, a graduating Information Technology student and aspiring Full-Stack Developer from Bicol University.
            </p>
            <p>
              I enjoy building practical software solutions that solve real-world problems. My experience includes leading the development of iHealthLink, an Integrated Barangay Healthcare Management System, and contributing to DOCS 2.0 during my internship at DOST Region V as an Assistant Full-Stack Developer and UI/UX Designer.
            </p>
            <p>
              I primarily work with Laravel, Flutter, and modern web technologies, while continuously expanding my knowledge in system design, web development, and IT infrastructure. I'm passionate about creating applications that are reliable, scalable, and genuinely useful to the communities and organizations they serve.
            </p>
          </div>
        </div>

        {/* --- STATS GRID (Updated to 2x2) --- */}
        <div className="grid grid-cols-2 gap-2">
          
          {/* Total Projects */}
          <div className="bg-white dark:bg-[#1E293B] p-5 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Total Projects</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 12 12 17 22 12"></polyline>
                  <polyline points="2 17 12 22 22 17"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="bg-white dark:bg-[#1E293B] p-5 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">6</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Academic</p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Personal Projects */}
          <div className="bg-white dark:bg-[#1E293B] p-5 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Personal</p>
              </div>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-emerald-600 dark:text-emerald-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
            </div>
          </div>

          {/* Professional/Internship */}
          <div className="bg-white dark:bg-[#1E293B] p-5 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Professional</p>
              </div>
              <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}