# Deployment Guide - Royal Chai Landing Page

## Prerequisites

Before deploying, ensure you have:
- Git installed
- A GitHub account
- Your project built and tested locally

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `royal-chai-landing` (or your preferred name)
3. Don't initialize with README (we already have one)

## Step 2: Push to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit with message
git commit -m "Initial commit: Royal Chai landing page"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Option A: Deploy to Netlify

### Via Netlify Website (Easiest)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and authorize
5. Select your `royal-chai-landing` repository
6. Build settings are already configured in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. Your site will be live at `https://random-name.netlify.app`
9. You can customize the domain in Site settings

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Option B: Deploy to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

## Option C: Deploy to GitHub Pages

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/royal-chai-landing/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Your site: `https://YOUR_USERNAME.github.io/royal-chai-landing/`

## Verify Deployment

After deployment, check:
- ✅ Page loads correctly
- ✅ Logo and animations work
- ✅ Countdown timer displays
- ✅ Email form functions
- ✅ Social icons are visible
- ✅ Mobile responsive design works
- ✅ All hover effects work

## Custom Domain (Optional)

### For Netlify:
1. Go to Domain settings
2. Add custom domain
3. Update DNS records with your domain provider

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS as instructed

## Environment Variables (if needed)

If you add backend integration later:

**Netlify**: Site settings → Build & deploy → Environment variables

**Vercel**: Project Settings → Environment Variables

---

## Quick Reference

**Live Site URL**: [Add your deployed URL here]

**GitHub Repo**: [Add your GitHub repo URL here]

**Build Command**: `npm run build`

**Dev Command**: `npm run dev`

Good luck with your deployment! 🚀
