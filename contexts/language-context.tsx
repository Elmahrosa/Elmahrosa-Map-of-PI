"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    hero_title: "Join the Pi Revolution",
    hero_subtitle: "Official seller onboarding for Pi Network in Egypt, MENA & Africa",
    get_started: "Get Started",
    browse_sellers: "Browse Sellers",
    register_seller: "Register as Seller",
    marketplace: "Marketplace",
    about: "About",
    features: "Features",
    for_sellers: "For Sellers",
    for_buyers: "For Buyers",
    seller_registration: "Seller Registration",
    browse_products: "Browse Products",
    verified_sellers: "Verified Sellers",
    secure_payments: "Secure Pi Payments",
    open_registration: "Open Registration",
    free_instant: "Free & instant seller registration",
    interactive_map: "Interactive Map",
    discover_sellers: "Discover sellers by location",
    product_listings: "Product Listings",
    browse_thousands: "Browse thousands of products",
    categories: "Categories",
    all_categories: "All Categories",
    electronics: "Electronics",
    fashion: "Fashion",
    food: "Food & Beverages",
    services: "Services",
    real_estate: "Real Estate",
    search_placeholder: "Search products, sellers...",
    location: "Location",
    egypt: "Egypt",
    mena: "MENA",
    africa: "Africa",
    register_now: "Register Now",
    learn_more: "Learn More",
  },
  ar: {
    hero_title: "انضم إلى ثورة باي",
    hero_subtitle: "منصة التسجيل الرسمية لبائعي شبكة باي في مصر والشرق الأوسط وأفريقيا",
    get_started: "ابدأ الآن",
    browse_sellers: "تصفح البائعين",
    register_seller: "سجل كبائع",
    marketplace: "السوق",
    about: "حول",
    features: "المميزات",
    for_sellers: "للبائعين",
    for_buyers: "للمشترين",
    seller_registration: "تسجيل البائع",
    browse_products: "تصفح المنتجات",
    verified_sellers: "بائعون موثوقون",
    secure_payments: "مدفوعات باي آمنة",
    open_registration: "تسجيل مفتوح",
    free_instant: "تسجيل مجاني وفوري للبائعين",
    interactive_map: "خريطة تفاعلية",
    discover_sellers: "اكتشف البائعين حسب الموقع",
    product_listings: "قوائم المنتجات",
    browse_thousands: "تصفح آلاف المنتجات",
    categories: "الفئات",
    all_categories: "جميع الفئات",
    electronics: "إلكترونيات",
    fashion: "أزياء",
    food: "طعام ومشروبات",
    services: "خدمات",
    real_estate: "عقارات",
    search_placeholder: "ابحث عن منتجات، بائعين...",
    location: "الموقع",
    egypt: "مصر",
    mena: "الشرق الأوسط",
    africa: "أفريقيا",
    register_now: "سجل الآن",
    learn_more: "اعرف المزيد",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
