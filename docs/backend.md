# Backend / API

The backend consists of Vercel Serverless Functions that provide the API for the frontend. In local development, an Express server mirrors the API for parity.

## Serverless Functions

Location: `api/`

- `api/contact/index.ts`
  - `POST /api/contact`: Validates and stores a contact message
  - `GET /api/contact`: Returns all stored contact messages
- `api/health.ts`
  - `GET /api/health`: Returns health info

### Request/Response Examples

- POST `/api/contact`
  - Request JSON:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "message": "Hello!"
    }
    ```
  - Response JSON:
    ```json
    {
      "success": true,
      "message": "Message sent successfully",
      "data": {
        "id": "...",
        "name": "Jane Doe",
        "email": "jane@example.com",
        "message": "Hello!",
        "createdAt": "2025-01-01T00:00:00.000Z"
      }
    }
    ```

### Validation

- Uses Zod schemas defined in `shared/schema.ts` (via `insertContactMessageSchema`).

### CORS

- Basic permissive CORS headers are set in serverless handlers.

## Local Development (Express)

- `server/index.ts` bootstraps Express
- `server/routes.ts` defines `/api/contact` endpoints with the same behavior
- `server/vite.ts` integrates Vite dev middleware and serves static files in production

## Storage Layer

- `api/lib/db.ts` connects to PostgreSQL using `drizzle-orm/postgres-js`
- `server/storage.ts` provides an in-memory store for local dev (can be swapped for DB)

## Error Handling

- Validation errors return 400 with details
- Unhandled errors return 500 with a generic message

## Notes

- All API routes are prefixed with `/api`
- Keep functions stateless; rely on the database for persistence
