"use client";

import { motion } from "framer-motion";
import { humanityMindStats, globalBeliefs } from "@/lib/mockData";

export default function Mind() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-32">
        <header className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold tracking-[0.4em] uppercase font-display"
          >
            THE MIND
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[9px] md:text-[10px] tracking-[0.5em] text-secondary uppercase font-bold"
          >
            WHAT DOES HUMANITY BELIEVE?
          </motion.p>
        </header>

        {/* Humanity Personality Status */}
        <section className="space-y-12">
          <h2 className="text-[9px] tracking-[0.5em] text-secondary font-bold uppercase border-b border-white/10 pb-4">
            CURRENT PERSONALITY STATE
          </h2>
          <div className="space-y-8">
            {humanityMindStats.map((stat, i) => (
              <div key={stat.name} className="space-y-2">
                <div className="flex justify-between items-end text-[9px] tracking-widest font-mono">
                  <span>{stat.name}</span>
                  <span>{stat.value}%</span>
                </div>
                <div className="h-[1px] w-full bg-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Beliefs / Voting */}
        <section className="space-y-16">
          <h2 className="text-[9px] tracking-[0.5em] text-secondary font-bold uppercase border-b border-white/10 pb-4">
            GLOBAL BELIEFS
          </h2>
          <div className="space-y-24">
            {globalBeliefs.map((belief) => (
              <div key={belief.question} className="space-y-12">
                <h3 className="text-lg md:text-2xl font-bold tracking-[0.2em] text-center font-display">
                  {belief.question}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <VoteBar label="YES" value={belief.yes} />
                  <VoteBar label="NO" value={belief.no} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function VoteBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end text-[10px] tracking-[0.4em] font-bold">
        <span>{label}</span>
        <span className="font-mono">{value}%</span>
      </div>
      <div className="h-12 md:h-16 bg-white/5 relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: value / 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="absolute inset-0 bg-white opacity-20"
        />
        <div className="absolute inset-0 border border-white/10" />
      </div>
    </div>
  );
}
