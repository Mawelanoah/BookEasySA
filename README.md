# BookEasy SA — Professional Frontend Demo (Upgraded)

Premium static prototype for an online booking platform aimed at South African beauty businesses.

**Live demo structure works on GitHub Pages. All data is fictional.**

## What's new in this upgrade

- Distinctive BookEasy SA brand (calendar + checkmark logo, favicon)
- Premium deep-purple hero: “Your Next Appointment, Made Easy.”
- Explore Businesses / For Business Owners entry points
- Stronger visual consistency (cards, buttons, dashboard)
- Mobile layout fixes (no horizontal page scroll)
- Tasteful hover states and floating hero accents
- Same working booking flow, prices, and dashboard actions

## File structure

```
BookEasy-SA-Upgrade/
├── index.html
├── directory.html
├── kujas-nails.html
├── confirmation.html
├── css/styles.css
├── js/app.js
├── assets/
│   ├── logo.svg
│   └── favicon.svg
├── dashboard/
│   ├── index.html
│   ├── appointments.html
│   ├── services.html
│   └── finances.html
└── README.md
```

## Preserve existing behaviour

- Kuja’s Nails services and prices unchanged (R250–R450 range)
- Multi-step booking with validation
- Occupied times disabled via localStorage
- Dashboard: confirm/cancel, add/edit/remove services
- Demo-only labels everywhere

## Deploy to GitHub Pages

1. Upload **all** files from this folder into your `BookEasySA` repo (replace existing files).
2. Settings → Pages → Deploy from branch → `main` → `/ (root)` → Save.
3. Open: `https://mawelanoah.github.io/BookEasySA/`

## Test checklist

**Phone (320–430px)**  
- No sideways scrolling  
- Hero buttons usable  
- Date/time grids readable  
- Forms fit the screen  

**Desktop**  
- Full booking flow works  
- Dashboard status changes persist after refresh  
- Service price edits appear on the public booking page  

## Limitations (by design)

- No real login or multi-tenant security  
- localStorage only (browser demo)  
- No WhatsApp/email notifications  
- Financial figures are static demo data  

Next stages: Supabase auth, real database, Row Level Security.
