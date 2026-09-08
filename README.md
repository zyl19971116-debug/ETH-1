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

## The Human Core

/talk is an interactive particle artwork. Input changes form locally using keyword rules; this is not sentiment analysis or an AI response. It works without keys. Session messages live in component memory and are cleared on reload/reset. Reduced motion and pause controls are supported.

Optional AI uses server-only OPENAI_API_KEY and OPENAI_MODEL with the Responses API. Configure persistent rate limits for POST /api/core (e.g. in the deployment gateway) and provider spending limits before setting CORE_RATE_LIMIT_CONFIGURED=true and CORE_AI_ENABLED=true. Requests use at most 12 recent turns, have size/output/time limits and store:false. This does not imply zero retention by the provider. No API keys are sent to the browser. Without configuration, no message is transmitted by visual mode.

The home page shows the owner-provided token address verbatim; its network and on-chain token metadata have not been verified.
