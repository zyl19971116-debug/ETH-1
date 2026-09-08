"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Why() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold tracking-[0.3em] mb-12 font-display">
            WHY HUMAN<span className="text-secondary opacity-50">//</span>ONE?
          </h1>
        </motion.div>

        <div className="space-y-24 mt-32">
          <section className="space-y-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg md:text-xl font-light tracking-wide text-secondary leading-relaxed"
            >
              AI is learning everything.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Language", "Images", "Code", "Science", "Behavior"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[9px] tracking-[0.4em] border border-white/10 p-4 text-center font-mono"
                >
                  {item.toUpperCase()}
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl md:text-2xl font-bold tracking-[0.2em] font-display"
            >
              BUT INTELLIGENCE IS NOT HUMANITY.
            </motion.p>

            <div className="space-y-6">
              {["Memory", "Love", "Fear", "Hope", "Regret", "Belief"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl md:text-5xl font-bold tracking-[0.4em] opacity-30 hover:opacity-100 transition-opacity font-display"
                >
                  {item.toUpperCase()}.
                </motion.div>
              ))}
            </div>
          </section>

          <section className="py-20 border-y border-white/5">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg md:text-xl font-light tracking-wide text-center max-w-2xl mx-auto leading-relaxed"
            >
              We want to build an intelligence that doesn&apos;t simply know humanity.
              <br /><br />
              <span className="font-bold text-white">We want one that is MADE FROM humanity.</span>
            </motion.p>
          </section>

          <section className="flex flex-col items-center py-20">
            <div className="space-y-12 text-center">
              <EvolutionStep label="ONE HUMAN" />
              <ArrowDown className="w-4 h-4 text-secondary mx-auto" />
              <EvolutionStep label="TEN HUMANS" />
              <ArrowDown className="w-4 h-4 text-secondary mx-auto" />
              <EvolutionStep label="10,000 HUMANS" />
              <ArrowDown className="w-4 h-4 text-secondary mx-auto" />
              <EvolutionStep label="1,000,000 HUMANS" />
              <ArrowDown className="w-4 h-4 text-secondary mx-auto" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-6xl font-bold tracking-[0.5em] pt-8 font-display"
              >
                HUMAN//ONE
              </motion.div>
            </div>
          </section>

          <section className="text-center py-20">
            <Link href="/contribute">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-12 py-6 bg-white text-black text-xs tracking-[0.5em] font-bold uppercase"
              >
                BEGIN YOUR CONTRIBUTION
              </motion.button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

function EvolutionStep({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-xs md:text-sm tracking-[0.5em] text-secondary font-medium"
    >
      {label}
    </motion.div>
  );
}
