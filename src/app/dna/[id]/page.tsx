"use client";

import { motion } from "framer-motion";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { Share2, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const dnaData = [
  { subject: 'LOVE', A: 82, fullMark: 100 },
  { subject: 'FEAR', A: 64, fullMark: 100 },
  { subject: 'CURIOSITY', A: 91, fullMark: 100 },
  { subject: 'EMPATHY', A: 83, fullMark: 100 },
  { subject: 'REBELLION', A: 48, fullMark: 100 },
  { subject: 'HOPE', A: 88, fullMark: 100 },
  { subject: 'GREED', A: 22, fullMark: 100 },
];

export default function DnaResult() {
  const params = useParams<{ id: string }>();
  const humanId = params.id || "082931";

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Visualization */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square w-full max-w-lg mx-auto"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full border border-white/5 rounded-full animate-pulse-slow" />
            <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-pulse-slow delay-700" />
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dnaData}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#777', fontSize: 10, letterSpacing: 2 }}
              />
              <Radar
                name="Human DNA"
                dataKey="A"
                stroke="#fff"
                fill="#fff"
                fillOpacity={0.1}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Right: Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <header className="space-y-4">
            <h2 className="text-[10px] tracking-[0.5em] text-secondary font-bold uppercase">
              HUMAN IDENTITY
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] font-display">
              HUMAN #{humanId}
            </h1>
          </header>

          <div className="space-y-8">
            <section className="space-y-2">
              <h3 className="text-[8px] tracking-[0.5em] text-secondary font-bold uppercase">
                CORE BELIEF
              </h3>
              <p className="text-lg md:text-xl font-light italic tracking-wide">
                &quot;Freedom is worth uncertainty.&quot;
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-[8px] tracking-[0.5em] text-secondary font-bold uppercase">
                YOUR LAST WORD
              </h3>
              <p className="text-lg md:text-xl font-light italic tracking-wide">
                &quot;I hope someone remembers that we tried.&quot;
              </p>
            </section>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-[8px] tracking-[0.5em] text-secondary font-bold uppercase mb-2">
                CONTRIBUTION
              </h3>
              <p className="text-2xl font-mono font-bold">0.000013%</p>
            </div>
            <div>
              <h3 className="text-[8px] tracking-[0.5em] text-secondary font-bold uppercase mb-2">
                STATUS
              </h3>
              <p className="text-2xl font-mono font-bold">PART OF ONE</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-black text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-opacity-90 transition-all">
              <Download className="w-4 h-4" /> SAVE ID
            </button>
            <button className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-[10px] tracking-[0.4em] font-bold uppercase hover:border-white transition-all">
              <Share2 className="w-4 h-4" /> SHARE HUMAN
            </button>
          </div>
          
          <div className="pt-8">
            <Link href="/collective" className="group flex items-center gap-4 text-[10px] tracking-[0.5em] font-bold uppercase">
              JOIN THE COLLECTIVE <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
