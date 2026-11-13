# MERN Stack Developer Portfolio

A fast, responsive portfolio for a MERN stack developer, built with **Next.js (App Router)**, **Three.js / React Three Fiber**, **MongoDB (Mongoose)** and **Resend** for contact-form email delivery.

## Highlights

- Interactive Three.js hero: distorted metallic core, orbit rings, satellites, particles and pointer parallax
- Dark, editorial design system with glass surfaces, gradient type and scroll-reveal motion
- Responsive from 320px phones up to wide desktops, with a full mobile navigation
- Contact form with client + server validation, honeypot, rate limiting and clear success/error states
- Every submission is stored in MongoDB **and** emailed to your Gmail inbox
- Content is centralized in one file — no component edits needed to personalize

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open <http://localhost:3000>.

### 1. MongoDB

Either run MongoDB locally (`mongodb://127.0.0.1:27017/portfolio`) or create a free
MongoDB Atlas cluster and paste its connection string into `MONGODB_URI`.
Messages are stored in the `contactmessages` collection.

### 2. Email to your Gmail (Resend)

1. Create a free account at [resend.com](https://resend.com) and add an API key.
2. Put the key in `RESEND_API_KEY`.
3. Set `CONTACT_EMAIL` to your Gmail address.
4. Leave `RESEND_FROM_EMAIL` as `onboarding@resend.dev` while testing — the
   testing sender can only deliver to the **Resend account owner's** address,
   which is exactly what this form needs.
5. For production (sending from your own domain, or to any recipient), verify a
   domain in Resend and update `RESEND_FROM_EMAIL`.

Each accepted message triggers an email with the visitor's name, address,
subject and message, plus a one-click **Reply** button (`replyTo` is set to the
visitor). If email delivery fails, the submission is still saved in MongoDB and
the visitor sees a clear error.

```ts
// The API contract
POST /api/contact
{ "name": "...", "email": "...", "subject": "...", "message": "..." }
```

Protections included: field length limits, email format validation, hidden
honeypot field, in-memory rate limit (5 submissions / 10 min / IP) and escaped
HTML in the notification email.

### 3. Make it yours

All copy, links and projects live in [`src/data/portfolio.ts`](src/data/portfolio.ts):

- `profile` — name, role, location, email, phone, availability, socials, stats
- `profile.photo` — portrait shown in the About section (see below)
- `about` — intro, paragraphs, current focus
- `skillGroups` — four categories of tools
- `projects` — title, description, stack, highlights, demo/GitHub links
- `experience` — roles, impact bullets, period
- Set `profile.resumeUrl` to a PDF in `public/` (e.g. `/resume.pdf`) to show a résumé button

**Your photo:** drop a portrait (roughly 4:5, e.g. 800×1000px) at
`public/profile.jpg`. It appears in the framed card in the About section; if you
use another filename, update `profile.photo` and `profile.photoAlt`. Until the
file exists the card shows your initials as a monogram, and `npm run dev` shows
a small reminder.

Also update the placeholder links (`github.com`, `example.com`) and replace the
placeholder contact details before deploying.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deployment

The app deploys cleanly to Vercel. Add the four environment variables
(`MONGODB_URI`, `MONGODB_DB` optional, `RESEND_API_KEY`, `CONTACT_EMAIL`,
`RESEND_FROM_EMAIL`) in the project settings, and allow Vercel's IPs in MongoDB
Atlas (or use `0.0.0.0/0` during setup).

## Notes

- The hero renders with `prefers-reduced-motion` respected — animations stop for
  users who ask for it.
- Three.js is lazy-loaded on the client so it never blocks first paint.
