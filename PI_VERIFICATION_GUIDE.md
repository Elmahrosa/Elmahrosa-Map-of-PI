# Pi Network App Verification Guide

## Step 1: Access Pi Developer Portal
1. Go to https://developers.minepi.com/
2. Sign in with your Pi Network account
3. Click "Create New App" or select existing app

## Step 2: Enter App Information
Fill in the following details:

### Basic Information
- **App Name:** Elmahrosa Map of Pi
- **Short Description:** Verified Pi seller marketplace across Egypt, MENA & Africa
- **Long Description:**
  \`\`\`
  Elmahrosa Map of Pi is a civic-first marketplace that verifies and maps Pi cryptocurrency sellers across Egypt, MENA, and Africa. Our platform combines real-time seller verification, interactive mapping, and secure Pi Network payments to create a trustworthy ecosystem for Pi trading.

  Key Features:
  - Multi-layer seller verification with civic badges
  - Interactive map showing verified sellers by location
  - Real-time marketplace statistics and analytics
  - Bilingual support (Arabic/English)
  - Secure Pi wallet integration
  - Founder dashboard for platform management
  \`\`\`

### App Details
- **Category:** Finance / Marketplace
- **Platform:** Web Application
- **App URL:** https://elmahrosa-map-of-pi-bj36.vercel.app
- **Redirect URLs:**
  - https://elmahrosa-map-of-pi-bj36.vercel.app/auth/callback
  - http://localhost:3000/auth/callback

### Required Permissions
Select these scopes:
- [x] username
- [x] payments
- [x] wallet_address

## Step 3: Get Your Credentials
After creating the app, copy these values to your `.env.local`:

\`\`\`env
NEXT_PUBLIC_PI_API_KEY=your_api_key_here
PI_API_SECRET=your_api_secret_here
NEXT_PUBLIC_PI_APP_ID=your_app_id_here
PI_WALLET_ADDRESS=your_wallet_address_here
\`\`\`

## Step 4: Submit Required Materials

### Screenshots (5-8 images)
Capture these views:
1. Homepage with hero section
2. Seller verification badge system
3. Interactive map showing verified sellers
4. Marketplace with active listings
5. Payment flow with Pi wallet
6. Bilingual interface (Arabic view)
7. Founder dashboard (optional)

### Demo Video (2-3 minutes)
Record a walkthrough showing:
- App homepage and key features
- User connecting Pi wallet
- Browsing verified sellers on map
- Viewing seller profiles with badges
- Initiating a transaction
- Language switching capability

### Required Pages
Create these pages before submission:
- Privacy Policy: `/privacy`
- Terms of Service: `/terms`
- Support/Contact: `/support`

## Step 5: KYC/KYB Verification
Complete Know Your Business verification:

### Required Documents
- Government-issued ID (passport or national ID)
- Proof of address (utility bill, bank statement)
- Business registration (if applicable)
- Tax identification number

### Business Information
- **Business Name:** Elmahrosa International
- **Business Type:** Marketplace Platform
- **Country:** Egypt
- **Contact Email:** your_email@example.com

## Step 6: Fee Structure Declaration
Document your fee structure clearly:

\`\`\`
Platform Fees:
- Seller Onboarding: 10 Pi (one-time verification fee)
- Transaction Fee: 2% (capped at 5 Pi per transaction)
- Verification Badge: 5 Pi (annual renewal)
- Premium Listing: 3 Pi/month (optional)
- Withdrawal Fee: 1 Pi (minimum)
\`\`\`

## Step 7: Testing in Sandbox
Before submission:

1. Enable Sandbox Mode in Developer Portal
2. Test these flows:
   - User authentication
   - Seller verification payment
   - Marketplace transaction
   - Fee calculation accuracy
3. Verify bilingual functionality
4. Test on mobile devices

## Step 8: Submit for Review
In the Developer Portal:

1. Click "Submit for Review"
2. Confirm all required materials are uploaded
3. Verify contact information is correct
4. Agree to Pi Network Developer Terms
5. Submit application

### Review Timeline
- Initial review: 1-2 weeks
- Additional information requests: 3-5 days response time
- Final approval: 1 week after all requirements met

## Step 9: After Approval
Once approved:

1. Update environment variables with production credentials
2. Disable Sandbox Mode
3. Switch to Mainnet in Pi SDK
4. Deploy production build to Vercel
5. Monitor Pi Developer Dashboard for:
   - Transaction volume
   - User authentication stats
   - Payment success rates
   - Error logs

## Step 10: Maintain Compliance
Ongoing requirements:

- Monthly transaction reports
- Quarterly security audits
- User privacy compliance (GDPR, local laws)
- Fee structure transparency
- Prompt customer support

## Support Resources
- Pi Developer Docs: https://developers.minepi.com/doc
- Pi SDK Reference: https://developers.minepi.com/doc/javascript-sdk
- Community Forum: https://developers.minepi.com/community
- Support Email: developer@minepi.com

## Verification Checklist
Before submitting, ensure:

- [ ] App loads correctly on mobile devices
- [ ] Pi authentication works smoothly
- [ ] Payment flows tested in sandbox
- [ ] Screenshots captured (5-8 images)
- [ ] Demo video recorded (2-3 minutes)
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Support contact active
- [ ] KYC/KYB documents prepared
- [ ] Fee structure documented
- [ ] Bilingual functionality verified
- [ ] All environment variables configured
- [ ] Sandbox testing completed

---

**Important Notes:**
- Keep your API keys secure and never commit them to GitHub
- Monitor the Developer Portal regularly for review updates
- Respond promptly to any Pi Core Team requests
- Maintain transparent communication with users about fees and policies
