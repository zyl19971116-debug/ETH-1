"use client";

import { motion } from "framer-motion";
import { archiveEntries } from "@/lib/mockData";

export default function Archive() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-32">
        <header className="text-center space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-[0.4em] uppercase font-display">
            THE HUMAN <br /> ARCHIVE
          </h1>
          <p className="text-xs md:text-sm tracking-[0.3em] text-secondary font-medium max-w-lg mx-auto leading-relaxed">
            WE DON&apos;T WANT HUMANITY TO BE FORGOTTEN.
          </p>
        </header>

        <div className="space-y-12">
          {archiveEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 md:p-12 border border-white/5 hover:border-white/10 transition-all bg-dark/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4 flex-grow">
                  <div className="text-[9px] tracking-[0.4em] text-secondary font-bold uppercase">
                    HUMAN #{entry.id}
                  </div>
                  <p className="text-lg md:text-2xl font-light tracking-wide leading-relaxed italic">
                    &quot;{entry.content}&quot;
                  </p>
                </div>
                <div className="text-[8px] tracking-[0.5em] text-secondary/30 font-bold vertical-text hidden md:block">
                  RECORDED IN TIME
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Infinite Scroll Placeholder */}
          <div className="py-20 text-center">
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] tracking-[0.8em] text-secondary font-bold uppercase"
            >
              LOADING MORE HUMANITY...
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
