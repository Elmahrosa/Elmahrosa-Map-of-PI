# Deployment Guide - Elmahrosa Map of Pi

## Pi Network Verification Process

### Step 1: Register Your App
1. Visit **https://developers.minepi.com/**
2. Sign in with your Pi Network account
3. Click **"Create New App"**
4. Fill in the app details:
   - **App Name**: Elmahrosa Map of Pi
   - **Short Description**: Verified Pi seller marketplace across Egypt, MENA & Africa
   - **Category**: Marketplace
   - **Platform**: Web App
   - **App URL**: https://elmahrosa-map-of-pi-bj36.vercel.app

### Step 2: Get API Credentials
After registration, you'll receive:
- **App ID** (e.g., `app_12345abcde`)
- **API Key** (e.g., `pk_live_...`)
- **API Secret** (keep this private!)
- **Wallet Address** (for receiving payments)

Add these to your `.env.local` file:
\`\`\`env
NEXT_PUBLIC_PI_API_KEY=your_api_key_here
PI_API_SECRET=your_api_secret_here
NEXT_PUBLIC_PI_APP_ID=your_app_id_here
PI_WALLET_ADDRESS=your_wallet_address_here
\`\`\`

### Step 3: Configure App Settings
In the Pi Developer Portal:

**Redirect URLs:**
- https://elmahrosa-map-of-pi-bj36.vercel.app/auth/callback
- http://localhost:3000/auth/callback (for local testing)

**Required Permissions:**
- ✅ `payments` - For marketplace transactions
- ✅ `username` - For user identification
- ✅ `wallet_address` - For seller verification

**Payment Settings:**
- Enable payment features
- Set minimum payment: 0.1 Pi
- Enable refunds: No (as per fee policy)

### Step 4: Prepare Submission Materials

**Required Screenshots:**
1. Homepage showing verified badge and stats
2. Seller dashboard with verification flow
3. Marketplace with seller listings
4. Founder dashboard (fee management)
5. Mobile responsive views

**Demo Video (2-3 minutes):**
- Show user registration and Pi authentication
- Demonstrate seller verification process
- Show marketplace browsing and transactions
- Display fee structure clearly
- Highlight bilingual support

**Legal Documents:**
- Privacy Policy: https://elmahrosa-map-of-pi-bj36.vercel.app/privacy
- Terms of Service: https://elmahrosa-map-of-pi-bj36.vercel.app/terms

### Step 5: Submit for Verification
In the Pi Developer Portal, submit:
1. **App Description**: Detail the verification process and marketplace purpose
2. **Screenshots**: All 5+ required images
3. **Demo Video**: Upload or provide YouTube link
4. **Privacy Policy URL**: /privacy
5. **Terms of Service URL**: /terms
6. **Support Email**: support@elmahrosa.com
7. **Business Information**: Complete KYB form

**Expected Review Time**: 1-2 weeks

### Step 6: Testing in Sandbox Mode
Before going live:

\`\`\`bash
# Set sandbox mode in .env.local
PI_SANDBOX_MODE=true

# Test flows:
1. User authentication with Pi Network
2. Seller verification payment (test Pi)
3. Marketplace transactions
4. Fee calculations
5. Founder dashboard access
\`\`\`

### Step 7: Go Live
Once approved by Pi Network:

1. Update environment variables to production mode:
\`\`\`env
PI_SANDBOX_MODE=false
NEXT_PUBLIC_PI_API_KEY=pk_live_your_production_key
\`\`\`

2. Deploy to Vercel:
\`\`\`bash
git push origin main
# Vercel auto-deploys
\`\`\`

3. Verify production deployment:
- Test Pi authentication
- Verify payment processing
- Check all routes and features

4. Announce launch to community

## Vercel Deployment

### Environment Variables in Vercel
Add these in your Vercel project settings:

**Pi Network:**
- `NEXT_PUBLIC_PI_API_KEY`
- `PI_API_SECRET`
- `NEXT_PUBLIC_PI_APP_ID`
- `PI_WALLET_ADDRESS`

**Supabase:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

**Founder Auth:**
- `FOUNDER_EMAIL`
- `FOUNDER_PASSWORD_HASH`

**Optional:**
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`
- **Node Version**: 18.x or higher

### Domain Configuration
1. Add custom domain in Vercel
2. Update Pi Developer Portal with new domain
3. Update redirect URLs in Pi app settings

## Monitoring & Maintenance

### Post-Launch Checklist
- [ ] Monitor error logs in Vercel
- [ ] Track Pi payment success rates
- [ ] Review user feedback and support requests
- [ ] Update stats API with real data
- [ ] Monitor founder dashboard access logs
- [ ] Regular security audits
- [ ] Update dependencies monthly

### Support Channels
- GitHub Issues: Bug reports and feature requests
- Email: support@elmahrosa.com
- Founder Dashboard: Direct communication

---

**Ready to Deploy?** Follow steps 1-7 above and launch your verified marketplace!
