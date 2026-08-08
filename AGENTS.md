# AGENTS.md — Dante Football Academy

## Project

Build a premium, mobile-first website for **Dante Football Academy**, operated by **Dante Sports Management & Academy Ltd**.

- Director: **Amb. Dada Iseoluwa Akinoluwa**
- Location: **Ibadan, Oyo State, Nigeria**
- Prototype deadline: **Tuesday, 4 August 2026**
- Goal: create a polished website the Director could approve as the academy’s new direction.

The site should feel like a credible football-development organisation, not a generic sports template.

## Stack

Use:

- Astro
- TypeScript
- Tailwind CSS
- static output
- Astro components
- minimal client-side JavaScript

Do not add a backend, database, authentication, payments, CMS, e-commerce, large animation library or unnecessary dependencies.

## Architecture

Main navigation:

```text
Home
The Academy
Programmes
Gallery
Contact
```

Primary CTA:

```text
Contact the Academy
```

Routes:

```text
/
├── academy/
├── programmes/
├── gallery/
├── contact/
└── 404/
```

Footer `About Us` links to `/academy/`.

Use anchors for:

```text
/academy/#story
/academy/#philosophy
/academy/#pathway
/academy/#team
```

Do not create separate pages for About Us, Story, Philosophy, Pathway, Team, News, Shop or Trials.

The recently concluded event is only a source of real photographs. Do not add a Trials page, trial form, registration flow or trial CTA.

Formal legal-policy pages, structured SEO, a CMS and advanced features are post-prototype work. Include only a short safeguarding commitment on the Academy page for now.

## Brand

Use the supplied transparent logo without redrawing, recolouring, stretching or altering it.

Expected path:

```text
src/assets/brand/dante-logo.png
```

Public name:

```text
Dante Football Academy
```

Legal line:

```text
Operated by Dante Sports Management & Academy Ltd
```

Colours:

```css
:root {
  --navy-950: #070c24;
  --navy-900: #0b1233;
  --blue-700: #083b82;
  --purple-700: #4b1978;
  --orange-500: #f26522;
  --orange-600: #dd4f12;
  --off-white: #f6f5f2;
  --white: #ffffff;
  --grey-200: #d9dbe2;
  --grey-600: #626775;
  --text-dark: #101426;
}
```

Use navy and off-white as the dominant colours, orange for primary actions, and purple/blue sparingly.

Typography:

- headings: Barlow Condensed
- body and interface: Inter

Visual direction:

**Premium Nigerian football editorial**

Use authentic photography, bold editorial headings, clean grids, generous spacing, navy feature sections, orange CTAs and subtle motion-inspired details.

Avoid generic football templates, excessive gradients, glassmorphism, gimmicky animations, autoplay media, loading screens and scroll-jacking.

## Content Rules

- Use British English.
- Store repeated content in `src/data/*.ts`.
- Do not invent statistics, awards, partnerships, testimonials, qualifications, biographies, fees, dates or schedules.
- Keep unknown values empty or marked in source data; never display placeholders publicly.
- Hide social icons whose URLs are empty.
- Do not leave dead buttons or `#` links.
- Do not identify children by full name unless publication consent is confirmed.
- Use real academy photographs rather than generic stock football images.
- Keep copy concise, confident and credible.

## Confirmed Data

Contact:

```text
Glass House Adeleye,
Opposite Beulah Academy,
Along Iwo Road,
Ibadan, Oyo State, Nigeria

+234 806 251 7246
+234 906 743 9197

danteacademy01@gmail.com
```

Do not add the third international number until confirmed.

Programmes:

```text
Grassroots — U10 to U13
Development — U14 to U16
Elite — U17 to U19
```

Starter descriptions:

- **Grassroots:** fundamental football skills, confidence, coordination and understanding of the game.
- **Development:** technical ability, teamwork, decision-making and game intelligence.
- **Elite:** advanced preparation for talented players progressing towards higher competitive levels.

Do not add fees, schedules or joining requirements until confirmed.

Team data:

```text
Amb. Dada Iseoluwa Akinoluwa
Director — confirm final public title

Dada Adeshewa
Director, Administration and Finance

Dada Halleluyah
Director of Sport

Salami Grace
General Secretary

Adetokunbo Richard
Director of Records, Supply and Stores

Joshua David (mACS, GMICCON)
Director, Marketing, Media and Communications

Azeez Ibrahim
Medical Director
```

Do not invent biographies.

Create an optional `registrationNumber` field and render it only after the correct CAC number is confirmed.

Create empty social values and render only valid URLs:

```ts
export const socialLinks = {
  instagram: '',
  facebook: '',
  tiktok: '',
  youtube: '',
  x: '',
  whatsapp: '',
} as const;
```

## Pages

### Home

Build:

1. Header
2. Hero
3. Credibility strip
4. Academy introduction
5. Programmes preview
6. Why Choose Dante
7. Development pathway
8. Inside Dante photo feature
9. Director’s message
10. Leadership preview
11. Contact CTA
12. Footer

Hero direction:

```text
DANTE FOOTBALL ACADEMY · IBADAN, NIGERIA

Developing football talent.
Building leaders for life.
```

Credibility strip:

```text
Ibadan, Nigeria
U10–U19 Development
Three Development Levels
Football, Education and Character
```

Why Choose Dante:

