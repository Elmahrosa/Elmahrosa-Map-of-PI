import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using EMAPOFPI ("Platform"), you agree to be bound by these Terms of Service. If you do
              not agree to these terms, you may not access or use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Platform Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              EMAPOFPI is the official seller onboarding platform for Pi Network in Egypt, MENA, and Africa. We provide
              a civic-first marketplace that connects verified sellers with buyers using Pi cryptocurrency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">To use this Platform, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Be at least 18 years of age</li>
              <li>Have a valid Pi Network account</li>
              <li>Provide accurate and complete registration information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not be prohibited from using the Platform under any applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Seller Registration and Verification</h2>
            <h3 className="text-xl font-medium mb-3">4.1 Petition Process</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sellers must submit a petition for onboarding. This petition-first approach ensures civic accountability
              and community standards.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-4">4.2 Verification Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Identity verification through Pi Network</li>
              <li>Business information and documentation</li>
              <li>Compliance with local regulations</li>
              <li>Agreement to platform standards and escrow protocols</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-4">4.3 Seller Obligations</h3>
            <p className="text-muted-foreground leading-relaxed">Verified sellers must:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Maintain accurate product listings and pricing</li>
              <li>Fulfill orders in a timely manner</li>
              <li>Use escrow system for all transactions</li>
              <li>Respond to disputes professionally</li>
              <li>Maintain a minimum trust score as determined by the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Escrow System</h2>
            <h3 className="text-xl font-medium mb-3">5.1 How Escrow Works</h3>
            <p className="text-muted-foreground leading-relaxed">
              All transactions must use our escrow system. Funds are held securely until the buyer confirms delivery.
              The escrow process follows this flow:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>
                <strong>Initiated:</strong> Buyer and seller agree on terms
              </li>
              <li>
                <strong>Funded:</strong> Buyer deposits Pi into escrow
              </li>
              <li>
                <strong>Delivered:</strong> Seller ships and buyer receives goods
              </li>
              <li>
                <strong>Released:</strong> Buyer confirms and funds transfer to seller
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-4">5.2 Dispute Resolution</h3>
            <p className="text-muted-foreground leading-relaxed">
              If a dispute arises, either party may open a dispute case. Our team will review evidence and make a
              binding decision within 14 days. Repeated disputes may affect trust scores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Trust Scoring System</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Trust scores are calculated based on:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Verification status</li>
              <li>Trade volume and completion rate</li>
              <li>On-time delivery performance</li>
              <li>Dispute history</li>
              <li>Cancellation rate</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Sellers with consistently low trust scores may have their access restricted or suspended.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Prohibited Activities</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">You may not:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Engage in fraudulent or deceptive practices</li>
              <li>List illegal or prohibited goods or services</li>
              <li>Manipulate trust scores or reviews</li>
              <li>Circumvent the escrow system</li>
              <li>Harass or abuse other users</li>
              <li>Violate intellectual property rights</li>
              <li>Use the platform for money laundering or illegal activities</li>
              <li>Create multiple accounts to evade restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Fees and Payments</h2>
            <p className="text-muted-foreground leading-relaxed">
              Platform fees may apply to transactions. Current fee structure will be displayed transparently before
              transaction confirmation. All payments are processed in Pi cryptocurrency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on the Platform, including logos, trademarks, and software, is owned by EMAPOFPI or its
              licensors. You may not use our intellectual property without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              EMAPOFPI acts as a platform facilitator. We are not responsible for the quality, safety, or legality of
              items listed, the ability of sellers to complete transactions, or the ability of buyers to pay. To the
              maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold EMAPOFPI harmless from any claims, damages, or expenses arising from your
              use of the Platform or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or terminate your account at any time for violation of these Terms or for any other reason
              we deem necessary to protect the Platform and its users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of Egypt. Disputes will be resolved in Egyptian courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Continued use of the Platform after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <div className="mt-3 p-4 bg-muted rounded-lg">
              <p className="text-foreground">
                <strong>Email:</strong> legal@emapofpi.com
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
