# Nivetha Dhanakoti — Portfolio

A personal portfolio website built with **React + Vite**, featuring:
- 🌗 Dark/Light theme toggle (dark blue/purple/black ↔ light blue/light purple)
- 📱 Fully responsive
- 🗂️ Pages: Home, About, Projects, Publications, Certifications, Contact
- 📥 Resume download button
- 🔗 Per-project GitHub + Live Demo buttons

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

## 🏗️ Build for Production

```bash
npm run build
```

---

## 🌐 Deploy to GitHub Pages

### One-time setup:
1. Push this repo to GitHub as `nivetha-portfolio` (or any name)
2. In `vite.config.js`, change `base` to match your repo name:
   ```js
   base: '/your-repo-name/',
   ```
3. Go to **Settings → Pages** → set **Source** to **GitHub Actions**
4. Push to `main` — the GitHub Action in `.github/workflows/deploy.yml` will auto-deploy!

Your site will be live at: `https://<your-username>.github.io/nivetha-portfolio/`

---

## ✏️ Customising

- **Update project GitHub/Live links**: Edit the `PROJECTS` array in `src/App.jsx` — replace `"#"` with your real URLs.
- **Resume PDF**: Place your resume as `public/Website_Nivetha_Resume.pdf`
- **Social links**: Search for `github.com/nivikoti` and `linkedin.com/in/nivetha-dhanakoti` in `App.jsx` and update as needed.
