# Elmahrosa Map of Pi 🗺️

**A verified, bilingual marketplace mapping Pi cryptocurrency sellers across Egypt, MENA, and Africa.**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black)](https://elmahrosa-map-of-pi-bj36.vercel.app/)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-blue)](https://nextjs.org/)
[![Pi Network](https://img.shields.io/badge/Pi%20Network-Integrated-purple)](https://minepi.com/)

## 🌟 Overview

Elmahrosa Map of Pi is a trustworthy, civic-first marketplace that verifies and maps Pi Network sellers across African markets. We combine geographic discovery with blockchain verification to create a secure trading environment.

### Key Features

- ✅ **Verified Seller System** - Multi-tier badge system with identity verification
- 🗺️ **Interactive Map** - Real-time seller locations across 18+ countries
- 💰 **Pi SDK Integration** - Instant transactions with Pi Network authentication
- 🌍 **Bilingual Interface** - Seamless Arabic/English switching with RTL support
- 🛡️ **Founder Dashboard** - Fee management and platform oversight
- 📊 **Real-Time Stats** - Live marketplace metrics and trust indicators

## 🎨 Brand Identity

**Color Palette:**
- Deep Navy `#0D1B2A` - Authority & trust
- Anchor Gold `#C89B3C` - Value & premium
- Pi Purple `#5A3E85` - Brand accent
- Warm Sand `#E6D7B9` - Background harmony
- Emerald `#1FAF6B` - Verification badges

**Typography:** Inter SemiBold (Latin) + Cairo SemiBold (Arabic)

## 🚀 Current Status

**Phase 1: Foundation (Complete)**
- ✅ Mobile-first responsive design
- ✅ Bilingual support (EN/AR)
- ✅ Component architecture
- ✅ Brand identity implementation
- ✅ Founder dashboard with fee management

**Phase 2: Live Integration (In Progress)**
- 🔄 Pi SDK authentication
- 🔄 Real marketplace statistics
- 🔄 Live seller verification system
- 🔄 Dynamic map with actual locations
- 🔄 Transaction flow integration

## 📊 Platform Metrics (Target)

- **Verified Sellers:** Real-time count via Pi SDK
- **Total Trades:** Live transaction volume
- **Global Reach:** Dynamic country coverage
- **Trust Score:** Algorithmic reputation system

## 📋 Deployment Checklist

- [x] Register app in Pi Developer Portal
- [x] Add API credentials to .env
- [x] Configure redirect URIs and permissions
- [x] Create privacy policy and terms of service pages
- [ ] Test login + payments in sandbox mode
- [ ] Submit screenshots, demo video for verification
- [ ] Complete business verification (KYB)
- [ ] Switch to live mode for real users

## 💰 Fee Structure

- **NFT Minting:** 1 Pi per mint
- **Marketplace Trades:** 2% per transaction
- **Verification:** 5 Pi (one-time)
- **Premium Listing:** 10 Pi per month
- **Withdrawal:** 0.5 Pi per withdrawal

All fees are transparent and adjustable via the founder dashboard.

## 📄 Legal Compliance

- **Privacy Policy:** [/privacy](https://elmahrosa-map-of-pi-bj36.vercel.app/privacy)
- **Terms of Service:** [/terms](https://elmahrosa-map-of-pi-bj36.vercel.app/terms)

Both documents are fully bilingual (English/Arabic) and comply with Pi Network requirements.

## 🔧 Technical Stack

- **Framework:** Next.js 15.2.4
- **Styling:** Tailwind CSS 4.1.17
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** GSAP 3.13.0
- **Blockchain:** Pi Network SDK
- **Language:** TypeScript 5.9.3
- **Deployment:** Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm package manager
- Pi Network SDK credentials

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/Elmahrosa/Elmahrosa-Map-of-PI.git

# Navigate to directory
cd Elmahrosa-Map-of-PI

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run development server
pnpm dev
\`\`\`

Visit `http://localhost:3000` to see the app.

## 🔐 Environment Variables

\`\`\`env
# Pi Network SDK
NEXT_PUBLIC_PI_API_KEY=your_pi_api_key
PI_API_SECRET=your_pi_secret

# Platform Configuration
NEXT_PUBLIC_APP_URL=https://elmahrosa-map-of-pi.vercel.app
FOUNDER_PASSWORD=your_secure_password

# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
\`\`\`

## 🏗️ Project Structure

\`\`\`
├── app/                    # Next.js app router
│   ├── page.tsx           # Main marketplace
│   ├── founder/           # Admin dashboard
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── hero-section.tsx
│   ├── marketplace-home.tsx
│   ├── seller-dashboard.tsx
│   └── badge-system.tsx
├── contexts/              # React contexts
│   └── language-context.tsx
├── lib/                   # Utility functions
│   └── pi-sdk.ts         # Pi Network integration
└── public/               # Static assets
\`\`\`

## 👥 Founder Dashboard

Access the founder dashboard at `/founder` to:
- View real-time platform statistics
- Manage fee structures (onboarding, transaction, verification)
- Monitor seller verification status
- Track revenue and transaction volumes

**Default Password:** `elmahrosa2025` (change in production)

## 🌍 Supported Regions

Currently serving verified sellers across:
- 🇪🇬 Egypt
- 🇸🇦 Saudi Arabia
- 🇦🇪 UAE
- 🇰🇪 Kenya
- 🇳🇬 Nigeria
- 🇿🇦 South Africa
- And 12+ more MENA & African countries

## 🤝 Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Contribution Areas
- Pi SDK integration enhancement
- Seller verification algorithms
- Map visualization improvements
- Localization (additional languages)
- Security audits

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live App:** https://elmahrosa-map-of-pi-bj36.vercel.app/
- **GitHub:** https://github.com/Elmahrosa/Elmahrosa-Map-of-PI
- **Pi Network:** https://minepi.com/

## 📞 Contact

For partnership inquiries and support:
- **Email:** contact@elmahrosa.com
- **Twitter:** @ElmahrosaMap
- **Telegram:** @ElmahrosaOfficial

---

**Built with 💜 by Elmahrosa International**  
*Made with App Studio*
