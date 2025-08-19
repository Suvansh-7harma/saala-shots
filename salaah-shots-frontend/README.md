# Salaah Shots — Frontend (React + Vite + Tailwind)

Production-ready frontend for the Full-Stack Developer Assessment.

## Tech
- React 18 + Vite
- Tailwind CSS for styling
- Framer Motion for subtle animations
- Axios for API calls
- Clean folder structure, hooks, and services
- Environment-based API base URL

## Getting Started
```bash
npm install
npm run dev
```

By default, the app reads the API base URL from `VITE_API_BASE_URL`.  
Create a `.env` file based on `.env.example`.

## Environment
Create `.env` (local) or configure in your hosting provider (Netlify / Vercel / Firebase Hosting):
```
VITE_API_BASE_URL=https://saala-shots.onrender.com
```

> The app requests: `GET {VITE_API_BASE_URL}/mentors`

## Build
```bash
npm run build
npm run preview
```

## Deploy (Netlify, recommended)
1. Push this folder to a GitHub repo.
2. On Netlify: **New site from Git**, choose repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add env var: `VITE_API_BASE_URL` → your backend URL (e.g., `https://saala-shots.onrender.com`).
6. Deploy.

## Project Structure
```
salaah-shots-frontend/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ assets/
│  │  └─ logo.svg
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Footer.jsx
│  │  ├─ MentorCard.jsx
│  │  ├─ Filters.jsx
│  │  ├─ EmptyState.jsx
│  │  └─ Loader.jsx
│  ├─ hooks/
│  │  └─ useMentors.js
│  ├─ pages/
│  │  └─ Mentors.jsx
│  ├─ services/
│  │  └─ api.js
│  ├─ utils/
│  │  └─ helpers.js
│  ├─ styles/
│  │  └─ globals.css
│  ├─ App.jsx
│  └─ main.jsx
├─ .env.example
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ package.json
```

## UX Features
- Responsive layout (mobile-first)
- Client-side filtering: specialization, location, min years of experience, availability
- Debounced search (by name / specialization)
- Loading and error states
- Empty state
- Smooth entrance animations

## Data Contract
Mentor item shape expected from API:
```json
{
  "id": "1",
  "name": "Dr. A Sharma",
  "specialization": "Physician",
  "experience": 8,
  "location": "Delhi",
  "available": true
}
```

> If your backend uses a different field for `id` (e.g., `_id`), the UI will map it automatically.

## Accessibility
- Proper semantic HTML
- Focus ring on interactive elements
- Sufficient contrast and large click targets

## Theming
- Neutral base with accent highlight
- Animations under 200ms for snappy feel
