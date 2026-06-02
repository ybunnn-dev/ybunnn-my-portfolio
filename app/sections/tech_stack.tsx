"use client";

import React from "react";

const techCategories = [
  {
    category: "Front-End",
    tools: [
      { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600" },
      { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600" },
      { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
    ]
  },
  {
    category: "Back-End",
    tools: [
      { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600" },
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", color: "bg-green-50 dark:bg-green-900/20 text-green-600" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600" },
      { name: "MariaDB", icon: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg", color: "bg-slate-100 dark:bg-slate-800/50 text-slate-600" },
      { name: "SQLite", icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg", color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600" },
    ]
  },
  {
    category: "Frameworks",
    tools: [
      { name: "Laravel", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg", color: "bg-red-50 dark:bg-red-900/20 text-red-600" },
      { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", color: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" },
      { name: "Flutter", icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg", color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-500" },
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", color: "bg-sky-50 dark:bg-sky-900/20 text-sky-500" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", color: "bg-teal-50 dark:bg-teal-900/20 text-teal-500" },
    ]
  },
  {
    category: "Others",
    tools: [
      { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600" },
      { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600" },
      { name: "Dart", icon: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg", color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600" },
      { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", color: "bg-red-50 dark:bg-red-900/20 text-red-600" },
      { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
    ]
  }
];

export default function TechStack() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16">
      
      {/* Centered Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          Tech Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto font-medium">
          Collection of the technologies and tools I utilize to build scalable, responsive, and practical software solutions.
        </p>
      </div>

      {/* 2x2 Grid for Categories on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {techCategories.map((categoryGroup, index) => (
          <div key={index} className="w-full">
            
            {/* Category Sub-Header */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {categoryGroup.category}
              </h3>
            </div>

            {/* Tools Grid - strictly 3 columns */}
            <div className="grid grid-cols-3 gap-4">
              {categoryGroup.tools.map((tool, toolIndex) => (
                <div 
                  key={toolIndex}
                  className="bg-white dark:bg-[#1E293B] rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col items-center justify-center transition-all duration-200 hover:border-cyan-300 dark:hover:border-cyan-700 group aspect-square"
                >
                  {/* Icon Container */}
                  <div className={`w-12 h-12 mb-3 ${tool.color} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 p-2`}>
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  {/* Tool Name */}
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-xs text-center truncate w-full">
                    {tool.name}
                  </h4>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
}