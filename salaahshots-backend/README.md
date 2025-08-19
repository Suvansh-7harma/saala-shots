# SalaahShots Backend (MVC, Express + MongoDB)

Solid, production-ready REST API for mentors.
- MVC structure
- Request validation with Zod
- Security: Helmet, basic rate limiting, CORS
- Logging: pino (console)
- Seeding script with 10+ mentors
- Ready for Render deployment

## Quick Start

```bash
# 1) Install
npm i

# 2) Create .env
cp .env.example .env
# Fill MONGODB_URI, ALLOWED_ORIGINS, PORT

# 3) Run dev
npm run dev

# 4) Seed data (optional)
npm run seed
```

## Scripts
- `npm run dev` - start with nodemon
- `npm start` - production start
- `npm run seed` - seed 10+ mentors
- `npm run lint` / `npm run format`

## Endpoints
- `GET /api/v1/health` - health check
- `GET /api/v1/mentors` - list mentors with filters & pagination
- `POST /api/v1/mentors` - create mentor

### Filters
- `specialization` (string, exact)
- `location` (string, exact)
- `available` (`true|false`)
- `minExperience` (number)
- `maxExperience` (number)
- Pagination: `page` (default 1), `limit` (default 10)
- Sort: `sort` (comma-separated fields, e.g. `experience,-name`)

## Deploy to Render
- Create **Web Service** → Node
- Build command: `npm install`
- Start command: `npm start`
- Environment variables:
  - `MONGODB_URI`
  - `PORT` (e.g., 10000 or leave empty; Render sets PORT automatically)
  - `ALLOWED_ORIGINS` (e.g., your Netlify URL)

