# Setup Guide - Elmahrosa Map of Pi

Complete setup instructions for local development and production deployment.

---

## 🚀 Quick Start

### 1. Clone Repository

\`\`\`bash
git clone https://github.com/Elmahrosa/Elmahrosa-Map-of-PI.git
cd Elmahrosa-Map-of-PI
\`\`\`

### 2. Install Dependencies

\`\`\`bash
pnpm install
# or
npm install
# or
yarn install
\`\`\`

### 3. Environment Setup

\`\`\`bash
# Copy example environment file
cp .env.example .env.local

# Edit .env.local with your credentials
\`\`\`

### 4. Run Development Server

\`\`\`bash
pnpm dev
\`\`\`

Visit `http://localhost:3000`

---

## 🔐 Authentication Setup

### Option 1: Supabase (Recommended for Production)

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Copy project URL and anon key

2. **Configure Environment Variables**
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_ENABLE_SUPABASE_AUTH=true
   \`\`\`

3. **Run Database Migration**
   - Go to Supabase SQL Editor
   - Copy contents of `scripts/001_create_auth_tables.sql`
   - Execute the script

4. **Create Founder Account**
   \`\`\`sql
   -- In Supabase SQL Editor
   INSERT INTO auth.users (email, encrypted_password)
   VALUES ('founder@elmahrosa.com', crypt('your_password', gen_salt('bf')));
   
   INSERT INTO profiles (id, email, role)
   VALUES (
     (SELECT id FROM auth.users WHERE email = 'founder@elmahrosa.com'),
     'founder@elmahrosa.com',
     'founder'
   );
   \`\`\`

### Option 2: Simple Password (Development Only)

1. **Set Environment Variable**
   \`\`\`env
   FOUNDER_PASSWORD=your_secure_password
   NEXT_PUBLIC_ENABLE_SUPABASE_AUTH=false
   \`\`\`

2. **Access Dashboard**
   - Navigate to `/founder`
   - Enter the password from `FOUNDER_PASSWORD`

---

## 💰 Fee Management Setup

Fees are configured in `lib/fees.ts` and can be modified through the Founder Dashboard.

### Default Fee Structure

- **NFT Minting:** 1.5π (fixed)
- **Trade Commission:** 3.5% (percentage)
- **Seller Verification:** 2.0π (fixed)
- **Premium Listing:** 5.0π/month (fixed)
- **Withdrawal:** 1.0% (percentage)

### Updating Fees

1. **Via Founder Dashboard** (Recommended)
   - Login to `/founder`
   - Navigate to "Fee Settings" tab
   - Click "Edit Fees"
   - Update values and save

2. **Via Database** (Advanced)
   \`\`\`sql
   UPDATE current_fees
   SET amount = 2.0
   WHERE fee_type = 'NFT_MINTING';
   \`\`\`

3. **Via Code** (Initial Setup)
   - Edit values in `lib/fees.ts`
   - Changes apply to new installations

---

## 🗺️ Pi Network SDK Setup

1. **Register Application**
   - Go to [Pi Developer Portal](https://developers.minepi.com)
   - Create new application
   - Copy API credentials

2. **Configure Environment**
   \`\`\`env
   NEXT_PUBLIC_PI_API_KEY=your_api_key
   PI_API_SECRET=your_api_secret
   NEXT_PUBLIC_ENABLE_PI_SDK=true
   \`\`\`

3. **Test Connection**
   - Open homepage
   - Click "Connect Pi Wallet"
   - Authenticate with Pi Browser

---

## 📊 Database Schema

Required tables are created by `scripts/001_create_auth_tables.sql`:

- **profiles** - User accounts with roles
- **current_fees** - Active marketplace fees
- **fee_history** - Audit trail of fee changes

### Manual Database Setup

If not using Supabase, create these tables in your PostgreSQL database:

\`\`\`bash
# Using psql
psql -U your_user -d your_database -f scripts/001_create_auth_tables.sql
\`\`\`

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import GitHub repository
   - Configure project

2. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`
   - Save and redeploy

3. **Configure Domains**
   - Add custom domain (optional)
   - Enable HTTPS

### Manual Deployment

\`\`\`bash
# Build for production
pnpm build

# Start production server
pnpm start
\`\`\`

---

## 🧪 Testing

### Test Founder Dashboard

1. Navigate to `/founder`
2. Login with credentials
3. Verify fee management works
4. Check stats display correctly

### Test Authentication

1. Create test seller account
2. Verify email/password login
3. Check role-based access control

### Test Pi SDK Integration

1. Open in Pi Browser
2. Connect wallet
3. Test payment flow

---

## 🐛 Troubleshooting

### Build Errors

**Missing gsap package:**
\`\`\`bash
pnpm add gsap
\`\`\`

**Supabase connection failed:**
- Check environment variables
- Verify Supabase project is active
- Check network connectivity

### Authentication Issues

**Cannot login as founder:**
- Verify `FOUNDER_PASSWORD` in `.env.local`
- Check Supabase user role is 'founder'
- Clear browser cache

**Database errors:**
- Run migration script again
- Check RLS policies are enabled
- Verify service role key has admin access

### Pi SDK Issues

**Wallet not connecting:**
- Must use Pi Browser app
- Check API credentials are correct
- Verify app is approved in Pi Developer Portal

---

## 📞 Support

- **Email:** support@elmahrosa.com
- **GitHub Issues:** [Report Bug](https://github.com/Elmahrosa/Elmahrosa-Map-of-PI/issues)
- **Documentation:** [View Roadmap](./roadmap.md)

---

## 🔒 Security Notes

- Never commit `.env.local` to git
- Use strong passwords for founder account
- Enable 2FA on Supabase
- Rotate API keys regularly
- Monitor fee history for unauthorized changes

---

**Ready to launch!** Once setup is complete, push to GitHub and your app will auto-deploy on Vercel.
