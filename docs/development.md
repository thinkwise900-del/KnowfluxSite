# Development Workflow

## Prerequisites

- Node.js 18+
- npm

## Install

```bash
npm install
```

## Environment

- Copy `env.example` to `.env.local`
- Set `DATABASE_URL`

## Local Development

```bash
npm run dev
```

This runs the Express server with Vite middleware in development.

## Build

```bash
npm run build
```

Outputs static assets to `dist/public`.

## Type Checking for API Functions

```bash
npx tsc --noEmit --project api/tsconfig.json
```

## Database

```bash
npm run db:push
```

Pushes schema to the configured database.

## Deployment

```bash
npm run deploy           # production
npm run deploy:preview   # preview
```

## Project Structure

See `docs/architecture.md` for a complete overview.
