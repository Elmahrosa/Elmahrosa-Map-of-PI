# EMAPOFPI Setup Guide

## Prerequisites

1. **Node.js 18+** installed
2. **Pi Network Developer Account** at [developers.minepi.com](https://developers.minepi.com)
3. **Domain configured**: emapofpi.teosegypt.com

## Installation Steps

### 1. Install Dependencies

\`\`\`bash
npm install
npm install @pinetwork-js/sdk
\`\`\`

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Get these from Pi Developer Portal
PI_API_KEY=your_api_key_from_pi_portal
PI_WALLET_PRIVATE_KEY=your_wallet_private_key
NEXT_PUBLIC_PI_APP_ID=your_app_id_from_pi_portal

# Your domain
NEXT_PUBLIC_APP_URL=https://emapofpi.teosegypt.com
\`\`\`

### 3. Pi Developer Portal Configuration

1. Go to [developers.minepi.com](https://developers.minepi.com)
2. Create or select your app
3. Navigate to **App Configuration**
4. Add these settings:
   - **App Name**: EMAPOFPI
   - **App URL**: `https://emapofpi.teosegypt.com`
   - **Validation Key**: Upload `public/validation-key.txt`
   - **Permissions**: `username`, `payments`

### 4. Domain Verification

1. Deploy your app to make `validation-key.txt` accessible
2. In Pi Developer Portal, click **Verify Domain**
3. Wait for verification (may take a few minutes)

### 5. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to test locally.

### 6. Deploy to Production

**Using Vercel:**

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add custom domain
vercel domains add emapofpi.teosegypt.com
\`\`\`

**Environment Variables in Vercel:**

Add these in Vercel Dashboard → Settings → Environment Variables:
- `PI_API_KEY`
- `PI_WALLET_PRIVATE_KEY`
- `NEXT_PUBLIC_PI_APP_ID`
- `NEXT_PUBLIC_APP_URL`

### 7. Test in Pi Browser

1. Open Pi Browser app on mobile
2. Navigate to your app URL
3. Test authentication flow
4. Test payment creation

## API Endpoints

All API routes are in `app/api/`:
- `/api/escrow/*` - Escrow management
- `/api/trust/score` - Trust scoring
- `/api/petition-ai` - AI petition generator
- `/api/compliance-bot` - Compliance checker
- `/api/treasury-auditor` - Treasury auditing

## Troubleshooting

**Pi SDK not found:**
- Ensure you're testing in Pi Browser, not regular browser
- Check `window.Pi` is available in browser console

**Domain verification fails:**
- Ensure `validation-key.txt` is accessible
- Check DNS records point to your hosting
- Wait 5-10 minutes for DNS propagation

**Authentication errors:**
- Verify `NEXT_PUBLIC_PI_APP_ID` matches Pi Portal
- Check app is approved in Pi Developer Portal
- Ensure permissions are configured correctly

## Support

- Pi Network Docs: [https://developers.minepi.com/doc](https://developers.minepi.com/doc)
- EMAPOFPI Issues: Contact founder via dashboard
