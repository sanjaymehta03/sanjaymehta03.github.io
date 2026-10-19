# Modern Personal Academic & Engineering Portfolio ($0 Hosting)

A high-performance, modern, and responsive personal website designed to showcase **Resumes**, **Research Papers**, **Blog Articles**, and **Open-Source Projects**.

Built with **Vite**, **React**, and a custom **Vanilla CSS Glassmorphic Design System**.

---

## Features

- **$0 Hosting Cost**: Ready to deploy for free on **GitHub Pages**, **Vercel**, or **Netlify**.
- **Interactive Resume Modal**: Built-in CV preview, print-ready layout, and PDF download link.
- **Research Paper Library**: Filterable papers by category, expanded abstract viewer, and **1-Click BibTeX Citation copier**.
- **Blog Engine**: Client-side article search, tag filters, read time calculation, and code block formatting.
- **Dark & Light Mode Switcher**: Smooth visual theme transition with local storage persistence.
- **Automated Deploy Pipeline**: Pre-configured `.github/workflows/deploy.yml` for automatic deployment on `git push`.

---

## 🚀 Quick Start (Local Development)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start local development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

---

## 🌐 How to Host for $0 (Step-by-Step)

### Option A: GitHub Pages (Recommended)

1. Create a free repository on GitHub (e.g. `personal-website` or `username.github.io`).
2. Initialize git and push your project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. In your GitHub Repository, go to **Settings > Pages**.
4. Set **Source** to **GitHub Actions**.
5. Your site will automatically build and publish at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`!

---

## 📝 Editing Content

All website data is centralized in simple, easy-to-edit JavaScript files in `src/data/`:

- `src/data/profileData.js`: Edit your bio, contact info, skills matrix, and timeline.
- `src/data/papersData.js`: Add new research papers, abstracts, and BibTeX entries.
- `src/data/blogData.js`: Write new articles, code tutorials, and tag lists.
- `src/data/projectsData.js`: Add open-source repos, live demo links, and project descriptions.
- `public/resume.pdf`: Replace with your actual PDF resume file.
