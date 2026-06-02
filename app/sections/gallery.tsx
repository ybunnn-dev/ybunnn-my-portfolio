"use client";

import React, { useState, useEffect } from "react";

export default function Gallery() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16">
      
      {/* Centered Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          Gallery
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto font-medium">
          A collection of moments, events, and highlights.
        </p>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white dark:bg-[#1E293B] rounded-2xl p-8 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center min-h-[400px] transition-colors duration-300">
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Gallery content coming soon...
        </p>
      </div>
      
    </div>
  );
}