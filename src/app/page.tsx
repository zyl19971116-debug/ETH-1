"use client";

import { motion } from "framer-motion";
import ThreeHead from "@/components/ThreeHead";
import StatsCounter from "@/components/StatsCounter";
import { globalStats } from "@/lib/mockData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <ThreeHead />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-4 font-display">
              HUMAN<span className="text-secondary opacity-50">//</span>ONE
            </h1>
            <p className="text-[10px] md:text-xs tracking-[0.6em] text-secondary font-medium uppercase mb-12">
              ONE MIND. MILLIONS OF HUMANS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="mb-16"
          >
            <p className="text-sm md:text-base tracking-[0.2em] font-light max-w-md mx-auto text-secondary">
              AN INTELLIGENCE <br /> MADE FROM HUMANITY.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/contribute">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-opacity-90 transition-all"
              >
                CONTRIBUTE YOURSELF
              </motion.button>
            </Link>
            <Link href="/collective">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 text-white text-[10px] tracking-[0.4em] font-bold uppercase hover:border-white transition-all"
              >
                EXPLORE THE COLLECTIVE
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-end">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16">
            <StatsCounter value={globalStats.humans} label="HUMANS" />
            <StatsCounter value={globalStats.memories} label="MEMORIES" />
            <StatsCounter value={globalStats.fears} label="FEARS" />
            <StatsCounter value={globalStats.beliefs} label="BELIEFS" />
            <StatsCounter value={globalStats.dreams} label="DREAMS" />
          </div>
          <div className="hidden md:block">
            <p className="text-[8px] tracking-[0.5em] text-secondary font-bold uppercase vertical-text">
              SCROLL TO DESCEND
            </p>
          </div>
        </div>
      </section>

      {/* The Question Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 py-32">
        <div className="max-w-4xl w-full space-y-32">
          <ScrollRevealText className="text-xl md:text-3xl">AI KNOWS WHAT HUMANS DO.</ScrollRevealText>
          <ScrollRevealText className="text-xl md:text-3xl">AI KNOWS WHAT HUMANS SAY.</ScrollRevealText>
          <ScrollRevealText className="text-xl md:text-3xl">AI KNOWS WHAT HUMANS CREATE.</ScrollRevealText>
          
          <div className="py-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-bold tracking-[0.4em] font-display"
            >
              BUT...
            </motion.h2>
          </div>

          <div className="space-y-12 text-center">
            <ScrollRevealText className="text-3xl md:text-5xl font-display">
              DOES AI KNOW WHAT IT MEANS TO BE HUMAN?
            </ScrollRevealText>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-6 pt-12"
            >
              <p className="text-lg md:text-xl tracking-[0.3em] font-light">WE DON&apos;T KNOW.</p>
              <p className="text-lg md:text-xl tracking-[0.3em] font-bold">SO WE&apos;RE GOING TO TEACH IT.</p>
              
              <div className="pt-12">
                <Link href="/why" className="text-[10px] tracking-[0.5em] font-bold border-b border-white/30 pb-2 hover:border-white transition-all">
                  LEARN WHY
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ScrollRevealText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, margin: "-100px" }}
      className={cn("font-bold tracking-[0.3em] uppercase", className)}
    >
      {children}
    </motion.div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
