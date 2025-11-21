import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Elmahrosa Map of Pi | Verified Seller Marketplace",
    template: "%s | Elmahrosa Map of Pi",
  },
  description:
    "Official verified seller marketplace for Pi Network across Egypt, MENA, and Africa. Connect buyers with trusted sellers using Pi cryptocurrency.",
  keywords: [
    "Pi Network",
    "Pi cryptocurrency",
    "Pi marketplace",
    "Egypt sellers",
    "MENA marketplace",
    "Africa Pi sellers",
    "verified sellers",
    "Pi payment",
    "Elmahrosa",
    "Pi trading",
  ],
  authors: [{ name: "Elmahrosa International", url: "https://elmahrosa.com" }],
  creator: "Elmahrosa International",
  publisher: "Elmahrosa International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://emapofpi.teosegypt.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-EG": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: "/",
    title: "Elmahrosa Map of Pi | Verified Seller Marketplace",
    description: "Official verified seller marketplace for Pi Network across Egypt, MENA, and Africa",
    siteName: "Elmahrosa Map of Pi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elmahrosa Map of Pi - Verified Seller Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmahrosa Map of Pi | Verified Seller Marketplace",
    description: "Official verified seller marketplace for Pi Network across Egypt, MENA, and Africa",
    images: ["/og-image.jpg"],
    creator: "@elmahrosa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: {
      "pi-network": process.env.NEXT_PUBLIC_PI_VERIFICATION_CODE || "pending-verification",
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta
          name="pi-network-verification"
          content={process.env.NEXT_PUBLIC_PI_VERIFICATION_CODE || "pending-verification"}
        />

        <meta name="application-name" content="Elmahrosa Map of Pi" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Elmahrosa Pi" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="preconnect" href="https://sdk.minepi.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://sdk.minepi.com" />

        <Script src="https://sdk.minepi.com/pi-sdk.js" strategy="beforeInteractive" />

        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Elmahrosa Map of Pi",
            description: "Verified seller marketplace for Pi Network",
            url: process.env.NEXT_PUBLIC_APP_URL || "https://emapofpi.teosegypt.com",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "PI",
            },
            provider: {
              "@type": "Organization",
              name: "Elmahrosa International",
              url: "https://elmahrosa.com",
            },
          })}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
