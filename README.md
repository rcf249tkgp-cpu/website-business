# Novaform — agency website

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

One file holds the company name, legal name, business ID, email, phone, address, opening hours, social links, currency, budget ranges and meeting time slots. **The current values (“Novaform”, Helsinki address, phone, business ID) are placeholders. Replace them before launch.**

- The logo mark is in `src/components/Logo.tsx` and the favicon in `src/app/icon.svg`.
- Colours and design tokens are at the top of `src/app/globals.css`.

### 2. Website copy & translations — `src/i18n/dictionaries/`

All visible text lives in `en.ts`, `sv.ts` and `fi.ts`. The Swedish and Finnish files are type-checked against English, so a missing key fails the build. Have a native speaker proofread the copy before launch.

### 3. Email delivery (required for the form to work)

The form posts to `/api/inquiry`, which validates the request and emails:

1. **you** — a full inquiry summary with *Reply-To* set to the customer, and
2. **the customer** — an acknowledgement in their language. It says plainly that the meeting time is a request and not yet a booking. You can turn this off with `SEND_CUSTOMER_CONFIRMATION=false`.

If no provider is configured, the API returns `503` and the form tells visitors to email you directly. Inquiries are never silently dropped.

**Option A: Resend (recommended, free tier available)**
1. Create an account at <https://resend.com>.
2. Add and verify your domain (DNS records: SPF + DKIM).
3. Create an API key.
4. Set `RESEND_API_KEY`, `MAIL_FROM="Your Studio <no-reply@yourdomain.com>"` and `INQUIRY_TO_EMAIL=you@yourdomain.com`.

**Option B: SMTP (Google Workspace, Microsoft 365, Zoho, Mailgun…)**
Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (use an *app password*, not your login password), `MAIL_FROM` and `INQUIRY_TO_EMAIL`.

### 4. Meeting scheduling (optional): Calendly

Set `NEXT_PUBLIC_CALENDLY_URL` to your event link, for example `https://calendly.com/your-team/intro-call`. After someone submits the form, the confirmation screen offers **“Book a time now”**. This opens your Calendly calendar inline, with their name and email prefilled, so they can get an instantly confirmed slot.

Without it, the customer's preferred date and time are sent to you as a **request**. The site never tells a customer a meeting is confirmed: you confirm it by replying to the inquiry email.

> `NEXT_PUBLIC_*` variables are read at **build time**. Redeploy after changing them.

### 5. Spam protection

These are built in and need no setup:
- a hidden honeypot field
- a minimum fill time (submissions faster than 4 s are rejected)
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
| `INQUIRY_TO_EMAIL` | Recommended | Inbox for new inquiries (defaults to `contact.email`) |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional | Instant booking on the confirmation screen |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` | Optional | CAPTCHA |
| `SEND_CUSTOMER_CONFIRMATION` | Optional | `false` disables the customer acknowledgement email |
| `INQUIRY_RATE_LIMIT` | Optional | Inquiries per IP per 15 min |
| `MAIL_PROVIDER` | Optional | Force `resend`, `smtp` or `console` (dev only) |

All secrets are read only on the server. The browser never sees them.

---

## Deployment

The easiest option is **Vercel**: import the repository, add the environment variables above, and deploy. Any Node.js 20+ host also works:

```bash
npm ci && npm run build && npm start
```

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
- [ ] Swap concept projects for real case studies as you get them (`work` in the dictionaries plus `src/components/ProjectMockups.tsx`)
