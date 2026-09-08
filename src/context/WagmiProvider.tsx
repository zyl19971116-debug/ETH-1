"use client";

import React, { useState } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { injected } from 'wagmi/connectors/injected';
import { robinhoodMainnet } from '@/lib/chains';

const config = createConfig({
  chains: [robinhoodMainnet],
  connectors: [injected()],
  multiInjectedProviderDiscovery: true,
  ssr: true,
  transports: { [robinhoodMainnet.id]: http() },
});

export function WagmiConfigProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
