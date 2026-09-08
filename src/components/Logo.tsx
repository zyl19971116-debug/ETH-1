"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 md:w-10 md:h-10"
    >
      <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      <path
        d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20ZM50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25C63.8071 25 75 36.1929 75 50C75 63.8071 63.8071 75 50 75Z"
        fill="white"
      />
      <circle cx="50" cy="50" r="10" fill="white">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </motion.svg>
  );
}
