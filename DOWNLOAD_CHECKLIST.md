# Download & Deployment Checklist

Use this checklist before downloading and deploying your app.

## Pre-Download

- [ ] All code changes saved in v0
- [ ] Latest build tested in v0 preview
- [ ] No console errors in browser dev tools
- [ ] Mobile responsive design verified

## Download

- [ ] Click three dots menu in v0
- [ ] Select "Download ZIP"
- [ ] Extract ZIP to working directory
- [ ] Verify all files present (check package.json, app/, components/, etc.)

## Local Setup

- [ ] Node.js 18+ installed: `node -v`
- [ ] pnpm installed: `pnpm -v`
- [ ] Run `pnpm install` successfully
- [ ] Create `.env.local` with all required variables
- [ ] Run `pnpm build` - NO ERRORS
- [ ] Run `pnpm start` - app works at localhost:3000

## Domain Setup

- [ ] Domain emapofpi.teosegypt.com DNS configured
- [ ] SSL certificate obtained (Let's Encrypt)
- [ ] Server/hosting ready (VPS, cPanel, etc.)

## Deployment

- [ ] Files uploaded to server
- [ ] Dependencies installed on server
- [ ] Production build created on server
- [ ] App running on port 3000
- [ ] Nginx/Apache reverse proxy configured
- [ ] PM2 or similar process manager setup

## Pi Network Integration

- [ ] App registered at develop.pi
- [ ] API credentials obtained
- [ ] Environment variables configured
- [ ] Domain verified in Pi portal
- [ ] Verification meta tag present
- [ ] Payment flow tested in sandbox

## Post-Deployment

- [ ] App accessible at https://emapofpi.teosegypt.com
- [ ] SSL working (https)
- [ ] All pages load correctly
- [ ] Language toggle (EN/AR) works
- [ ] Founder dashboard accessible at /founder
- [ ] Privacy and Terms pages work
- [ ] Pi SDK loaded (check browser console)

## Optional - Add Vercel Later

- [ ] Push code to GitHub
- [ ] Connect repo to Vercel
- [ ] Add environment variables in Vercel
- [ ] Deploy and test
- [ ] Update Pi Network portal with Vercel URL
