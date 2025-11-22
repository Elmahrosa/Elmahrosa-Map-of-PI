import Hero from "@/components/hero"
import Features from "@/components/features"
import SellerRegistration from "@/components/seller-registration"
import Marketplace from "@/components/marketplace"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Marketplace />
      <SellerRegistration />
      <Footer />
    </div>
  )
}
