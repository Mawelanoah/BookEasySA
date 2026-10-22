# BookEasy SA — Professional Demo (v2)

Polished static prototype for South African beauty-business booking.

## Highlights

- Premium purple brand + SVG logo & favicon
- Hero: “Your Next Appointment, Made Easy.”
- **For Business Owners** section (4 steps)
- WhatsApp share demo with **Copy message** / **Copy link** / Open WhatsApp
- Directory with stock service photos (Unsplash; illustrative only)
- Kuja’s Nails booking with service thumbnails — same prices & flow
- Owner dashboard (confirm/cancel, services, finances preview)
- Mobile-first: no horizontal page scroll

## Prices preserved (Kuja’s Nails demo)

| Service | Duration | Price |
|---------|----------|-------|
| Classic Manicure | 45 min | R250 |
| Gel Manicure | 60 min | R350 |
| Acrylic Full Set | 90 min | R450 |
| Pedicure | 50 min | R280 |
| Nail Art (per nail) | 15 min | R40 |

## Deploy

1. Upload entire folder contents to `Mawelanoah/BookEasySA` (overwrite).
2. **Settings → Pages →** branch `main`, folder `/ (root)` → Save.
3. Site: https://mawelanoah.github.io/BookEasySA/

If the homepage 404s but `/kujas-nails.html` works, Pages is not enabled for the root — re-save the Pages setting.

## Test

- Homepage → Explore Businesses / For Business Owners / copy WhatsApp message
- Book on Kuja’s Nails → see confirmation → appear in dashboard
- Confirm appointment → status updates after refresh
- Phone: no sideways scroll

## Honest limitations

- No real registration or auth
- localStorage demo data only
- Stock images are not real business photos
- No production notifications or payments
