"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import WalletConnectButton from "./WalletConnectButton";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "WHY", href: "/why" },
  { name: "CONTRIBUTE", href: "/contribute" },
  { name: "COLLECTIVE", href: "/collective" },
  { name: "THE MIND", href: "/mind" },
  { name: "THE CORE", href: "/talk" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-5 px-4 sm:px-6 xl:px-12 flex items-center justify-between",
        scrolled ? "bg-black/95 backdrop-blur-md py-4" : "bg-transparent"
      )}
    >
      <Link href="/" className="group flex items-center gap-2 sm:gap-4">
        <Logo />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden sm:flex text-base xl:text-xl font-bold tracking-[0.2em] items-center gap-2"
        >
          <span>HUMAN</span>
          <span className="text-secondary group-hover:text-white transition-colors">//</span>
          <span>ONE</span>
        </motion.div>
      </Link>

      <div className="hidden xl:flex items-center gap-5">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative text-[10px] tracking-[0.3em] font-medium text-secondary hover:text-white transition-colors"
          >
            {link.name}
            {pathname === link.href && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-white"
              />
            )}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <WalletConnectButton />
      </div>
    </nav>
  );
}
