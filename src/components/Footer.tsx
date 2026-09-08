"use client";

import Link from "next/link";
import { Twitter, Disc as Discord, MessageCircle as Telegram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="text-2xl font-bold tracking-[0.2em]">
              HUMAN<span className="text-secondary opacity-50">//</span>ONE
            </div>
            <p className="text-sm tracking-[0.2em] text-secondary max-w-sm leading-relaxed">
              ONE MIND. MILLIONS OF HUMANS.<br />
              THE HUMAN EXPERIMENT.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Discord className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Telegram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] font-bold uppercase text-white">PROJECT</h4>
            <ul className="space-y-4">
              <li><Link href="/why" className="text-[10px] tracking-[0.3em] text-secondary hover:text-white transition-colors uppercase">WHY</Link></li>
              <li><Link href="/contribute" className="text-[10px] tracking-[0.3em] text-secondary hover:text-white transition-colors uppercase">CONTRIBUTE</Link></li>
              <li><Link href="/collective" className="text-[10px] tracking-[0.3em] text-secondary hover:text-white transition-colors uppercase">COLLECTIVE</Link></li>
              <li><Link href="/mind" className="text-[10px] tracking-[0.3em] text-secondary hover:text-white transition-colors uppercase">THE MIND</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] font-bold uppercase text-white">COMMUNITY</h4>
            <ul className="space-y-4">
              <li><Link href="/talk" className="text-[10px] tracking-[0.3em] text-secondary hover:text-white transition-colors uppercase">TALK</Link></li>
              <li><Link href="/archive" className="text-[10px] tracking-[0.3em] text-secondary hover:text-white transition-colors uppercase">ARCHIVE</Link></li>
              <li><a href="#" className="text-[10px] tracking-[0.3em] text-secondary hover:text-white transition-colors uppercase">X / TWITTER</a></li>
              <li><a href="#" className="text-[10px] tracking-[0.3em] text-secondary hover:text-white transition-colors uppercase">DISCORD</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[8px] tracking-[0.4em] text-secondary/50 font-bold uppercase">
            BUILT BY HUMANS. SHAPED BY HUMANS. FOR HUMANITY.
          </div>
          <div className="text-[8px] tracking-[0.4em] text-secondary/50 font-mono">
            © 2026 HUMAN//ONE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
