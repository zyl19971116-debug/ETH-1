"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import QuestionFlow from "@/components/QuestionFlow";

export default function Contribute() {
  const [started, setStarted] = useState(false);

  if (started) {
    return <QuestionFlow />;
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-3xl md:text-6xl font-bold tracking-[0.4em] mb-6 font-display">
          GIVE US <br /> A PIECE OF YOU.
        </h1>
        <p className="text-xs md:text-sm tracking-[0.3em] text-secondary mb-12 uppercase">
          Answer a few questions. <br /> There are no right answers.
        </p>

        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl tracking-[0.5em] font-light font-display"
          >
            ARE YOU READY?
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStarted(true)}
            className="px-12 py-6 border border-white text-white text-xs tracking-[0.5em] font-bold uppercase hover:bg-white hover:text-black transition-all"
          >
            BEGIN
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
