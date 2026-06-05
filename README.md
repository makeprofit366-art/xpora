# Xpora – Share Your Story

A full-featured experience sharing social platform built for Indian (Telugu + English) users.

## Pages
- **/** – Landing page
- **/feed** – Main feed (logged in)
- **/post/:id** – Post detail / reading experience
- **/write** – Create/write a new post
- **/profile** – User profile
- **/explore** – Discover & search stories

## Tech Stack
- React 18 + React Router v6
- No UI library (pure CSS custom design)
- Lucide React icons
- Google Fonts (Playfair Display + DM Sans)

---

## 🚀 Deploy to Vercel (Recommended)

### Option A: Vercel CLI
```bash
npm install -g vercel
cd xpora
npm install
vercel
```
Follow the prompts — it auto-detects Create React App.

### Option B: GitHub → Vercel (easiest)

1. Push this folder to a GitHub repo:
```bash
cd xpora
git init
git add .
git commit -m "Initial commit: Xpora platform"
gh repo create xpora --public --push --source=.
```
(Or manually create a repo on github.com and push)

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo

3. Vercel auto-detects React. Click **Deploy**. Done! ✅

---

## 🐙 Deploy to GitHub Pages

```bash
npm install
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/xpora",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then:
```bash
npm run deploy
```

---

## Local Development

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Build for Production

```bash
npm run build
```

Creates optimized build in `/build` folder.
