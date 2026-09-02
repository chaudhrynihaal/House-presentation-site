# Lote 25 — Private Presentation Microsite

A password-gated, single-property presentation site built with Next.js (App Router),
TypeScript, Tailwind CSS, Framer Motion and react-pdf.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/login`. The password is set in
`.env.local`.

## Changing the password

Edit `SITE_PASSWORD` in `.env.local`:

```
SITE_PASSWORD=your-new-password
```

`AUTH_SECRET` is a separate random string used to sign the session cookie (not the
password itself). It's already set to a generated value — you generally don't need to
change it, but if you do, invalidate existing sessions by rotating it, e.g.:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

The password check runs server-side only (`app/login/actions.ts`, a Server Action) —
never in client JavaScript. On success it sets an httpOnly, signed, 7-day session
cookie; `middleware.ts` checks that cookie on every request and redirects to `/login`
if it's missing or invalid.

## Swapping in a new property

Everything property-specific lives in **`content/property.ts`**. To present a
different property:

1. Drop new photos/videos into `public/media/images` and `public/media/video`
   (compress first — see below).
2. Drop a floor-plan/site-plan PDF into `public/documents/`.
3. Edit `content/property.ts`:
   - `hero`, `stats`, `distances`, `lifestyleSection`, `residencySection`
   - `areas` — per-floor room breakdown
   - `roomGalleries` — one entry per room section (numbered heading + tag line +
     a row of photos under `images`); each image carries its own `hotspots`
     array (`x`/`y` are **percentages**, not pixels — see note below)
   - `specifications` — the categorized full spec list
   - `sitePlanPdfUrl` — path to the PDF under `public/documents/`
4. Update `app/layout.tsx` metadata (title/description) if the address changes.

No component contains property-specific copy — they're all driven by this one file.

### A note on hotspot coordinates and photo cropping

Every gallery photo renders at a fixed `aspect-[3/2]` box with `object-cover`, which
crops the source image to fit — a wide photo loses some of its left/right edges, a
tall one loses top/bottom. `hotspots[].x`/`y` are percentages **of the visible,
cropped box**, not of the original file. If you add a new photo with hotspots:

1. Note the pixel position of the feature in the *original* image, as a percentage
   of its full width/height.
2. If the photo's aspect ratio isn't close to 3:2, convert that to a percentage of
   what's actually visible after the crop (source narrower than 3:2 → top/bottom is
   cropped; wider → left/right is cropped).
3. Load the page and check the pin lands on the feature — pin positions here were
   all verified this way, not guessed.

### Compressing new media before adding it

Renders/photos straight out of a render farm or camera are typically far too large to
ship on a web page. Before adding new files, resize and compress with ffmpeg, e.g.:

```bash
# Images -> ~2400px wide JPEG
ffmpeg -i input.png -vf "scale=2400:-2" -q:v 3 output.jpg

# Videos -> compressed, muted, web-ready H.264 MP4
ffmpeg -i input.mp4 -vf "scale=1280:-2,fps=30" -c:v libx264 -preset slow -crf 27 \
  -pix_fmt yuv420p -an -movflags +faststart output.mp4
```

## Placeholder data — confirm with the client

The renders and the "Salient Features" spec sheet did not include confirmed numeric
figures. `content/property.ts` currently has realistic **placeholder** values (marked
with a trailing `*`) for:

- Number of suites / bathrooms
- Interior (built) area, in m²
- Plot area, in m²
- Distance to the coast, and all other listed distances (airport, marina, schools,
  golf, city centre)
- Per-floor and per-room area breakdown (`areas`)
- Exact address/city/region for the lifestyle copy (currently written generically for
  "Portugal")

Everything else (the 24-item specification list, material/appliance brands, energy
rating A+) comes directly from the client-provided spec sheet and does not need
re-confirming.

## Project structure

```
app/                  routes (/, /login), layout, global styles
components/           reusable, prop-driven UI components
components/ui/        third-party / copy-pasted components (e.g. card-fan-carousel)
content/property.ts   typed content — the only file with property-specific copy
lib/auth.ts           signed session token creation/verification
middleware.ts         password-gate enforcement on every route
public/media/         images and videos
public/documents/     PDFs (site plan / specification)
```