```text
Structured Coaching
Education and Development
Character and Discipline
Football Opportunities
```

Development pathway:

```text
Identification
→ Assessment
→ Structured Training
→ Player Development
→ Competitive Football
→ Progression Opportunities
```

Use recent event photos under **Inside Dante** without presenting the event as an active registration opportunity.

Director message may use this approved prototype copy:

```text
At Dante Football Academy, we believe talent flourishes when it is
supported by discipline, education, mentorship and genuine opportunity.

Our responsibility is to create an environment where young players can
develop their football ability, strengthen their character and prepare
for the demands of life both on and off the pitch.

We are committed to building more than successful footballers. We are
building confident young people, responsible leaders and future champions.
```

Show no more than four team members on the homepage.

### The Academy

Include:

- Our Story — `id="story"`
- Director’s Message
- Mission and Vision
- Core Values
- Football Philosophy — `id="philosophy"`
- Why Choose Dante
- Development Pathway — `id="pathway"`
- Leadership Team — `id="team"`
- Player Welfare and Safeguarding Commitment
- Contact CTA

Starter values:

```text
Discipline
Integrity
Excellence
Respect
Teamwork
Education
```

Treat mission, vision and values as provisional centralised content.

### Programmes

Include:

- programme introduction
- Grassroots — `id="grassroots"`
- Development — `id="development"`
- Elite — `id="elite"`
- how development works
- skills and qualities developed
- education and player welfare
- enquiry CTA linking to `/contact/`

### Gallery

Build one strong photo essay from the recent event.

Do not create empty filters or categories.

Use a featured image, varied responsive grid, optional captions and a contact CTA.

### Contact

Include the confirmed address, clickable telephone numbers, clickable email, configured social links, programme enquiry and partnership enquiry.

No backend form is needed for the prototype.

## Header and Footer

Header:

- logo and public brand name
- desktop navigation
- accessible mobile menu
- Contact the Academy CTA
- visible focus states
- skip-to-content link

Footer:

- logo and short description
- About Us linking to `/academy/`
- Academy section anchors
- Programmes, Gallery and Contact
- contact details
- configured social icons
- legal organisation line
- copyright

Never leave `#` links.

## Photography

Download the Google Drive originals into:

```text
media-source/recent-event/raw/
```

Add `media-source/` to `.gitignore`.

Only selected website images belong in:

```text
src/assets/images/
├── hero/
├── academy/
├── team/
└── gallery/recent-event/
```

Use descriptive kebab-case filenames.

Image requirements:

- Public-facing football photography should use genuine, authorised DANTE imagery whenever available. Do not introduce AI-generated people or football scenes without explicit approval.
- approved, sharp and varied images
- no unnecessary duplicates
- meaningful alt text
- no child names without confirmed consent
- Astro image optimisation
- width and height specified
- lazy loading below the fold
- only a small gallery preview on the homepage
- consistent `4:5` team crops
- per-person `object-position` stored in team data

Start selecting photographs immediately; do not wait until the Gallery page is built.

## Build Quality

Design mobile first and check:

- mobile: 390px
- tablet: 768px
- desktop: 1440px

Build in:

- semantic HTML
- one `h1` per page
- logical headings
- keyboard-accessible navigation
- visible focus states
- strong colour contrast
- labelled icons
- reduced-motion support
- responsive images
- minimal JavaScript
- no horizontal overflow

Run a production build before reporting completion. Do not claim a command passed unless it actually passed.

Basic page titles and descriptions are enough for the prototype. Formal SEO and Lighthouse targets are not demo blockers.

## Delivery

### Milestone 1 — Foundation and Homepage

- initialise Astro, TypeScript and Tailwind
- add the logo and brand system
- create central data files
- build header, mobile menu and footer
- build a high-fidelity homepage
- run the production build

Do not stop between setup and the homepage unless blocked.

### Milestone 2 — Core Pages

- build The Academy
- build Programmes
- add team data and available photos
- connect routes and anchors

### Milestone 3 — Gallery and Contact

- optimise selected photos
- build the photo essay
- build Contact
- add real social/WhatsApp URLs when supplied

### Milestone 4 — QA and Preview

- check mobile, tablet and desktop
- fix overflow and image crops
- check keyboard navigation
- remove placeholders and dead links
- proofread
- run the production build
- deploy a preview URL

## Codex Behaviour

At the start:

1. Read this file.
2. Inspect the repository.
3. Give a short plan.
4. Work on the requested milestone.

While working:

- follow the approved architecture and brand
- centralise content
- do not invent facts
- do not add trial features
- avoid unrelated rewrites

At the end:

1. Run formatting and the production build.
2. Fix errors caused by the work.
3. Summarise changed files.
4. List missing content or assets.
5. State the next useful action.

## Security

Never commit raw Google Drive photos, `.env` files, passwords, credentials, API keys, tokens, private player information, medical data or identification documents.

## Prototype Done When

- real logo and brand palette are used
- homepage is presentation-ready
- Academy and Programmes pages are complete
- Gallery uses selected real photos
- contact links work
- empty social platforms are hidden
- About Us links to The Academy
- layouts are polished at mobile, tablet and desktop
- no trial page or trial CTA exists
- no visible placeholders, broken images or dead buttons remain
- production build succeeds
- a preview URL is available
