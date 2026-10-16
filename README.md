# Portfolio Website

Next.js 16 (App Router), React 19, Tailwind CSS 4, Prisma 7 + PostgreSQL (Neon), Auth.js v5.

## Features

- Public pages: home, projects, experience, skills, education, blog, contact.
- **Admin dashboard at `/admin`** to edit all content (profile, projects, experience, education, skills, blog posts) and read contact messages. Sign-in is limited to the emails in `ADMIN_EMAILS`.
- Blog written in Markdown, drafts and published posts.
- Contact form saves messages to the database (plus an optional Web3Forms email), with honeypot and rate limiting.
- Image/resume uploads to Vercel Blob (free tier) or paste any URL.

## Getting started

1. `npm install`
2. Copy `.env.example` to `.env` and fill it in (never commit `.env`).
3. `npx prisma migrate deploy`
4. `npm run dev`, then open `http://localhost:3000` and `http://localhost:3000/admin`.

Scripts: `npm test`, `npm run lint`, `npm run build`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
