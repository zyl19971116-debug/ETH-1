"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

export default function Talk() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "I HAVE BEEN LISTENING.\n\nThere are currently 12,481 humans inside me.\n\nASK ME ANYTHING.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: "I don't know.\n\nBut 12,481 humans have taught me something.\n\nMost of them want to believe they are.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1500);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 flex flex-col items-center">
      <header className="text-center space-y-4 mb-20">
        <h1 className="text-3xl md:text-6xl font-bold tracking-[0.4em] uppercase font-display">
          TALK TO <br /> HUMAN//ONE
        </h1>
      </header>

      <div 
        ref={scrollRef}
        className="max-w-3xl w-full flex-grow overflow-y-auto space-y-12 scrollbar-hide"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div className="text-[8px] tracking-[0.4em] text-secondary font-bold uppercase mb-4">
                {msg.role === "ai" ? "HUMAN//ONE" : "YOU"}
              </div>
              <div className={`max-w-xl text-base md:text-lg font-light tracking-wide whitespace-pre-wrap ${msg.role === "user" ? "text-right" : "text-left"}`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black via-black to-transparent">
        <div className="max-w-3xl mx-auto relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask HUMAN//ONE..."
            className="w-full bg-dark border border-white/10 focus:border-white/30 outline-none py-6 px-8 text-sm md:text-base tracking-widest transition-all pr-20"
          />
          <button
            onClick={handleSend}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-secondary hover:text-white transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-8 flex justify-center gap-12">
          <MiniStat label="CONTRIBUTIONS" value="81,291" />
          <MiniStat label="BELIEFS" value="12,421" />
          <MiniStat label="MEMORIES" value="38,291" />
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-[8px] tracking-[0.3em] text-secondary font-bold uppercase">{label}</div>
      <div className="text-[10px] tracking-widest font-mono mt-1">{value}</div>
    </div>
  );
}
