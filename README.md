<div align="center">

<h1>Kishore Kumar — Personal Portfolio</h1>

<p>A refined, production-grade personal portfolio built with React, Framer Motion, and Tailwind CSS.</p>

<br/>

<a href="https://kishore-portfolio-ten-bay.vercel.app/">
  <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-7c3aed?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
</a>
&nbsp;
<a href="https://github.com/Kishore22101/kishore-portfolio/stargazers">
  <img src="https://img.shields.io/github/stars/Kishore22101/kishore-portfolio?style=for-the-badge&color=7c3aed&logo=github&logoColor=white" alt="Stars"/>
</a>
&nbsp;
<img src="https://img.shields.io/badge/License-MIT-a78bfa?style=for-the-badge" alt="License MIT"/>

<br/><br/>

<img src="https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/Tailwind%20CSS-3.x-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/Framer%20Motion-12-ff4e00?style=flat-square&logo=framer&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/>

</div>

---

## Overview

A personal portfolio website presenting my background, technical skills, internship experience, and project work. Built with a strong focus on smooth animations, responsive layout, and a consistent dark visual identity.

This site is designed to reflect the same standards I apply in software development — clarity, precision, and a professional finish.

**Live at:** [https://kishorek-portfolio.vercel.app/](https://kishorek-portfolio.vercel.app/)

---

## Features

| Feature | Description |
|---|---|
| Dark Glassmorphic Theme | Deep violet and fuchsia design system with layered glass surfaces |
| Framer Motion Animations | Entry, scroll, and hover animations throughout all sections |
| Fully Responsive | Optimised for mobile, tablet, and desktop viewports |
| Reduced Motion Support | Respects `prefers-reduced-motion` for accessibility |
| Resume Download | Direct PDF download linked from the home section |
| Email Contact Form | Serverless contact form powered by EmailJS |
| SEO Meta Tags | Managed via `react-helmet-async` |
| Role Ticker | Animated rotating role display on the hero section |

---

## Site Sections

```
/  (Home)         →  Hero, profile card, action buttons, highlights
├── About         →  Bio, profile cards, technical skills with levels
├── Internship    →  Professional experience and internship details
├── Projects      →  Featured project case studies with live demo links
├── Certificates  →  Academic and professional certifications
└── Contact       →  EmailJS-powered contact form
```

---

## Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI framework and component architecture |
| Framer Motion | 12 | Animations, transitions, gesture handling |
| Tailwind CSS | 3.x | Utility-first styling system |
| Lucide React | Latest | Consistent and lightweight icon set |

### Supporting Libraries

| Library | Purpose |
|---|---|
| EmailJS | Serverless contact form submission |
| react-helmet-async | SEO meta tag management per page |
| react-icons | Extended icon library |

### Tooling & Deployment

| Tool | Purpose |
|---|---|
| Create React App | Build system and dev server |
| Vercel | Hosting and CI/CD pipeline |
| GitHub | Version control and source |

---

## Project Structure

```
kishore-portfolio/
├── public/
│   └── assets/
│       ├── kishore.png             Profile photograph
│       └── Kishore_Resume.pdf      Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              Responsive sticky navigation
│   │   ├── Footer.jsx              Footer with social links
│   │   ├── RoyalBackground.jsx     Animated radial background layer
│   │   └── ScrollToTop.jsx         Scroll position restoration
│   ├── pages/
│   │   ├── Home.jsx                Landing / hero section
│   │   ├── About.jsx               Profile overview and technical skills
│   │   ├── Internship.jsx          Work and internship experience
│   │   ├── Projects.jsx            Featured project showcase
│   │   ├── Certificates.jsx        Certifications display
│   │   └── Contact.jsx             Contact form with EmailJS
│   ├── App.js                      Root component and section layout
│   ├── index.css                   Global design system and CSS tokens
│   └── index.js                    Application entry point
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js >= 16
- npm >= 8

### Installation

```bash
# Clone the repository
git clone https://github.com/Kishore22101/kishore-portfolio.git

# Navigate into the project
cd kishore-portfolio

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

The optimised output is placed in the `build/` directory, ready for deployment.

---

## Design System

All design tokens are defined in `src/index.css` and composed with Tailwind utilities.

| Class | Description |
|---|---|
| `.glass-panel` | Primary glassmorphic card surface with backdrop blur |
| `.glass-panel-soft` | Lighter secondary card variant |
| `.info-card` | Structured data display card |
| `.btn-neon` | Primary CTA — violet gradient with glow shadow |
| `.btn-ghost` | Secondary outlined button |
| `.social-pill` | Social link pill with dark glass background |
| `.chip` | Skill tag / badge with optional level indicator |
| `.section-kicker` | Small label pill displayed above section headings |
| `.royal-divider` | Animated shimmer gradient divider line |
| `.royal-glow-dot` | Pulsing violet accent dot |
| `.meta-label` | Uppercase category label in muted violet |
| `.meta-value` | Bold white data value text |

---

## Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/) for serverless email delivery. To configure:

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a **Service**, **Template**, and retrieve your **Public Key**
3. Update `src/pages/Contact.jsx` with your credentials:

```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
);
```

---

## Deployment

The project is deployed on Vercel with automatic deployments on every push to `main`.

```bash
# Push to trigger an automatic Vercel deployment
git push origin main
```

To deploy manually via the Vercel CLI:

```bash
npm install -g vercel
npm run build
vercel --prod
```

---

## Author

**Kishore Kumar**
B.Tech — Artificial Intelligence and Data Science
J.N.N Institute of Engineering, Tamil Nadu, India

<a href="https://www.linkedin.com/in/kishore-kumar-0717542a1">
  <img src="https://img.shields.io/badge/LinkedIn-Kishore%20Kumar-0077b5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
&nbsp;
<a href="https://github.com/Kishore22101">
  <img src="https://img.shields.io/badge/GitHub-Kishore22101-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/>
</a>
&nbsp;
<a href="https://kishorek-portfolio.vercel.app/">
  <img src="https://img.shields.io/badge/Portfolio-Live%20Site-7c3aed?style=flat-square&logo=vercel&logoColor=white" alt="Portfolio"/>
</a>

---

## License

This project is licensed under the **MIT License**.

You are free to use this project as a reference or starting point for your own portfolio. Attribution is appreciated but not required.

---

<div align="center">

<sub>Built with focus, discipline, and Framer Motion.</sub>

<br/>

<a href="https://github.com/Kishore22101/kishore-portfolio">
  <img src="https://img.shields.io/badge/View%20on%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="View on GitHub"/>
</a>

</div>
