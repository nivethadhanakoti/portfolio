# Nivetha Dhanakoti — Portfolio

A personal portfolio website built with **React + Vite**, featuring:
- Dark/Light theme toggle 
- Fully responsive
- Pages: Home, About, Projects, Publications, Certifications, Contact
- Resume download button
- Per-project GitHub + Live Demo buttons

---

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

---

## Deploy to GitHub Pages

### One-time setup:
1. Push this repo to GitHub 
2. In `vite.config.js`, change `base` to match your repo name:
   ```js
   base: '/your-repo-name/',
   ```
3. Go to **Settings → Pages** → set **Source** to **GitHub Actions**
4. Push to `main` — the GitHub Action in `.github/workflows/deploy.yml` will auto-deploy!

Your site will be live at: `https://<your-username>.github.io/<repo-name>/`
