# Elmahrosa Map of Pi — Founder Upgrade

Official seller onboarding platform for Pi Network in Egypt, MENA, and Africa “Part of the TEOS Egypt Blockchain Ecosystem — a unified civil, financial, and smart-city infrastructure powering digital banking, civic governance, DeFi, Pi integration, and national blockchain services.”


## Mission and Scope

Elmahrosa Map of Pi is Egypt's civic-first marketplace for Pi Network. It anchors seller verification, safe escrow trades, bilingual onboarding, and transparent metrics. This upgrade adds modular APIs, AI assistants, compliance, and reproducible deployments so contributors can scale safely and fast.

- **Civic-first anchor:** Petition-first onboarding, badge logic, and transparent audit logs.
- **Safety by design:** Escrow, dispute flows, and trust scoring.
- **Bilingual access:** Arabic and English UI and content.
- **Reproducible ops:** CI/CD, Docker, and API contracts.
- **AI modules:** Petition drafting, compliance checks, mythic logging, and treasury audit.

## Quick Start

\`\`\`bash
# Clone
git clone https://github.com/Elmahrosa/Elmahrosa-Map-of-PI.git
cd Elmahrosa-Map-of-PI

# Install
npm install
npm install pi-sdk

# Dev run
npm run dev

# Prod build
npm run build && npm start
\`\`\`

## Features and Modules

- **Pi SDK auth:** Ensures petition-first access, wallet presence, and verified Pi identity
- **Escrow trades:** Holds funds until delivery confirmation; supports dispute resolution
- **Trust score:** Weighted by verification, trade volume, dispute history, on-time completion
- **Bilingual UX:** Arabic and English toggle; RTL-ready components; locale content packs
- **Metrics dashboard:** Live transaction volume, country coverage, average dispute time, escrow release rate
- **AI endpoints:** Petition AI, Compliance Bot, Mythic Storyteller, Treasury Auditor
- **Compliance pages:** Privacy, Terms, Security policy, and Audit log viewer

## Deployment URLs

- **Production:** emapofpi.teosegypt.com
- **Pi Network:** emapofpi6390.pinet.com
- **Vercel:** elmahrosa-map-of-pi.vercel.app

## Founder Dashboard

Access the comprehensive governance and management interface at `/founder` with:

- **Platform Metrics:** Real-time transaction volume, seller statistics, and regional coverage
- **AI Tools:** Petition AI, Compliance Bot, Treasury Auditor, Mythic Storyteller
- **Governance:** Trust score distribution, escrow performance, dispute analytics
- **Management:** System health, quick actions, deployment information

## Documentation

- [Contributing Guidelines](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Roadmap](ROADMAP.md)
- [Privacy Policy](/privacy)
- [Terms of Service](/terms)

## Architecture

\`\`\`
app/
├── page.tsx                    # Landing page
├── dashboard/page.tsx          # Seller dashboard
├── founder/page.tsx           # Founder governance dashboard
├── privacy/page.tsx           # Privacy policy
├── terms/page.tsx             # Terms of service
├── security/page.tsx          # Security policy
└── api/
    ├── escrow/                # Escrow management
    ├── trust/score/           # Trust scoring
    ├── petition-ai/           # AI petition generator
    ├── compliance-bot/        # Compliance checker
    ├── mythic-storyteller/    # Development logger
    └── treasury-auditor/      # Treasury reporting
\`\`\`

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Pi Integration:** Pi SDK
- **Deployment:** Vercel, Docker

## License

MIT

## Credits

**Founder:** Elmahrosa International — civic-first governance and mythic storytelling
**Community:** Egypt and Africa pioneers anchoring transparent trade in Pi Network

---

Built with governance-first principles for the Pi Network community
