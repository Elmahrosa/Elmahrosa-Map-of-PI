# Domain Verification Guide for Pi Network

## Your Domains
1. **Vercel Production:** https://elmahrosa-map-of-pi-bj36.vercel.app/
2. **Pi Network Subdomain:** https://elmahrosamapofpi4696.pinet.com
3. **Custom Domain:** EMAPOFPI.TEOSEGYPT.COM

---

## Step 1: Configure Domains in Pi Developer Portal

### Go to Developer Portal
1. Visit **https://developers.minepi.com/**
2. Sign in with your Pi Network account
3. Find your app: **Elmahrosa Map of Pi**
4. Click **"Edit App Settings"**

### Add Your URLs
In the **App URLs** section, add:

**Production URL:**
\`\`\`
https://elmahrosa-map-of-pi-bj36.vercel.app
\`\`\`

**Pi Network URL:**
\`\`\`
https://elmahrosamapofpi4696.pinet.com
\`\`\`

**Custom Domain:**
\`\`\`
https://emapofpi.teosegypt.com
\`\`\`

### Configure Redirect URIs
Add all callback URLs for authentication:
\`\`\`
https://elmahrosa-map-of-pi-bj36.vercel.app/auth/callback
https://elmahrosamapofpi4696.pinet.com/auth/callback
https://emapofpi.teosegypt.com/auth/callback
http://localhost:3000/auth/callback
\`\`\`

---

## Step 2: Verify Domain Ownership

### Method 1: Meta Tag Verification (Recommended)
Pi Network will provide you with a verification meta tag. Add it to your app:

1. Copy the meta tag from Pi Developer Portal (looks like):
   \`\`\`html
   <meta name="pi-network-verification" content="your-unique-code-here" />
   \`\`\`

2. Add to your app's `<head>` section (I'll add this to layout.tsx)

### Method 2: DNS Verification
For custom domain (EMAPOFPI.TEOSEGYPT.COM):

1. Pi Network will provide a TXT record
2. Add to your domain DNS settings:
   \`\`\`
   Type: TXT
   Name: @ or _pi-network
   Value: pi-verification=your-unique-code
   TTL: 3600
   \`\`\`

---

## Step 3: Link Custom Domain to Vercel

### In Vercel Dashboard
1. Go to your project: **elmahrosa-map-of-pi-bj36**
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter: `emapofpi.teosegypt.com`
5. Vercel will provide DNS records

### In Your Domain Registrar (TEOSEGYPT.COM)
Add these DNS records:
\`\`\`
Type: CNAME
Name: emapofpi
Value: cname.vercel-dns.com
TTL: 3600
\`\`\`

Or use A records if required:
\`\`\`
Type: A
Name: emapofpi
Value: 76.76.21.21
TTL: 3600
\`\`\`

---

## Step 4: Verify in Pi Developer Portal

### Submit for Verification
1. In Pi Developer Portal, click **"Verify Domain"**
2. Pi system will check for:
   - Meta tag in your HTML
   - DNS TXT record (for custom domain)
   - HTTPS certificate
   - App accessibility

3. Wait 5-10 minutes for verification
4. Refresh page to see verification status

### Troubleshooting
- **Meta tag not found:** Clear cache, redeploy app
- **DNS not resolving:** Wait 24-48 hours for DNS propagation
- **HTTPS error:** Ensure SSL certificate is active on all domains

---

## Step 5: Update Environment Variables

After verification, update `.env.local`:
\`\`\`env
NEXT_PUBLIC_APP_URL=https://emapofpi.teosegypt.com
NEXT_PUBLIC_PI_NETWORK_URL=https://elmahrosamapofpi4696.pinet.com
NEXT_PUBLIC_VERCEL_URL=https://elmahrosa-map-of-pi-bj36.vercel.app
\`\`\`

---

## Verification Checklist
- [ ] All three URLs added to Pi Developer Portal
- [ ] Redirect URIs configured for all domains
- [ ] Meta verification tag added to app
- [ ] Custom domain DNS configured in registrar
- [ ] Custom domain added to Vercel
- [ ] Domain verification completed in Pi Portal
- [ ] HTTPS working on all domains
- [ ] Pi SDK authentication tested on all domains

---

## Quick Reference

### Pi Developer Portal
**URL:** https://developers.minepi.com/
**App Name:** Elmahrosa Map of Pi
**Support:** developers@minepi.com

### Your App URLs
- Production: https://emapofpi.teosegypt.com (primary)
- Pi Network: https://elmahrosamapofpi4696.pinet.com (secondary)
- Vercel: https://elmahrosa-map-of-pi-bj36.vercel.app (development)

### DNS Settings Location
Log in to your **TEOSEGYPT.COM** domain registrar to manage DNS records.
\`\`\`

```tsx file="" isHidden
