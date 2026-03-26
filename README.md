# CryptoTracker

A real-time cryptocurrency price tracking application built with React, TypeScript, and Feature Sliced Design architecture.

## Features

- Live cryptocurrency prices updated every 10 seconds
- Search coins by name or symbol with autocomplete suggestions
- Add coins to your watchlist
- Remove coins from your watchlist
- Force update a single coin or all coins at once
- Trend indicators (up/down arrows) when price changes
- Search history chips for quick re-adding coins

## Tech Stack

| Technology            | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| React 19 + TypeScript | UI and type safety                             |
| TanStack Query        | Server state management, caching, auto-refetch |
| TanStack Table        | Table rendering and column configuration       |
| axios                 | HTTP client with base instance                 |
| lucide-react          | Icons                                          |
| SCSS Modules          | Component-scoped styles with CSS variables     |
| Vite                  | Build tool                                     |

## Getting Started

### Prerequisites

- Node.js 18+
- CryptoCompare API key

### Installation

```bash
git clone https://github.com/RuMax21/cryptocurrency-app.git
cd cryptocurrency-app
npm install
```

### Environment variables

Create a `.env` file in the root:

```env
VITE_CRYPTO_API_URL=https://min-api.cryptocompare.com
VITE_CRYPTO_API_KEY=your_api_key_here
```

### Run

```bash
npm run dev
```
