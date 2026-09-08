"use client";
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
const address = '0x8e2a2edeb9ea393e66f697f2860bedeb0b61f7fc';
export default function TokenPanel() {
 const [copied,setCopied]=useState(false); const [error,setError]=useState(false);
 return <section aria-label="Token contract" className="border-y border-white/10 bg-black px-6 py-7 md:px-12"><div className="mx-auto grid max-w-7xl items-center gap-5 lg:grid-cols-[1fr_auto]"><div className="flex items-center gap-5"><span aria-hidden="true" className="font-mono text-[9px] text-white/25">[ 01 ]</span><div><p className="text-[10px] tracking-[.35em] text-white/80">HUMAN//ONE TOKEN</p><p className="mt-2 text-[8px] tracking-[.25em] text-white/40">CONTRACT / ONCHAIN IDENTITY</p></div></div><div><div className="flex min-w-0 items-center gap-4 border-l border-white/15 pl-5"><code className="select-all break-all text-[11px] leading-6 tracking-wider text-white/60 md:text-xs">{address}</code><button aria-label="Copy token contract address" onClick={async()=>{try{await navigator.clipboard.writeText(address);setCopied(true);setError(false);}catch{setError(true);}}} className="shrink-0 border border-white/20 p-3 transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-white">{copied?<Check size={14}/>:<Copy size={14}/>}</button></div><p role="status" className="pl-5 text-[10px] text-white/50">{error?'Select the address to copy manually.':copied?'Address copied':''}</p></div></div></section>;
}
