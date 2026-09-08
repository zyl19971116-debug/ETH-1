"use client";
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
const address = '0x8e2a2edeb9ea393e66f697f2860bedeb0b61f7fc';
export default function TokenPanel() {
 const [copied,setCopied]=useState(false); const [error,setError]=useState(false);
 return <section aria-label="Token contract" className="border-y border-white/10 bg-[#0b0e0c] px-6 py-8 md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center"><div><p className="text-[10px] tracking-[.3em] text-lime-300">HUMAN//ONE TOKEN</p><p className="mt-2 text-xs text-white/45">CONTRACT ADDRESS</p></div><div className="flex min-w-0 items-center gap-4"><code className="select-all break-all text-xs leading-6 text-white/80 md:text-sm">{address}</code><button aria-label="Copy token contract address" onClick={async()=>{try{await navigator.clipboard.writeText(address);setCopied(true);setError(false);}catch{setError(true);}}} className="shrink-0 rounded-full border border-white/20 p-3 hover:border-lime-300">{copied?<Check size={16} className="text-lime-300"/>:<Copy size={16}/>}</button></div><p role="status" className="text-xs text-white/50">{error?'Select the address to copy manually.':copied?'Address copied':''}</p></div></section>;
}
