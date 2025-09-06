# KnowfluxSite - Vercel Deployment

This project is configured for deployment on Vercel with full backend functionality using serverless functions.

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `env.example` to `.env.local`
   - Add your `DATABASE_URL`

3. **Deploy to Vercel**:
   ```bash
   npm run deploy
   ```

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── contact/           # Contact form endpoints
│   ├── health.ts          # Health check endpoint
│   └── lib/               # Shared utilities
├── client/                # React frontend
├── shared/                # Shared types and schemas
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to Vercel production
- `npm run deploy:preview` - Deploy to Vercel preview
- `npm run vercel:dev` - Start Vercel development server
- `npm run db:push` - Push database schema changes

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact messages

## Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Environment (production/development)

## Database

This project uses:
- **Drizzle ORM** for database operations
- **PostgreSQL** as the database
- **Neon/Supabase** recommended for hosting

## Deployment

The project is configured for Vercel deployment with:
- Serverless functions for API endpoints
- Static site generation for the frontend
- Automatic builds on Git push
- Environment variable management

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).
