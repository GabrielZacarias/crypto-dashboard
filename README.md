# Crypto Dashboard

A high-performance cryptocurrency dashboard built with Next.js, React, and TypeScript. Displays real-time price data for the top 10 cryptocurrencies by market cap using the CoinGecko API.

🔗 **Live Demo:** https://top-10-crypto-dashboard.netlify.app/

---

## Lighthouse Scores

| Performance | Accessibility | Best Practices | SEO |
|-------------|---------------|----------------|-----|
| 98 | 95 | 100 | 100 |

---

## Features

- Live cryptocurrency prices fetched from CoinGecko API
- Top 10 coins ranked by market cap
- Color coded 24h price change badges with directional arrows
- Market cap formatted in T, B, and M for readability
- 12 hour server side data caching via Next.js revalidate
- Clean table layout with sortable column headers
- Accessible and semantic HTML throughout

---

## Tech Stack

- Next.js 15 App Router
- React 18
- TypeScript
- CSS Modules
- CoinGecko Public API

---

## Getting Started
```bash
# Clone the repository
git clone https://github.com/YOURUSERNAME/crypto-dashboard.git

# Install dependencies
cd crypto-dashboard
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Architecture

- **App Router** — Next.js 15 file based routing with server and client components
- **Custom Hook** — `useCrypto` handles data fetching and state management
- **Server Side Caching** — Data revalidates every 12 hours reducing unnecessary API calls
- **Component Structure** — Modular components with CSS Modules for scoped styling

---

## Performance Highlights

- Server side rendering for instant initial page load
- Next.js Image component for optimized coin logos
- 12 hour data caching eliminates redundant API requests
- Minimal JavaScript bundle with no heavy UI libraries