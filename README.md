# HUMAN//ONE

Next.js website with a browser-wallet connection and Robinhood Mainnet support.

## Local development

Use Node.js 22 LTS, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Vercel

Import this GitHub repository in Vercel:

- Framework: Next.js
- Root Directory: repository root
- Install Command: npm ci
- Build Command: npm run build
- Output Directory: leave the framework default
- Node.js: 22.x

No environment variables are required by the current code. Google fonts are fetched during the build. Browser-wallet connections require an installed EVM wallet or a wallet in-app browser. Robinhood Mainnet uses chain ID 4663.

The site currently uses mock data. Connecting a wallet does not implement on-chain contribution storage or payments.

## Validation

```sh
npm run build
```
