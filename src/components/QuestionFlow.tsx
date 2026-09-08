"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/mockData";

export default function QuestionFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (!inputValue.trim()) return;

    const newAnswers = { ...answers, [questions[currentStep].id]: inputValue };
    setAnswers(newAnswers);
    setInputValue("");

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Completed all questions
      router.push("/analysis");
    }
  };

  const handleSkip = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setInputValue("");
    } else {
      router.push("/analysis");
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 md:px-12 py-20">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="max-w-4xl w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs md:text-sm font-mono tracking-widest text-secondary">
                {String(currentStep + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}
              </span>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>

            <h2 className="text-2xl md:text-5xl font-bold tracking-[0.2em] leading-tight uppercase font-display">
              {questions[currentStep].question}
            </h2>

            <div className="relative group">
              <textarea
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={questions[currentStep].placeholder}
                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-4 text-lg md:text-xl font-light tracking-wide transition-colors resize-none h-32 md:h-48"
              />
              <div className="absolute bottom-4 right-0 text-[10px] tracking-widest text-secondary font-mono">
                {inputValue.length} CHARS
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <button
                disabled={!inputValue.trim()}
                onClick={handleNext}
                className="w-full md:w-auto px-12 py-6 bg-white text-black text-xs tracking-[0.5em] font-bold uppercase disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              >
                CONTINUE
              </button>
              
              <button
                onClick={handleSkip}
                className="text-[10px] tracking-[0.5em] text-secondary hover:text-white transition-colors uppercase py-4"
              >
                SKIP QUESTION
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
