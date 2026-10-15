# Premium redesign (v3) — task brief

Branch: `premium-v3`. Do not push to the default branch; give Martin a preview link.

Make the Fusion Sites website look truly premium. Content changes are allowed: shorten text, restructure sections, use more images. Never invent facts about Fusion Sites itself (no fake client counts, ratings, reviews or stats). Keep contact details, company info, legal pages and prices correct, in FI / SV / EN.

## Progress
See the checklist at the bottom. Tick items as they are done so the next session can continue.

## New images (`/public/source/`)
Most are collages (1536×1024). Crop each tile precisely (no borders, labels or neighbouring tiles), export as optimized WebP in `/public/img/`. If a crop is too low-res for where it is used, use it smaller rather than stretching, and list it so Martin can regenerate it.

1. `premium-collage.png` (12 tiles): house at dusk, desk with monitor+laptop, phone on rock, mountain terrace at sunset, office with mountain view, laptop edge with blue light, dark rock texture, blue glass wave. Use as section backgrounds, full-width image bands and the About image. Do not use its before/after tiles or the three text cards.
2. `laptop-phone-mockup.png`: "craftsmanship" image beside the services section.
3. `concepts.png` (Ember Roasters, Lumo Clinic, Voltra, Form & Fjord): replace the concept-study previews. Large image cards (title + category + one line), swipeable on mobile, 2×2 on desktop. Remove the built-in fake mini-sites. Crop away the "01 EMBER ROASTERS" header rows.
4. `before-after-grid.png` + `before-after-rows.png`: replace the interactive before/after slider. The 3 wide rows (Bygg, Restaurang, Gym) are the main showcase with tabs; on mobile stack before/after with a clear label. Tiles from the 8-pair grid go in a smaller swipeable gallery below. Labels translated (Före/Efter, Ennen/Jälkeen, Before/After).
Keep a short translated note that these are illustrative example businesses, not clients.

## Design direction
- Dark, cinematic, calm. Background #05080F, alt #080D18, cards #0C1322, border rgba(255,255,255,0.07), text #F3F6FB, secondary #9AA6B8, accent #2F7BFF (hover #5B9BFF), used sparingly.
- Images do the work. Every section = headline + 1–2 short sentences max.
- Inter/Manrope UI; headlines 600–700, letter-spacing -0.02em. Optional elegant serif for one accent word.
- Consistent 8px spacing, 14–16px radii, generous whitespace.
- No decorative numbering ("01 —", "02" badges) except the 5 process steps. No chip lists. Eyebrow labels rarely.
- Subtle motion only (fade/scale-in, slow parallax on image bands). Respect prefers-reduced-motion.

## Homepage structure
1. Hero: laptop image + depth effect (keep), short headline, one sentence, primary CTA + "see work".
2. Slim info strip (studio, response time, languages).
3. Real work: VYRO Athletics + Niipperin Maanrakennus (https://client-niipperin-maanrakennus.rcf249tkgp.workers.dev) as big featured cards with real screenshots in laptop+phone mockups.
4. Before/after with the new images.
5. Services: 4 cards (icon + title + one sentence) beside the laptop-phone mockup image.
6. Full-width image band with one short line.
7. Concept studies with the new images.
8. Process: 5 steps, horizontal timeline (swipe on mobile).
9. Pricing: 3 packages, max 4 bullets each.
10. About: image + one short paragraph about Martin and Casper.
11. FAQ: max 4 questions, collapsed.
12. Final CTA over a dark image with one button.

## Bugs
- Logo always scrolls to top of the current language homepage, even when already there.
- Every "start a project" button opens the inquiry flow as a modal/sheet with its own URL (/[lang]/start); back button closes it.
- Hero laptop screenshot matches page language.
- Canonical / og URLs use the real production URL, not localhost.

## Mobile (top priority)
- Body 16px, headlines max ~36px, 20px side padding, no horizontal scroll at 360px.
- Carousels with scroll-snap; page roughly half as long as before.
- Responsive WebP with srcset, lazy-load below the fold; Lighthouse mobile 90+, CLS < 0.05.

## Check
- Full-page screenshots at 390px and 1440px in FI, SV, EN; fix anything generic, cramped, blurry or misaligned.
- List shortened/removed text and low-res crops. Keep Cloudflare-compatible.

## Checklist
- [x] Crop all images to /public/img/ (21 WebP files; ba-*.webp have baked-in Swedish Före/Efter text — overlay translated labels or crop further)
- [ ] Colors + typography tokens
- [ ] Before/after section with new images
- [ ] Concept studies with new images
- [ ] Homepage restructure + shorter text (FI/SV/EN)
- [ ] Image bands, About image, final CTA
- [ ] Bugs (logo, start modal, hero language, canonical)
- [ ] Mobile pass + screenshots
- [ ] Build check
