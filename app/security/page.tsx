import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Shield, Lock, AlertTriangle, Eye } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Security Policy</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-8">
          Version 1.0 - Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              At EMAPOFPI, security is non-negotiable. This document outlines our security practices, vulnerability
              reporting process, and our commitment to protecting the Pi Network marketplace community.
            </p>
          </section>

          <section className="bg-muted p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Reporting Security Vulnerabilities</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you discover a security vulnerability, please report it responsibly:
                </p>
                <div className="bg-background p-4 rounded-md">
                  <p className="text-foreground">
                    <strong>Email:</strong> security@emapofpi.com
                  </p>
                  <p className="text-foreground">
                    <strong>PGP Key:</strong> Available on request
                  </p>
                  <p className="text-foreground">
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Please do not</strong> disclose vulnerabilities publicly until we've had time to address them.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6" />
              Security Scope
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our security measures cover the following areas:
            </p>

            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Authentication & Authorization</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Pi SDK integration for secure user authentication</li>
                  <li>Petition-first access control</li>
                  <li>Role-based permissions (buyer, seller, admin)</li>
                  <li>Session management and token security</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Escrow System</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Secure fund holding and release mechanisms</li>
                  <li>State machine validation for transaction flow</li>
                  <li>Dispute resolution audit trails</li>
                  <li>Multi-signature approval for high-value transactions</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Data Protection</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Secure storage of verification documents</li>
                  <li>GDPR and data privacy compliance</li>
                  <li>Regular data backup and recovery procedures</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">API Security</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Rate limiting and DDoS protection</li>
                  <li>Input validation and sanitization</li>
                  <li>SQL injection prevention</li>
                  <li>XSS and CSRF protection</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Frontend Security</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Content Security Policy (CSP) headers</li>
                  <li>Secure cookie configuration</li>
                  <li>Protection against clickjacking</li>
                  <li>Safe handling of user-generated content</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vulnerability Disclosure Process</h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-1">Report Submission</h3>
                  <p className="text-muted-foreground text-sm">
                    Submit detailed vulnerability report to security@emapofpi.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-1">Acknowledgment (24 hours)</h3>
                  <p className="text-muted-foreground text-sm">We confirm receipt and provide a tracking identifier</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-1">Assessment (3-5 days)</h3>
                  <p className="text-muted-foreground text-sm">Security team validates and assesses severity</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium mb-1">Fix Development (1-14 days)</h3>
                  <p className="text-muted-foreground text-sm">Develop and test fix based on severity</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-medium mb-1">Deployment & Disclosure</h3>
                  <p className="text-muted-foreground text-sm">
                    Deploy fix and coordinate public disclosure with reporter
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Severity Classification</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <span className="font-bold text-red-600">CRITICAL</span>
                <span className="text-sm text-muted-foreground">
                  Immediate threat to user funds or data - Fixed within 24 hours
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                <span className="font-bold text-orange-600">HIGH</span>
                <span className="text-sm text-muted-foreground">Significant security risk - Fixed within 3-5 days</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <span className="font-bold text-yellow-600">MEDIUM</span>
                <span className="text-sm text-muted-foreground">
                  Moderate security concern - Fixed within 7-14 days
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <span className="font-bold text-blue-600">LOW</span>
                <span className="text-sm text-muted-foreground">
                  Minor security issue - Fixed in next release cycle
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6" />
              Audit & Transparency
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Regular security audits by third-party firms</li>
              <li>Public audit logs for major transactions</li>
              <li>Open-source components for community review</li>
              <li>Quarterly security reports published to community</li>
              <li>Incident postmortems shared transparently</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Out of Scope</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              The following are not considered security vulnerabilities:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Social engineering attacks against users</li>
              <li>Issues in third-party services (report to them directly)</li>
              <li>Denial of service attacks without proof of concept</li>
              <li>Issues requiring physical access to user devices</li>
              <li>Outdated software versions without exploitation vector</li>
              <li>Issues that require unlikely user interaction</li>
            </ul>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Bug Bounty Program</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We recognize and reward security researchers who help keep our platform safe:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Critical:</strong> Up to 1000π + Public recognition
              </li>
              <li>
                <strong>High:</strong> Up to 500π + Public recognition
              </li>
              <li>
                <strong>Medium:</strong> Up to 200π + Public recognition
              </li>
              <li>
                <strong>Low:</strong> Public recognition in security hall of fame
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              Rewards are at the discretion of the security team based on impact and quality of report.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact & Support</h2>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-foreground">
                <strong>Security Team:</strong> security@emapofpi.com
              </p>
              <p className="text-foreground">
                <strong>General Support:</strong> support@emapofpi.com
              </p>
              <p className="text-foreground">
                <strong>GitHub:</strong> github.com/Elmahrosa/Elmahrosa-Map-of-PI
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
