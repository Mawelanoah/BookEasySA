# BeautyBook — Premium Beauty Marketplace & Booking Platform

**Discover. Compare. Book.**

BeautyBook is a mobile-first beauty services marketplace built for South Africa. Customers find and book salons, nail bars, lash studios, makeup artists, massage therapists and more. Business owners get a powerful dashboard to manage bookings, services, payments and analytics.

## Features

### Customer
- Mobile-first, app-like experience in the browser
- Location-aware search & category browsing
- Salon profiles with photos, services, prices, reviews & staff
- Step-by-step booking flow (service → professional → date → time → details → payment)
- Favourites, bookings history, profile
- Shareable salon links & QR codes

### Business Owner
- Compact responsive dashboard
- Today’s bookings, revenue & pending requests
- Service & price management
- Share My Salon + QR code
- Analytics overview
- Optional AI receptionist settings

### Design
- Premium purple & white palette
- Fully responsive (tested mindset for 320–430 px smartphones + tablet + desktop)
- No horizontal scroll
- Bottom navigation on mobile
- Rounded cards, subtle shadows, readable typography

## Tech Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Frontend     | HTML5, CSS3, Vanilla JS |
| Design       | Mobile-first, CSS custom properties |
| Payments     | Yoco (placeholder integration) |
| Backend      | Supabase (planned)      |
| Hosting      | GitHub Pages ready      |

## Project Structure

```
beautybook/
├── index.html          # Homepage
├── explore.html        # Search & salon listing
├── salon.html          # Public salon profile
├── booking.html        # Multi-step booking flow
├── bookings.html       # Customer bookings
├── profile.html        # User profile
├── dashboard.html      # Business owner dashboard
├── css/styles.css      # All styles (mobile-first)
├── js/app.js           # Shared utilities
└── README.md
```

## Getting Started

1. Open `index.html` in a browser (or serve the folder).
2. For best mobile experience, use Chrome DevTools device toolbar or open on a real phone.
3. To deploy: push the `beautybook` folder contents to a GitHub repository and enable GitHub Pages.

## Next Steps (Production)

- Connect Supabase for real auth, salons, bookings & reviews
- Integrate Yoco payment widget
- Add real maps (Google Maps / Mapbox)
- Generate QR codes per salon
- AI chatbot / receptionist (optional)
- Image optimisation & CDN
- PWA manifest + service worker for installability

## Design Notes

- Primary colour: `#7C3AED`
- Soft lavender backgrounds
- Inter font family
- Bottom nav height accounts for safe-area insets
- Cards stack vertically on phones, grid on larger screens

---

**BeautyBook — Beauty at Your Fingertips** 💜

Made for the South African beauty industry.