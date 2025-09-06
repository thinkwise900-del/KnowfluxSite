# Vercel Deployment Guide

This guide will help you deploy your KnowfluxSite application to Vercel with full backend functionality.

## Prerequisites

1. A Vercel account
2. A PostgreSQL database (recommended: Neon, Supabase, or Vercel Postgres)
3. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Environment Variables

Set the following environment variables in your Vercel project:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:

```
DATABASE_URL=postgresql://username:password@host:port/database
NODE_ENV=production
```

## Database Setup

1. **Create a PostgreSQL database** (recommended providers):
   - [Neon](https://neon.tech/) - Free tier available
   - [Supabase](https://supabase.com/) - Free tier available
   - [Vercel Postgres](https://vercel.com/storage/postgres) - Integrated with Vercel

2. **Run database migrations**:
   ```bash
   npm run db:push
   ```

## Deployment Steps

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Git Integration

1. Connect your Git repository to Vercel
2. Import your project
3. Set environment variables in the Vercel dashboard
4. Deploy

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── contact/
│   │   └── index.ts       # Contact form API endpoint
│   └── lib/
│       └── db.ts          # Database connection
├── client/                 # React frontend
├── shared/                 # Shared types and schemas
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies and scripts
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact messages (admin)

## Troubleshooting

### Common Issues

1. **Database Connection Errors**:
   - Verify `DATABASE_URL` is correctly set
   - Ensure database is accessible from Vercel
   - Check if database migrations have been run

2. **Build Errors**:
   - Ensure all dependencies are in `package.json`
   - Check TypeScript compilation errors
   - Verify import paths are correct

3. **Runtime Errors**:
   - Check Vercel function logs
   - Verify environment variables are set
   - Ensure database schema matches your code

### Logs

View your application logs in the Vercel dashboard:
1. Go to your project
2. Click on "Functions" tab
3. Click on individual function to view logs

## Performance Optimization

- API functions have a 30-second timeout
- Memory is set to 1024MB for better performance
- Static assets are served via Vercel's CDN
- Database connections are optimized for serverless

## Security

- CORS is configured for API endpoints
- Input validation using Zod schemas
- Environment variables are secure
- Database credentials are encrypted

## Monitoring

- Use Vercel Analytics for performance monitoring
- Monitor function execution times
- Set up alerts for errors
- Track database performance
