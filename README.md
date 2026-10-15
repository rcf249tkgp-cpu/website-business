# Fusion Sites — agency website

A premium, trilingual (English / Swedish / Finnish) marketing site for a web design & development studio, with a working multi-step project inquiry and meeting-request system.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules · Geist font · Nodemailer / Resend · Playwright

---

## Quick start

```bash
npm install
cp .env.example .env.local     # then fill in at least one email provider (see below)
npm run dev                    # http://localhost:3000
```

For local development without real email, set `MAIL_PROVIDER=console` in `.env.local`. Inquiries are then printed to the terminal. This setting is ignored in production.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build && npm start` | Production build & server |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm test` | Unit tests (form validation rules) |
| `npm run test:e2e` | End-to-end tests (Playwright): all languages, navigation, mobile menu, form validation, real SMTP delivery, error states, axe accessibility audits |

> In environments where Playwright's bundled Chromium isn't installed, point it at a local one: `PLAYWRIGHT_CHROMIUM_PATH=/path/to/chrome npm run test:e2e`.

---

## ⚙️ What you need to configure

### 1. Branding & contact details — `src/config/site.ts`

One file holds the company name, legal name, business ID, email, phone, address, opening hours, social links, currency, budget ranges and meeting time slots. The brand is “Fusion Sites”; the legal company is Fusion Hauk Oy (business ID 3602341-5). Contact details are the people listed under `contact.people` (Martin Haukerud and Casper Gauffin-Kauste); the first person is the main contact.

- The logo lockup is `src/components/Logo.tsx`; the F mark itself is a vector redraw in `src/components/BrandMark.tsx`. The favicon is `src/app/icon.svg` (plus `src/app/apple-icon.png`). Replace them with the official artwork when you have SVG/PNG exports.
- Colours and design tokens (near-black navy background, electric blue accent, silver/chrome gradients) are at the top of `src/app/globals.css`.
- Fonts are self-hosted in `src/fonts/` (no requests to Google): Michroma for headings and labels, Inter for body text, both under the SIL Open Font License.

### 2. Website copy & translations — `src/i18n/dictionaries/`

All visible text lives in `en.ts`, `sv.ts` and `fi.ts`. The Swedish and Finnish files are type-checked against English, so a missing key fails the build. Have a native speaker proofread the copy before launch.

### 3. Email delivery (required for the form to work)

The form posts to `/api/inquiry`, which validates the request and emails:

1. **you** — a full inquiry summary with *Reply-To* set to the customer, and
2. **the customer** — an acknowledgement in their language. It says plainly that the meeting time is a request and not yet a booking. You can turn this off with `SEND_CUSTOMER_CONFIRMATION=false`.

If no provider is configured, the API returns `503` and the form tells visitors to email you directly. Inquiries are never silently dropped.

Each delivery is retried once on a temporary failure. For extra safety you can add a **second delivery channel** with `INQUIRY_WEBHOOK_URL`. Every inquiry is then also posted as JSON to a Slack or Teams incoming webhook, or to Zapier, Make or n8n. The inquiry counts as delivered if either channel succeeds.

**Option A: Resend (recommended, free tier available)**
1. Create an account at <https://resend.com>.
2. Add and verify your domain (DNS records: SPF + DKIM).
3. Create an API key.
4. Set `RESEND_API_KEY`, `MAIL_FROM="Fusion Sites <no-reply@yourdomain.com>"` and `INQUIRY_TO_EMAIL` (comma-separated, e.g. `martin@atlashaukerud.fi,casper@atlashaukerud.fi`).
   Before your domain is verified, Resend only delivers to the account owner's address: leave `MAIL_FROM` empty (the shared `onboarding@resend.dev` sender is used), set `INQUIRY_TO_EMAIL` to that one address and `SEND_CUSTOMER_CONFIRMATION=false`.

**Option B: SMTP (Google Workspace, Microsoft 365, Zoho, Mailgun…)**
Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (use an *app password*, not your login password), `MAIL_FROM` and `INQUIRY_TO_EMAIL`.

