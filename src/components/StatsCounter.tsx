"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface StatsCounterProps {
  value: number;
  label: string;
}

export default function StatsCounter({ value, label }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const count = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return count.onChange((v) => setDisplayValue(v));
  }, [count]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="text-xl md:text-2xl font-bold tracking-tighter font-mono">
        {displayValue.toLocaleString()}
      </div>
      <div className="text-[8px] md:text-[10px] tracking-[0.4em] text-secondary font-medium uppercase">
        {label}
      </div>
    </div>
  );
}
