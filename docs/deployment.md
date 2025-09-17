# Deployment (Vercel)

This project is configured for Vercel with static frontend and serverless API functions.

## Prerequisites

- Vercel account and CLI (`npm i -g vercel`) or Git integration
- PostgreSQL database provisioned (Neon/Supabase/Vercel Postgres)
- `DATABASE_URL` set

## Configuration Files

- `vercel.json` – routes, builds, and build command
- `api/tsconfig.json` – types for serverless functions

## Environment Variables

Set in Vercel Project Settings → Environment Variables:

- `DATABASE_URL`
- `NODE_ENV=production`

## Build

- Build Command: `npm run vercel-build`
- Output Directory: `dist/public`

## Deploy via CLI

```bash
vercel login
npm run deploy # or: vercel --prod
```

## Deploy via Git

- Push to main branch
- Vercel builds and deploys automatically

## API Endpoints

- `/api/health`
- `/api/contact` (GET, POST)

## Troubleshooting

- Check Vercel function logs for runtime errors
- Ensure `DATABASE_URL` is reachable from Vercel
- Confirm build output exists at `dist/public`