### 4. Meeting scheduling (optional): Calendly

Set `NEXT_PUBLIC_CALENDLY_URL` to your event link, for example `https://calendly.com/your-team/intro-call`. After someone submits the form, the confirmation screen offers **“Book a time now”**. This opens your Calendly calendar inline, with their name and email prefilled, so they can get an instantly confirmed slot.

Without it, the customer's preferred date and time are sent to you as a **request**. The site never tells a customer a meeting is confirmed: you confirm it by replying to the inquiry email.

> `NEXT_PUBLIC_*` variables are read at **build time**. Redeploy after changing them.

### 5. Spam protection

These are built in and need no setup:
- a hidden honeypot field
- a minimum fill time (submissions faster than 3 s are rejected)
- per-IP rate limiting (`INQUIRY_RATE_LIMIT`, default 5 per 15 min)
- same-origin checks
- server-side re-validation of every field

Optional: add [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) by setting `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.

> The rate limiter is in-memory. On serverless hosting each instance keeps its own counter, which is fine for a marketing site. Use Turnstile if you get targeted spam.

### 6. Site URL

Set `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com` so canonical URLs, `hreflang`, the sitemap and Open Graph images point to the right place.

### Environment variables at a glance

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Canonical/sitemap/OG base URL |
| `RESEND_API_KEY` **or** `SMTP_*` | Yes | Email delivery |
| `MAIL_FROM` | Yes | Sender address (verified domain) |
| `INQUIRY_TO_EMAIL` | Recommended | Inboxes for new inquiries, comma-separated (defaults to the main contact, Martin) |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional | Instant booking on the confirmation screen |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` | Optional | CAPTCHA |
| `SEND_CUSTOMER_CONFIRMATION` | Optional | `false` disables the customer acknowledgement email |
| `INQUIRY_RATE_LIMIT` | Optional | Inquiries per IP per 15 min |
| `INQUIRY_WEBHOOK_URL` | Optional | Also post each inquiry to Slack/Teams/Zapier/Make (HTTPS) |
| `MAIL_PROVIDER` | Optional | Force `resend`, `smtp` or `console` (dev only) |

All secrets are read only on the server. The browser never sees them.

---

## Deployment (Cloudflare)

The site runs on **Cloudflare Workers** (with static assets) through the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare). Every page is prerendered at build time and served from the static assets; the Worker only handles the language redirect on `/`, the contact form API (`/api/inquiry`) and the 404 page. No R2, KV or database is needed.

**Connect the repository (GitHub → Cloudflare):** in the Cloudflare dashboard, go to *Workers & Pages → Create → Import a repository*, pick this repo and use:

