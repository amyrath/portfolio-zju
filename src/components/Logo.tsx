'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

/**
 * Minimalist Camera Iris & Kinetic Prism Logo for Amyrath
 * Contrast: Dark Brown (#470E0B) in day mode, Butter Yellow (#FFFDB6) in night mode.
 */
export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 group cursor-pointer ${className}`}>
      {/* Minimalist Floating Camera Iris & Kinetic Prism Symbol */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/20 dark:border-[#FFFDB6]/20 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-[#FF8B71] transition-all duration-300 shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#470E0B] dark:text-[#FFFDB6] transition-transform duration-500 group-hover:rotate-90"
        >
          {/* Smooth Fluid Outer Lens Ring */}
          <circle
            cx="24"
            cy="24"
            r="19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeDasharray="4 2"
            className="opacity-40"
          />
          <circle
            cx="24"
            cy="24"
            r="15.5"
            stroke="currentColor"
            strokeWidth="2.2"
          />

          {/* Minimalist Camera Aperture Iris Curved Blades */}
          <path
            d="M24 8.5 C27 15, 33 18, 36 21"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M39.5 24 C33 27, 30 33, 27 36"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M24 39.5 C21 33, 15 30, 12 27"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8.5 24 C15 21, 18 15, 21 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Kinetic Prism Trajectory passing through center */}
          <line
            x1="13"
            y1="35"
            x2="35"
            y2="13"
            stroke="#FF8B71"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Central Floating Focal Core (Stylized Aperture Center) */}
          <circle
            cx="24"
            cy="24"
            r="3"
            fill="currentColor"
          />
          <circle
            cx="24"
            cy="24"
            r="1.3"
            fill="#FFFDB6"
            className="dark:fill-[#250705]"
          />
        </svg>
      </div>

      {/* Refined Sleek Name: Amyrath */}
      {showText && (
        <div className="flex flex-col text-left min-w-0">
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#470E0B] dark:text-[#FFFDB6] group-hover:text-[#FF8B71] transition-colors leading-tight">
            Amyrath
          </span>
          <span className="hidden sm:block text-[9px] font-mono font-bold text-[#470E0B]/60 dark:text-[#FFFDB6]/60 tracking-wider">
            Folabi · Creative Tech
          </span>
        </div>
      )}
    </div>
  );
}
