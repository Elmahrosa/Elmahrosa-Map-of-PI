# Manual Deployment Guide for emapofpi.teosegypt.com

This guide will help you deploy Elmahrosa Map of Pi to your own hosting without Vercel.

## Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)
- Access to your hosting server (VPS, shared hosting, etc.)
- Domain DNS access for emapofpi.teosegypt.com

---

## Step 1: Download & Setup Locally

1. Download the ZIP file from v0
2. Extract to a folder
3. Open terminal in that folder
4. Install dependencies:

\`\`\`bash
pnpm install
\`\`\`

---

## Step 2: Configure Environment Variables

Create `.env.local` file in the root directory:

\`\`\`env
# App Configuration
NEXT_PUBLIC_APP_URL=https://emapofpi.teosegypt.com

# Pi Network Credentials (get from develop.pi)
NEXT_PUBLIC_PI_API_KEY=your_pi_api_key_here
PI_API_SECRET=your_pi_api_secret_here
NEXT_PUBLIC_PI_APP_ID=your_pi_app_id_here
PI_WALLET_ADDRESS=your_pi_wallet_address_here

# Pi Verification Code
NEXT_PUBLIC_PI_VERIFICATION_CODE=your_verification_code_here

# Supabase (optional - for founder dashboard auth)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# Founder Access (simple password mode)
FOUNDER_PASSWORD=elmahrosa2025
\`\`\`

---

## Step 3: Build for Production

Run the build command:

\`\`\`bash
pnpm build
\`\`\`

This creates an optimized production build in the `.next` folder.

If build fails, check the error message and fix any issues.

---

## Step 4: Test Locally

Before deploying, test the production build:

\`\`\`bash
pnpm start
\`\`\`

Visit `http://localhost:3000` and verify everything works.

---

## Step 5: Deployment Options

### Option A: VPS/Cloud Server (DigitalOcean, AWS, etc.)

1. **Upload files to server:**
   \`\`\`bash
   scp -r ./* user@your-server-ip:/var/www/elmahrosa-map
   \`\`\`

2. **SSH into server:**
   \`\`\`bash
   ssh user@your-server-ip
   cd /var/www/elmahrosa-map
   \`\`\`

3. **Install dependencies and build:**
   \`\`\`bash
   pnpm install
   pnpm build
   \`\`\`

4. **Setup PM2 for process management:**
   \`\`\`bash
   npm install -g pm2
   pm2 start pnpm --name "elmahrosa" -- start
   pm2 save
   pm2 startup
   \`\`\`

5. **Configure Nginx reverse proxy:**
   Create `/etc/nginx/sites-available/elmahrosa`:
   \`\`\`nginx
   server {
       listen 80;
       server_name emapofpi.teosegypt.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

6. **Enable site and restart Nginx:**
   \`\`\`bash
   ln -s /etc/nginx/sites-available/elmahrosa /etc/nginx/sites-enabled/
   nginx -t
   systemctl restart nginx
   \`\`\`

7. **Setup SSL with Let's Encrypt:**
   \`\`\`bash
   apt install certbot python3-certbot-nginx
   certbot --nginx -d emapofpi.teosegypt.com
   \`\`\`

### Option B: cPanel/Shared Hosting

1. **Build locally** (on your computer):
   \`\`\`bash
   pnpm build
   \`\`\`

2. **Export as static site** (add to `next.config.mjs`):
   \`\`\`javascript
   output: 'export',
   \`\`\`
   Then rebuild:
   \`\`\`bash
   pnpm build
   \`\`\`

3. **Upload `out` folder** to your cPanel public_html via FTP/File Manager

4. **Configure `.htaccess`** for routing:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ index.html [L]
   \`\`\`

### Option C: Netlify/Railway (Alternative to Vercel)

1. **Netlify:**
   - Connect GitHub repo
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Add environment variables in dashboard

2. **Railway:**
   - Connect GitHub repo
   - Railway auto-detects Next.js
   - Add environment variables
   - Deploy

---

## Step 6: Configure DNS

Point your domain to your server:

1. Go to your DNS provider (GoDaddy, Cloudflare, etc.)
2. Add/Edit A record:
   - **Type:** A
   - **Name:** emapofpi (or subdomain)
   - **Value:** Your server IP address
   - **TTL:** 3600

3. Wait for DNS propagation (5-60 minutes)

---

## Step 7: Update Pi Network Developer Portal

1. Go to https://develop.pi
2. Update your app URL to: `https://emapofpi.teosegypt.com`
3. Add redirect URIs:
   - `https://emapofpi.teosegypt.com/auth/callback`
4. Verify domain ownership

---

## Step 8: Monitor & Maintain

- Check logs: `pm2 logs elmahrosa` (if using PM2)
- Restart app: `pm2 restart elmahrosa`
- Update code: Pull new changes, rebuild, restart

---

## Troubleshooting

**Build fails:**
- Check Node version: `node -v` (must be 18+)
- Delete `.next` and `node_modules`, reinstall
- Check for TypeScript errors

**App won't start:**
- Check port 3000 is not in use: `lsof -i :3000`
- Check environment variables are set
- Check file permissions on server

**Domain not working:**
- Verify DNS propagation: `nslookup emapofpi.teosegypt.com`
- Check Nginx/Apache configuration
- Check SSL certificate status

---

## Maintenance Commands

\`\`\`bash
# Update dependencies
pnpm update

# Rebuild
pnpm build

# Restart app
pm2 restart elmahrosa

# View logs
pm2 logs elmahrosa

# Check status
pm2 status
\`\`\`

---

## Support

For issues, check:
- GitHub repo issues
- Pi Network Developer Forum
- Contact: [your contact email]
