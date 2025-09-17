# Architecture Overview

KnowfluxSite is a full-stack web application consisting of a Vite-powered React frontend and backend serverless API functions deployed on Vercel. Data is persisted in PostgreSQL via Drizzle ORM.

## High-Level Diagram

Frontend (Vite + React) → API (Vercel Serverless Functions) → PostgreSQL (Neon/Supabase/Vercel Postgres)

## Key Paths

- Frontend root: `client/`
- Serverless functions: `api/`
- Shared schema/types: `shared/`
- Express dev server (local only): `server/`
- Build output: `dist/public/`

## Frontend

- Built with Vite and React 18
- UI components in `client/src/components`
- Styles in `client/src/index.css`
- React Query config in `client/src/lib/queryClient.ts`
- Build outputs to `dist/public`

## Backend

- Production: Vercel Serverless Functions under `api/`
  - `api/contact/index.ts`: POST/GET endpoints
  - `api/health.ts`: health check
  - `api/lib/db.ts`: database connection
- Development: Express in `server/`
  - `server/index.ts`, `server/routes.ts`, `server/vite.ts`

## Database

- PostgreSQL with Drizzle ORM
- Schema in `shared/schema.ts`
- Migrations via `drizzle-kit`

## Configuration

- `vercel.json`, `vite.config.ts`, `tsconfig.json`, `api/tsconfig.json`

## Environments

- Local dev via `npm run dev` (Express + Vite middleware)
- Production on Vercel (static frontend + serverless API)

## Routing

- SPA routing client-side
- `/api/*` routed to serverless functions

## Observability

- Basic request logging in `server/index.ts`
- Vercel function logs in dashboard
