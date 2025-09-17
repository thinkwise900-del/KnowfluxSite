# Frontend

The frontend is a single-page application built with Vite and React 18.

## Structure

- Entry: `client/src/main.tsx`
- App root: `client/src/App.tsx`
- Components: `client/src/components/`
- Hooks: `client/src/hooks/`
- UI primitives: `client/src/components/ui/`
- Pages: `client/src/pages/`
- Styles: `client/src/index.css`

## Build

- Vite configuration in `vite.config.ts`
  - Root set to `client/`
  - Output to `dist/public`
  - Aliases: `@`, `@shared`, `@assets`

### Commands

- `npm run dev` – local dev server with Express + Vite middleware
- `npm run build` – builds frontend to `dist/public`

## Data Fetching

- React Query is configured in `client/src/lib/queryClient.ts`
- API base path is `/api`

## Routing

- SPA routing handled client-side (e.g., via components in `pages/` and navigation in `components`)

## UI

- Uses Radix UI primitives and TailwindCSS utilities
- Custom components located under `client/src/components/ui`
