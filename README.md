<div align="center">

# ✦ Kishore Kumar — Portfolio

**A refined, production-grade personal portfolio built with React, Framer Motion & Tailwind CSS**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-7c3aed?style=for-the-badge&logo=vercel&logoColor=white)](https://kishore-portfolio-ten-bay.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-ff5733?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-a78bfa?style=for-the-badge)](./LICENSE)

<br/>

![Portfolio Preview](./public/assets/kishore.png)

</div>

---

## 📌 Overview

A personal portfolio website that presents my background, skills, projects, and professional links in a clean and modern interface. Built with a focus on smooth animations, responsive design, and a consistent dark visual language.

This site is designed to reflect the same standards I apply to the software I build — clarity, attention to detail, and a polished finish.

---

## 🚀 Live Site

> **[https://kishore-portfolio-ten-bay.vercel.app/](https://kishore-portfolio-ten-bay.vercel.app/)**

Deployed via **Vercel** — auto-deploys on every push to `main`.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Royal Dark Theme** | Deep violet/fuchsia glassmorphic design system |
| 🌀 **Framer Motion** | Page-level and component-level animations throughout |
| 📱 **Fully Responsive** | Optimised for mobile, tablet, and desktop |
| ♿ **Reduced Motion** | Respects `prefers-reduced-motion` for accessibility |
| 📄 **Resume Download** | Direct PDF download from the home page |
| 📬 **Email Contact** | Contact form powered by EmailJS |
| 🔍 **SEO Ready** | Meta tags via `react-helmet-async` |
| ⚡ **Fast Load** | Optimised build via Create React App |

---

## 🗂️ Site Sections

```
/  (Home)         → Hero with profile card, role ticker, action buttons
├── About         → Bio, profile cards, technical skills
├── Internship    → Work experience & internship details
├── Projects      → Featured project case studies
├── Certificates  → Academic & professional certifications
└── Contact       → EmailJS-powered contact form
```

---

## 🛠️ Tech Stack

### Core
| Technology | Purpose |
|---|---|
| **React 18** | UI framework & component architecture |
| **Framer Motion 12** | Animations, transitions, gesture handling |
| **Tailwind CSS 3** | Utility-first styling |
| **Lucide React** | Consistent icon system |

### Tooling
| Tool | Purpose |
|---|---|
| **Create React App** | Build system & dev server |
| **EmailJS** | Serverless contact form |
| **react-helmet-async** | SEO meta management |
| **Vercel** | Hosting & CI/CD |

---

## 📁 Project Structure

```
kishore-portfolio/
├── public/
│   └── assets/
│       ├── kishore.png          # Profile photo
│       └── Kishore_Resume.pdf   # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navigation
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── RoyalBackground.jsx  # Animated background layer
│   │   └── ScrollToTop.jsx      # Scroll restoration
│   ├── pages/
│   │   ├── Home.jsx             # Landing / hero section
│   │   ├── About.jsx            # Profile & skills
│   │   ├── Internship.jsx       # Experience
│   │   ├── Projects.jsx         # Featured projects
│   │   ├── Certificates.jsx     # Certifications
│   │   └── Contact.jsx          # Contact form
│   ├── App.js                   # Root app & routing
│   ├── index.css                # Global design system & tokens
│   └── index.js                 # Entry point
├── package.json
├── tailwind.config.js
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 16
- **npm** ≥ 8

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Kishore22101/kishore-portfolio.git

# 2. Navigate into the project
cd kishore-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `build/` folder, ready for deployment.

---

## 🎨 Design System

The site uses a custom design token system defined in `src/index.css`:

| Token | Description |
|---|---|
| `.glass-panel` | Primary glassmorphic card surface |
| `.glass-panel-soft` | Lighter card variant |
| `.info-card` | Data display card |
| `.btn-neon` | Primary CTA button (violet gradient) |
| `.btn-ghost` | Secondary outlined button |
| `.social-pill` | Social link pill button |
| `.chip` | Skill/tag badge |
| `.section-kicker` | Small labeling pill above headings |
| `.royal-divider` | Animated gradient divider line |
| `.royal-glow-dot` | Pulsing accent dot |
| `.meta-label` | Small uppercase category label |
| `.meta-value` | Bold data value text |

---

## 📬 Contact Configuration

The contact form uses **[EmailJS](https://www.emailjs.com/)**. To configure for your own account:

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a **Service**, **Template**, and get your **Public Key**
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

## 🚢 Deployment

This project is deployed on **Vercel**:

```bash
# Push to main — Vercel auto-deploys
git push origin main
```

To deploy manually:
```bash
npm run build
# Then drag the build/ folder to vercel.com/new
```

---

## 👤 Author

**Kishore Kumar**
B.Tech — Artificial Intelligence & Data Science
J.N.N Institute of Engineering, Tamil Nadu, India

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/kishore-kumar-0717542a1)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/Kishore22101)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

> You are free to use this project as a reference or starting point for your own portfolio. Please give credit if you do.

---

<div align="center">

**Made with focus, discipline, and a lot of Framer Motion**

⭐ Star this repo if you found it useful!

</div>
