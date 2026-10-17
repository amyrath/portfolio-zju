'use client';

import React from 'react';

interface CreativeLogoProps {
  className?: string;
  size?: number;
}

/**
 * Creative Camera Diaphragm & Stylized 'A' Logo
 * Inspired by Creative Technology, Cinema Camera Aperture, and Optical Focal Point.
 */
export default function CreativeLogo({ className = 'w-9 h-9', size = 36 }: CreativeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-500 group-hover:rotate-45 ${className}`}
      aria-label="Amyrath CHAKRAN Creative Lens Logo"
    >
      {/* Outer Floating Diaphragm Ring with Calibration Ticks */}
      <circle
        cx="32"
        cy="32"
        r="27"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeDasharray="3 2"
        className="opacity-45"
      />
      <circle
        cx="32"
        cy="32"
        r="23"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* Six Organic Camera Aperture Iris Blades */}
      <path
        d="M32 9 L38 23"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M51 20 L40 28"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M51 44 L39 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M32 55 L26 41"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 44 L24 36"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 20 L25 26"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Central Geometric 'A' Lens Silhouette */}
      <path
        d="M32 19 L23.5 38 L28 38 L32 28.5 L36 38 L40.5 38 Z"
        fill="currentColor"
      />
      {/* Optical Prism Bar */}
      <rect
        x="27"
        y="33.5"
        width="10"
        height="1.8"
        rx="0.9"
        fill="#FF8B71"
      />
      {/* Floating Center Focal Dot */}
      <circle
        cx="32"
        cy="25.5"
        r="2.2"
        fill="#FF8B71"
      />
    </svg>
  );
}