| Setting | Value |
| --- | --- |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx wrangler deploy` |
| Worker / project name | `fusion-sites` (must match `name` in `wrangler.jsonc`) |

- **Build variables** (Settings → Build → Variables): `NEXT_PUBLIC_SITE_URL` and any other `NEXT_PUBLIC_*` values. They are baked in at build time.
- **Runtime variables and secrets** (Settings → Variables and Secrets): `RESEND_API_KEY` (as a secret), `MAIL_FROM`, `INQUIRY_TO_EMAIL`, and the optional ones from the table above.
- **Email on Cloudflare:** use **Resend** (option A above). It sends over HTTPS, which Workers support. SMTP (option B) needs raw TCP sockets and is meant for local development and other Node hosts.
- **Custom domain:** add it under the Worker's *Settings → Domains & Routes*, then set `NEXT_PUBLIC_SITE_URL` to it and redeploy.

The build needs only Node.js and npm: no Playwright, Python or ML models. Those are only used locally to regenerate the hero images (see *Hero image* below), and the results are committed to `public/`.

Cache headers for static files are in `public/_headers`: hashed build files (`/_next/static/*`) are cached for a year as immutable, images for 30 days.

**Try the Cloudflare build locally:**

```bash
npm run preview        # opennextjs-cloudflare build + local Workers runtime (wrangler)
npm run deploy         # build and deploy from your machine (needs `npx wrangler login`)
```

Plain Node.js hosting also still works: `npm ci && npm run build && npm start`.

---

## Hero image

The homepage hero is `public/hero.jpg` (a laptop on a rock). Generated from it, all committed:

| File | What it is | How it's made |
| --- | --- | --- |
| `public/hero-screen.webp` | Screenshot of the homepage shown on the laptop screen | `node scripts/hero/capture-screen.mjs http://localhost:3000/fi` (Playwright, with `npm start` running) |
| `public/hero-{800,1200,2000}.webp` | The photo with the screenshot baked onto the screen in perspective (responsive WebP) | `python scripts/hero/compose.py` |
| `public/hero-depth.png` | Depth map for the desktop 3D effect (white = near) | `python scripts/hero/depth.py depth_anything_v2_vits.onnx` (Depth Anything V2) |

The laptop's screen corners and the bezel live in `src/components/hero/scene.json`; the page, the WebGL shader and the scripts all read them from there. After a redesign, run `capture-screen.mjs` twice (so the laptop inside the screenshot shows the new design too), then `compose.py`.

---

## How it works

```
src/
├── app/
│   ├── [lang]/                 # /en, /sv, /fi — statically generated
│   │   ├── layout.tsx          # <html lang>, metadata, hreflang, header/footer
│   │   ├── page.tsx            # Home page sections + JSON-LD
│   │   ├── privacy/ terms/     # Localized legal pages
│   │   ├── not-found.tsx       # Localized 404
│   │   └── opengraph-image.tsx # Generated social preview per language
│   ├── api/inquiry/route.ts    # Form backend: spam checks → validation → email
│   ├── globals.css             # Design tokens, buttons, cards, animations
│   ├── sitemap.ts · robots.ts · icon.svg
├── components/                 # Header, Hero, Services, Work, WhyUs, Process, Contact, Footer…
│   └── inquiry/                # Multi-step form, success screen, Turnstile
├── config/site.ts              # ← Branding & contact details
├── i18n/                       # Locale config + dictionaries (en/sv/fi)
├── lib/inquiry/                # Shared validation, email templates, mailer, spam protection
└── proxy.ts                    # Redirects / to the visitor's language (cookie → browser language → English)
```

- **Languages:** each language has its own URL (`/en`, `/sv`, `/fi`) for SEO. The switcher keeps you on the same page and section and remembers your choice in a cookie. Unsent form answers are saved in `sessionStorage`, so switching language mid-form loses nothing.
- **Validation:** `src/lib/inquiry/validation.ts` is shared by the browser and the API, so the rules can't drift apart. Errors are codes that each language translates.
- **Performance:** pages are static HTML. Animations are CSS-only: scroll reveals use scroll-driven animations and respect `prefers-reduced-motion`. The portfolio mockups are pure HTML/CSS with no image weight.
- **Accessibility:** semantic landmarks, a skip link, keyboard-operable menus, focus management between form steps, `aria-invalid`/`aria-describedby` on fields, and automated axe audits in the test suite.

## Before you launch: checklist

- [ ] Replace placeholder company details in `src/config/site.ts`
- [ ] Configure an email provider and send yourself a test inquiry
- [ ] Set `NEXT_PUBLIC_SITE_URL` (and optionally Calendly / Turnstile)
- [ ] Have the privacy policy and terms (`legal` in the dictionaries) reviewed for your business
- [ ] Proofread Swedish and Finnish copy
- [ ] Confirm the commitments you make on the site are ones you'll keep: fixed-price proposals, reply within one business day, free intro meeting, live preview link, training at launch (`why.commitments`, `faq` and `contact.points` in the dictionaries)
- [ ] Swap concept projects for real case studies as you get them (`work` in the dictionaries plus `src/components/ProjectMockups.tsx`)
