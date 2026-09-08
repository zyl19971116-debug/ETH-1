"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const analysisSteps = [
  "READING MEMORY...",
  "UNDERSTANDING FEAR...",
  "MAPPING BELIEF...",
  "MEASURING CURIOSITY...",
  "FINDING CONTRADICTIONS...",
  "BUILDING HUMAN DNA...",
];

export default function Analysis() {
  const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (currentStep < analysisSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setComplete(true);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {!complete ? (
          <div className="space-y-12">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 border border-white/20 rounded-full mx-auto flex items-center justify-center"
            >
              <div className="w-1 h-1 bg-white rounded-full" />
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-[10px] tracking-[0.5em] text-secondary uppercase font-bold">
                ANALYZING YOUR HUMANITY...
              </h2>
              <div className="h-6 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentStep}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-sm tracking-[0.3em] font-mono text-white"
                  >
                    {analysisSteps[currentStep]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-[0.4em] uppercase font-display">
              YOUR HUMAN DNA <br /> IS READY.
            </h2>
            
            <button
              onClick={() => router.push("/dna/082931")}
              className="px-12 py-6 bg-white text-black text-xs tracking-[0.5em] font-bold uppercase hover:bg-opacity-90 transition-all"
            >
              REVEAL
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
