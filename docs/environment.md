# Environment & Configuration

This project uses environment variables for configuration. In production, variables are set in Vercel. Locally, use a `.env.local` file (not committed).

## Required Variables

- `DATABASE_URL` – PostgreSQL connection string
- `NODE_ENV` – `development` or `production`

## Local Setup

1. Copy `env.example` to `.env.local`
2. Fill in your values

## Vercel Setup

1. Open project in Vercel
2. Settings → Environment Variables
3. Add each variable for the desired environment (Production/Preview/Development)

## Build & Runtime

- Build command: `npm run vercel-build` (Vercel)
- Output directory: `dist/public`
- API functions are deployed from `api/**/*.ts`
