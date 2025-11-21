# Quick Start Guide - Domain Verification

## Step 1: Get Pi Verification Code (5 minutes)

1. Go to **Pi Developer Portal**: https://developers.minepi.com/
2. Sign in with your Pi Network account
3. Find your app or create new app:
   - App Name: **Elmahrosa Map of Pi**
   - Category: **Marketplace**
4. Go to **Settings** → **Domain Verification**
5. Click **Add Domain** and enter each URL:
   - `https://elmahrosa-map-of-pi-bj36.vercel.app`
   - `https://elmahrosamapofpi4696.pinet.com`
   - `https://emapofpi.teosegypt.com`
6. Copy the verification code (looks like: `pi_verify_abc123xyz456`)

## Step 2: Add Verification Code to Your App (2 minutes)

1. In your project root, create `.env.local` file
2. Add the verification code:
   \`\`\`env
   NEXT_PUBLIC_PI_VERIFICATION_CODE=pi_verify_abc123xyz456
   \`\`\`
3. Save the file

## Step 3: Deploy to Vercel (3 minutes)

### Option A: Push to GitHub (Recommended)
1. Commit your changes:
   \`\`\`bash
   git add .
   git commit -m "Add domain verification"
   git push origin main
   \`\`\`
2. Vercel will auto-deploy

### Option B: Manual Deploy
1. Download ZIP from v0
2. Extract and run:
   \`\`\`bash
   npm install
   npm run build
   vercel --prod
   \`\`\`

## Step 4: Add Environment Variable in Vercel (2 minutes)

1. Go to Vercel Dashboard: https://vercel.com/dashboard
2. Select your project: **elmahrosa-map-of-pi-bj36**
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name:** `NEXT_PUBLIC_PI_VERIFICATION_CODE`
   - **Value:** `pi_verify_abc123xyz456` (your actual code)
   - **Environments:** Production, Preview, Development
5. Click **Save**
6. Redeploy your app (Deployments → Latest → Redeploy)

## Step 5: Verify in Pi Portal (1 minute)

1. Return to Pi Developer Portal
2. Click **Verify Domain** button
3. Wait 30 seconds for verification
4. See green checkmark ✓ when complete

## Step 6: Configure Custom Domain (Optional, 10 minutes)

### In Your Domain Registrar (TEOSEGYPT.COM)
1. Log in to your domain provider
2. Go to DNS settings
3. Add CNAME record:
   \`\`\`
   Type: CNAME
   Name: emapofpi
   Value: cname.vercel-dns.com
   TTL: 3600
   \`\`\`
4. Save changes (DNS takes 1-24 hours to propagate)

### In Vercel Dashboard
1. Go to project **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `emapofpi.teosegypt.com`
4. Click **Add**
5. Wait for SSL certificate (automatic)

## Step 7: Test All Domains (2 minutes)

Visit each URL and verify:
- [ ] https://elmahrosa-map-of-pi-bj36.vercel.app/ (loads correctly)
- [ ] https://elmahrosa-map-of-pi-bj36.vercel.app/verify (shows verification page)
- [ ] https://elmahrosamapofpi4696.pinet.com (if configured)
- [ ] https://emapofpi.teosegypt.com (once DNS propagates)

## Troubleshooting

### Verification Failed
- Check that `.env.local` has correct code
- Ensure you redeployed after adding environment variable
- Clear browser cache and try again

### Domain Not Loading
- Wait 24 hours for DNS propagation
- Check DNS records are correct
- Verify SSL certificate is active

### Pi SDK Not Working
- Ensure `NEXT_PUBLIC_PI_API_KEY` is set in Vercel
- Check Pi SDK script is loading in browser console
- Verify app is approved in Pi Developer Portal

## Success Checklist

- [ ] Pi verification code obtained from Developer Portal
- [ ] Environment variable added to `.env.local`
- [ ] Code deployed to Vercel
- [ ] Environment variable added in Vercel dashboard
- [ ] All domains verified in Pi Developer Portal
- [ ] Custom domain DNS configured (if applicable)
- [ ] SSL certificate active on all domains
- [ ] Test page `/verify` accessible on all domains

## Next Steps

After domain verification is complete:
1. Submit app for Pi Network approval (see `PI_VERIFICATION_GUIDE.md`)
2. Test payments in sandbox mode
3. Add privacy policy and terms pages
4. Prepare demo video and screenshots
5. Go live with real Pi transactions

## Need Help?

- **Pi Developer Support:** developers@minepi.com
- **Vercel Support:** https://vercel.com/support
- **GitHub Issues:** https://github.com/Elmahrosa/Elmahrosa-Map-of-PI/issues
