# BookEasy SA — Phase 1 (Honest scope)

Professional static demo + calendar rules. **Not** multi-tenant production yet.

## Working now (Phase 1)

- Brand colours (#5125A8, #32145F, #F4F0FF, #202033)
- Hero: “Your Business. Your Bookings. Simplified.”
- Navigation + For Business Owners section
- WhatsApp share demo (copy message / link)
- Kuja’s Nails booking with:
  - Africa/Johannesburg time
  - Past dates/times blocked
  - BOOKED label + strikethrough on taken slots
  - Availability per date (Monday 15:00 ≠ Tuesday 15:00)
  - Pending requests; owner must approve
  - Reference number on confirmation
- Demo dashboard (localStorage)
- Owner Sign In / Register **UI prototypes** (clearly not secure)

## Not working yet (requires Phase 2+)

- Real registration / login
- Private per-business data
- Server-side double-booking prevention
- Password hashing
- Email/WhatsApp notifications
- Genuine ratings after completed appointments

## Phase 2 (next) — Supabase

1. Create free project at supabase.com  
2. Enable Email Auth  
3. Tables: `profiles`, `businesses`, `services`, `appointments`  
4. Row Level Security so `auth.uid()` only sees own business  
5. Use **anon** key only in public JS — never service role key  
6. Replace localStorage booking with Supabase inserts + RPC for slot checks  

## Deploy

Upload all files to `Mawelanoah/BookEasySA`.  
Settings → Pages → main → / (root) → Save.  
URL: https://mawelanoah.github.io/BookEasySA/

## Prices (unchanged)

Classic Manicure R250 · Gel R350 · Acrylic R450 · Pedicure R280 · Nail art R40/nail
