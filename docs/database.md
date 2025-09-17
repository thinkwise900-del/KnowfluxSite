# Database

PostgreSQL is used for data persistence, accessed via Drizzle ORM.

## Schema

Defined in `shared/schema.ts`:

- `contact_messages`
  - `id` (uuid, default `gen_random_uuid()`)
  - `name` (text, required)
  - `email` (text, required)
  - `message` (text, required)
  - `created_at` (timestamp, default now)

## Drizzle

- Schema: `shared/schema.ts`
- Migrations: managed with `drizzle-kit`
- Config: `drizzle.config.ts`

### Running Migrations

```bash
npm run db:push
```

Ensure `DATABASE_URL` is set before running.

## Serverless Connection

- API uses `drizzle-orm/postgres-js` with the `postgres` driver in `api/lib/db.ts`
- Connection string pulled from `DATABASE_URL`
