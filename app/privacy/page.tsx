import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              EMAPOFPI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use our platform, the official seller
              onboarding platform for Pi Network in Egypt, MENA, and Africa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name and contact information (email, phone number)</li>
              <li>Business information (business name, description, location)</li>
              <li>Pi Network user ID and wallet address</li>
              <li>Verification documents (as required for seller onboarding)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-4">2.2 Transaction Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Escrow transaction details</li>
              <li>Trade history and performance metrics</li>
              <li>Trust score calculations and dispute records</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-4">2.3 Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Device information and IP address</li>
              <li>Browser type and version</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Seller Verification:</strong> To verify your identity and business credentials
              </li>
              <li>
                <strong>Transaction Processing:</strong> To facilitate escrow transactions and payments
              </li>
              <li>
                <strong>Trust Scoring:</strong> To calculate and display trust scores based on trading history
              </li>
              <li>
                <strong>Communication:</strong> To send notifications about transactions, disputes, and platform updates
              </li>
              <li>
                <strong>Security:</strong> To detect and prevent fraud, abuse, and security threats
              </li>
              <li>
                <strong>Analytics:</strong> To improve our platform and user experience
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We follow a principle of minimal data sharing. We do not sell your personal information to third parties.
              We may share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>With Other Users:</strong> Your public profile information is visible to marketplace users
              </li>
              <li>
                <strong>Pi Network:</strong> User verification data as required by Pi Network protocols
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect rights and safety
              </li>
              <li>
                <strong>Service Providers:</strong> With trusted third-party services that help operate our platform
                (under strict confidentiality agreements)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your information, including encryption, secure
              authentication, and regular security audits. However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (subject to legal and contractual obligations)</li>
              <li>Object to processing of your information</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal
              obligations. Transaction records and dispute history are retained for audit and compliance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries outside your country of residence. We
              ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform is not intended for users under 18 years of age. We do not knowingly collect information from
              children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes via email or
              platform notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related questions or concerns, contact us at:
            </p>
            <div className="mt-3 p-4 bg-muted rounded-lg">
              <p className="text-foreground">
                <strong>Email:</strong> privacy@emapofpi.com
              </p>
              <p className="text-foreground">
                <strong>Address:</strong> EMAPOFPI, Cairo, Egypt
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
