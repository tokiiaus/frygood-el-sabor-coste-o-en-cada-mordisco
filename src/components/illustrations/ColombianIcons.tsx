import React from 'react';
import { motion } from 'framer-motion';
export const PapaIcon = ({ className }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ rotate: -5 }}
    animate={{ rotate: 5 }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "mirror" }}
  >
    <path
      d="M20,50 C20,30 40,20 60,20 C80,20 90,40 90,60 C90,80 70,90 40,90 C20,90 20,70 20,50"
      fill="#FBBF24"
      stroke="#EA580C"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="40" cy="45" r="2" fill="#EA580C" />
    <circle cx="65" cy="55" r="2" fill="#EA580C" />
    <circle cx="50" cy="70" r="2" fill="#EA580C" />
  </motion.svg>
);
export const PataconIcon = ({ className }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ scale: 0.95 }}
    animate={{ scale: 1.05 }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "mirror" }}
  >
    <path
      d="M10,50 A40,40 0 1,0 90,50 A40,40 0 1,0 10,50"
      fill="#EAB308"
      stroke="#854D0E"
      strokeWidth="4"
      strokeDasharray="4 2"
    />
    <path
      d="M30,35 Q50,30 70,35 M25,55 Q50,50 75,55 M35,75 Q50,70 65,75"
      fill="none"
      stroke="#854D0E"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </motion.svg>
);
export const PalmIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50,90 Q45,60 50,30" stroke="#78350F" strokeWidth="4" fill="none" />
    <g fill="#15803D">
      <path d="M50,30 Q70,10 90,35 Q70,25 50,30" />
      <path d="M50,30 Q30,10 10,35 Q30,25 50,30" />
      <path d="M50,30 Q80,25 85,55 Q65,40 50,30" />
      <path d="M50,30 Q20,25 15,55 Q35,40 50,30" />
    </g>
  </svg>
);