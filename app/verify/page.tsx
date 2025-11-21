// Pi Network verification endpoint
export default function VerifyPage() {
  const verificationCode = process.env.NEXT_PUBLIC_PI_VERIFICATION_CODE || "pending-verification"

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Domain Verification</h1>
          <p className="text-muted-foreground">Pi Network Domain Ownership</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Verification Code:</p>
            <code className="block bg-muted p-3 rounded text-sm font-mono break-all">{verificationCode}</code>
          </div>

          <div className="space-y-2 text-left text-sm">
            <p className="font-semibold text-foreground">Verified Domains:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>✓ elmahrosa-map-of-pi-bj36.vercel.app</li>
              <li>✓ elmahrosamapofpi4696.pinet.com</li>
              <li>✓ emapofpi.teosegypt.com</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              This page verifies domain ownership for Pi Network Developer Portal
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href="/"
            className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition"
          >
            Go to Homepage
          </a>
          <a
            href="https://developers.minepi.com"
            className="flex-1 border border-border py-2 px-4 rounded-lg hover:bg-muted transition"
          >
            Pi Developer Portal
          </a>
        </div>
      </div>
    </div>
  )
}
