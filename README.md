# BookEasy SA — Frontend Demonstration

Professional online booking demo for small South African beauty businesses (nail technicians, salons, lash artists, barbers, spas).

**This is a static frontend prototype only.**  
No real bookings, payments, authentication or multi-tenant data. All sample data is fictional and stored in the browser (localStorage).

## Live demo structure

| Page | Purpose |
|------|---------|
| `index.html` | Public homepage |
| `directory.html` | Example businesses list |
| `kujas-nails.html` | Customer booking flow (Kuja’s Nails) |
| `confirmation.html` | Simulated booking confirmation |
| `dashboard/` | Business-owner demonstration screens |

## Features in this demo

- Responsive, mobile-first design (purple / white / neutral palette)
- Multi-step customer booking: service → date → time → details → confirmation
- Form validation (required name & phone)
- Occupied time slots are disabled based on existing demo appointments
- Owner dashboard: overview stats, appointments (confirm/cancel), services (add/edit price/remove)
- Income & expenses preview (clearly labelled as fictional)
- Changes persist in the browser via localStorage

## How to run locally

1. Download or clone this repository.
2. Open `index.html` in any modern browser  
   **or** serve the folder with any static file server.

Because the site uses relative paths, it also works perfectly on **GitHub Pages**.

## Deploy to GitHub Pages (free)

1. Create a new public repository named e.g. `BookEasy-SA`.
2. Upload all files and folders exactly as they appear here (keep the structure).
3. Go to **Settings → Pages**.
4. Source: **Deploy from a branch** → `main` → `/ (root)` → Save.
5. After a minute your site will be live at:  
   `https://YOUR-USERNAME.github.io/BookEasy-SA/`

## Important limitations (by design)

- No real user accounts or login.
- No server-side validation or database.
- No WhatsApp / email notifications.
- Double-booking prevention only works within the current browser session.
- Financial figures are static demonstration data.

These will be addressed in later stages (Supabase + proper backend + Row Level Security).

## Future roadmap (high level)

1. **Phase 1** — This polished frontend demo (current)
2. **Phase 2** — Test & polish UX
3. **Phase 3** — Real database, authentication, multi-business support
4. **Phase 4** — Pilot with a few willing businesses
5. **Phase 5** — Notifications + basic financial tools
6. **Phase 6** — Subscriptions & production hosting

## Tech stack (current)

- HTML5
- CSS3 (custom, no framework)
- Vanilla JavaScript
- localStorage for demo persistence
- GitHub + GitHub Pages for free hosting

No Node.js, no build step, no paid services required.

---

Built as a serious prototype for a future affordable booking platform focused on South African small businesses.
