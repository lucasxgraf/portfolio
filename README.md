# Lucas Graf — Portfolio

![Lucas Graf Logo](public/assets/img/logo/logo.png)

Personal portfolio website of **Lucas Graf**, Fullstack Developer — built with Angular, featuring bilingual content (DE/EN), GSAP-powered scroll animations, and a serverless contact form.

**Live:** [lucasgraf.com](https://lucasgraf.com)

---

## About the Project

This is my personal portfolio: an overview of who I am, my tech stack, and a selection of my frontend and backend projects — each with a live demo link and GitHub repository. It's a fully self-built, single-page Angular application, not a template, and doubles as a playground for trying out animation, i18n, and deployment patterns I want to get comfortable with.

---

## Features

- **Bilingual (DE/EN)** — powered by `ngx-translate`, with the chosen language persisted in `localStorage`
- **Scroll-triggered animations** — built with GSAP `ScrollTrigger` for smooth section reveals
- **Featured projects showcase** — frontend and backend projects side by side, each visually tagged by category, with live-demo and GitHub links plus a detail dialog
- **Skills overview** — grouped by Frontend, Backend, and Tools & Practices
- **Feedback carousel** — testimonials from past team projects
- **Serverless contact form** — sends mail via a Vercel serverless function (Nodemailer + IONOS SMTP), no backend server required
- **Legal pages** — Imprint and Privacy Policy per German law (§5 DDG / DSGVO)
- **Fully responsive** — optimized from mobile to desktop

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Angular 20 (standalone components, zoneless change detection) | Application framework |
| TypeScript | Language |
| SCSS | Styling |
| GSAP + ScrollTrigger | Scroll animations |
| ngx-translate | i18n (DE/EN) |
| Nodemailer | Contact form email delivery |
| Vercel | Hosting & serverless functions |

---

## Project Structure

```text
src/app/
├── core/
│   ├── components/     # Header, footer, loader — shared across all pages
│   └── services/       # Language persistence, etc.
├── features/
│   ├── portfolio/      # Hero, about-me, skills, featured-projects, feedback, contact-form
│   └── legal/          # Imprint, privacy policy
api/
└── sendMail.js         # Vercel serverless function for the contact form
```

---

## Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/lucasxgraf/portfolio.git
cd portfolio
```

```bash
# 2. Install dependencies
npm install
```

```bash
# 3. Start the local development server
ng serve
```

Open `http://localhost:4200` in your browser — the app reloads automatically on file changes.

> The contact form's serverless function (`api/sendMail.js`) only runs on Vercel and requires a `MAIL_PASS` environment variable for the IONOS SMTP account. It is not available when running `ng serve` locally.

---

## Building

```bash
ng build
```

Production-optimized build artifacts are written to `dist/`.

---

## Running Tests

```bash
ng test
```

Runs unit tests via [Karma](https://karma-runner.github.io) and Jasmine.

---

## Contact

Lucas Graf — [contact@lucasgraf.com](mailto:contact@lucasgraf.com) — [lucasgraf.com](https://lucasgraf.com)
