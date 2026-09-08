import { defineChain } from 'viem';

// https://docs.robinhood.com/chain/connecting/
export const robinhoodMainnet = defineChain({
  id: 4663,
  name: 'Robinhood Mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: ['https://rpc.mainnet.chain.robinhood.com'] } },
  blockExplorers: { default: { name: 'Blockscout', url: 'https://robinhoodchain.blockscout.com' } },
});
