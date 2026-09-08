"use client";

import { useEffect, useRef, useState } from 'react';
import { useAccount, useConnect, useConnectors, useDisconnect, useSwitchChain } from 'wagmi';
import { ArrowUpRight, Check, ChevronDown, Feather, Loader2, LogOut, Wallet, X } from 'lucide-react';
import { robinhoodMainnet } from '@/lib/chains';

export default function WalletConnectButton() {
  const { address, isConnected, chainId } = useAccount();
  const connectors = useConnectors();
  const connection = useConnect();
  const { disconnect } = useDisconnect();
  const switching = useSwitchChain();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const connected = ready && isConnected;
  const correctChain = connected && chainId === robinhoodMainnet.id;
  const busy = connection.isPending || switching.isPending;

  useEffect(() => setReady(true), []);
  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  function showError(error: unknown) {
    const detail = error instanceof Error ? error.message : '';
    setMessage(/reject|denied|cancel/i.test(detail)
      ? 'Request cancelled. You can try again.'
      : /not found|not installed|provider/i.test(detail)
        ? 'No browser wallet found. Install an EVM wallet, then refresh this page.'
        : 'Unable to complete the request. Open your wallet and try again.');
  }

  return (
    <div ref={root} className="relative flex items-center gap-3">
      <div title="Robinhood Mainnet · ETH" className="hidden sm:flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-3 py-2 text-lime-300">
        <Feather size={16} aria-hidden="true" />
        <span className="text-[9px] font-semibold tracking-[0.12em] uppercase">Robinhood Mainnet</span>
      </div>
      <button ref={trigger} type="button" disabled={!ready} aria-expanded={open} aria-controls="wallet-panel" onClick={() => { setOpen(!open); setMessage(''); }} className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-[10px] font-semibold tracking-wider text-white transition hover:border-lime-300/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-300 disabled:opacity-50">
        <Wallet size={15} aria-hidden="true" />
        <span>{connected && address ? `${address.slice(0, 6)}…${address.slice(-4)}` : 'Connect Wallet'}</span>
        <ChevronDown size={13} aria-hidden="true" />
      </button>
      {open && (
        <section id="wallet-panel" aria-label="Wallet connection" className="absolute right-0 top-full mt-3 w-[min(340px,calc(100vw-32px))] rounded-2xl border border-white/15 bg-[#101210] p-5 shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-semibold">{connected ? 'Your wallet' : 'Connect a wallet'}</h2>
            <button type="button" aria-label="Close wallet panel" onClick={() => { setOpen(false); trigger.current?.focus(); }} className="rounded p-1 text-white/60 hover:text-white"><X size={17} /></button>
          </div>
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-lime-300/15 bg-lime-300/5 p-3">
            <Feather size={23} className="shrink-0 text-lime-300" aria-hidden="true" />
            <div><p className="text-xs font-semibold text-lime-300">Robinhood Mainnet</p><p className="mt-1 text-[11px] text-white/50">{correctChain ? 'Connected to network' : 'Network · ETH'}</p></div>
            {correctChain && <Check size={16} className="ml-auto text-lime-300" aria-label="Connected" />}
          </div>
          {connected ? (
            <div className="space-y-3">
              <p className="break-all text-xs leading-5 text-white/70">{address}</p>
              {!correctChain && <><p className="text-xs text-amber-300">Switch your wallet to Robinhood Mainnet.</p><button type="button" disabled={busy} onClick={async () => { setMessage(''); try { await switching.switchChainAsync({ chainId: robinhoodMainnet.id }); } catch (error) { showError(error); } }} className="w-full rounded-lg bg-lime-300 px-3 py-3 text-xs font-semibold text-black disabled:opacity-50">{switching.isPending ? 'Confirm in your wallet…' : 'Switch to Robinhood Mainnet'}</button></>}
              <a href={`${robinhoodMainnet.blockExplorers.default.url}/address/${address}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2 text-xs text-white/70 hover:text-white">View on explorer <ArrowUpRight size={15} /></a>
              <button type="button" disabled={busy} onClick={() => { disconnect(); setMessage(''); }} className="flex w-full items-center justify-between rounded-lg border border-white/15 p-3 text-xs hover:bg-white/5 disabled:opacity-50">Disconnect <LogOut size={15} /></button>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="mb-3 text-xs leading-5 text-white/50">Choose your browser wallet to continue.</p>
              {connectors.map(connector => <button type="button" key={connector.uid} disabled={busy} onClick={async () => {
                setMessage('');
                try {
                  if (!await connector.getProvider()) { setMessage('No browser wallet found. Install an EVM wallet, then refresh this page.'); return; }
                  await connection.connectAsync({ connector });
                } catch (error) { showError(error); }
              }} className="flex w-full items-center gap-3 rounded-xl border border-white/15 p-3 text-left text-xs transition hover:border-lime-300/50 hover:bg-white/5 disabled:opacity-50">
                <Wallet size={18} className="text-lime-300" />{connector.id === 'injected' ? 'Browser Wallet' : connector.name}<ArrowUpRight size={14} className="ml-auto text-white/40" />
              </button>)}
              {connectors.length === 0 && <p className="text-xs text-white/60">Install an EVM browser wallet, then refresh this page.</p>}
              {connection.isPending && <p role="status" className="flex items-center gap-2 pt-2 text-xs text-lime-300"><Loader2 size={14} className="animate-spin" />Confirm in your wallet…</p>}
              <p className="pt-3 text-[11px] leading-5 text-white/40">Connecting does not initiate a transaction.</p>
            </div>
          )}
          {message && <p role="alert" className="mt-4 rounded-lg bg-amber-300/10 p-3 text-xs leading-5 text-amber-200">{message}</p>}
        </section>
      )}
    </div>
  );
}
