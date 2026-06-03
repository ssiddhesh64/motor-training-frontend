# Royal Motor Training School — Website

Frontend for **Royal Motor Training School**, a local, offline-first motor driving school in Malad East, Mumbai (est. 1989). The site helps students learn about courses, prepare for the RTO theory exam, and reach the school by phone or WhatsApp.

**Live site:** [https://ssiddhesh64.github.io/royal-motors-frontend](https://ssiddhesh64.github.io/royal-motors-frontend)

## Features

- **Services & packages** — Training programs and pricing (2-wheeler, 4-wheeler, licence assistance, and related services)
- **Gallery** — Photos of the school, vehicles, and training
- **Contact** — Enquiry form, map, timings; leads open WhatsApp with a pre-filled message
- **RTO mock test** — Free 15-question practice test with timer and answer review
- **How it works** — Step-by-step journey from enquiry to licence
- **FAQ** — Common questions about training, fees, and RTO
- **Document checklist** — What to bring for learner’s licence and first visit (filterable by vehicle type)
- **Floating WhatsApp** — Quick chat button on every page

There is no backend in this repo. Enquiries are handled offline via phone, WhatsApp, and in-person visits at the centre.

## Tech stack

| Tool                                                        | Version (approx.) |
| ----------------------------------------------------------- | ----------------- |
| [React](https://react.dev/)                                 | 19                |
| [Vite](https://vite.dev/)                                   | 8                 |
| [Tailwind CSS](https://tailwindcss.com/)                    | 4                 |
| [React Router](https://reactrouter.com/)                    | 7                 |
| [react-toastify](https://fkhadra.github.io/react-toastify/) | 11                |
| [react-icons](https://react-icons.github.io/react-icons/)   | 5                 |

Also uses ESLint, Prettier, and [gh-pages](https://github.com/tschaub/gh-pages) for deployment.

## Routes

| Path            | Page                                      |
| --------------- | ----------------------------------------- |
| `/`             | Home (hero, about, map, services preview) |
| `/services`     | Services & pricing                        |
| `/gallery`      | Photo gallery                             |
| `/contact`      | Contact form, details, and map            |
| `/how-it-works` | Enrolment and training process            |
| `/faq`          | Frequently asked questions                |
| `/documents`    | Document checklist                        |
| `/mocktest`     | RTO theory mock test                      |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (comes with Node.js)

## Setup

```bash
git clone https://github.com/ssiddhesh64/royal-motors-frontend.git
cd royal-motors-frontend
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot reload     |
| `npm run build`   | Production build to `dist/`               |
| `npm run preview` | Serve the production build locally        |
| `npm run lint`    | Run ESLint                                |
| `npm run format`  | Format code with Prettier                 |
| `npm run clean`   | ESLint auto-fix + Prettier                |
| `npm run deploy`  | Build and publish `dist/` to GitHub Pages |

`deploy` runs `predeploy` (`npm run build`) automatically before publishing.

## Project structure

```
src/
├── pages/          # Route-level views (Home, Services, MockTest, FAQ, etc.)
├── components/     # Reusable UI (Navbar, Footer, maps, WhatsApp, shared layouts)
├── data/           # Static content (questions, services, FAQ, gallery, checklists)
├── constants/      # Shared values (phone, WhatsApp helpers)
├── App.jsx         # Routes and global layout
└── main.jsx        # App entry point
```

## Contact

**Royal Motor Training School**  
Sheetal Dwar Bldg, Shivaji Chowk, Daftary Road, Malad East, Mumbai – 400097

- Phone: +91 90224 41860
- Website enquiries: use the [Contact](/contact) page or WhatsApp from the site

---

Private project for Royal Motor Training School. All rights reserved.
