"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

type Translations = {
  [key: string]: {
    en: string
    ar: string
  }
}

// Core translations
const translations: Translations = {
  appName: {
    en: "Elmahrosa Map of Pi",
    ar: "خريطة المحروسة للباي",
  },
  tagline: {
    en: "Official Seller Gateway",
    ar: "البوابة الرسمية للبائعين",
  },
  welcome: {
    en: "Welcome to Elmahrosa International",
    ar: "مرحباً بك في المحروسة الدولية",
  },
  piNetwork: {
    en: "Pi Network",
    ar: "شبكة باي",
  },
  community: {
    en: "Community",
    ar: "المجتمع",
  },
  growingNetwork: {
    en: "Growing Network",
    ar: "شبكة متنامية",
  },
  globalReach: {
    en: "Global Reach",
    ar: "وصول عالمي",
  },
  worldwideAccess: {
    en: "Worldwide Access",
    ar: "وصول عالمي",
  },
  connectWallet: {
    en: "Connect Pi Wallet",
    ar: "ربط محفظة باي",
  },
  connectWithPi: {
    en: "Connect with Pi",
    ar: "الاتصال بباي",
  },
  connecting: {
    en: "Connecting...",
    ar: "جاري الاتصال...",
  },
  connected: {
    en: "Connected",
    ar: "متصل",
  },
  mainnet: {
    en: "Mainnet",
    ar: "الشبكة الرئيسية",
  },
  becomeSeller: {
    en: "Become a Seller",
    ar: "كن بائعاً",
  },
  onboardingFee: {
    en: "0.25π Onboarding Fee",
    ar: "رسوم التسجيل ٠.٢٥π",
  },
  sellerRegistration: {
    en: "Seller Registration",
    ar: "تسجيل البائع",
  },
  verified: {
    en: "Verified",
    ar: "موثق",
  },
  verificationRequired: {
    en: "Verification Required",
    ar: "التحقق مطلوب",
  },
  badges: {
    en: "Badges",
    ar: "الشارات",
  },
  rewards: {
    en: "Rewards",
    ar: "المكافآت",
  },
  dashboard: {
    en: "Dashboard",
    ar: "لوحة التحكم",
  },
  listings: {
    en: "Listings",
    ar: "القوائم",
  },
  profile: {
    en: "Profile",
    ar: "الملف الشخصي",
  },
  settings: {
    en: "Settings",
    ar: "الإعدادات",
  },
  language: {
    en: "Language",
    ar: "اللغة",
  },
  english: {
    en: "English",
    ar: "الإنجليزية",
  },
  arabic: {
    en: "Arabic",
    ar: "العربية",
  },
  fullName: {
    en: "Full Name",
    ar: "الاسم الكامل",
  },
  location: {
    en: "Location",
    ar: "الموقع",
  },
  businessType: {
    en: "Business Type",
    ar: "نوع النشاط التجاري",
  },
  description: {
    en: "Description",
    ar: "الوصف",
  },
  save: {
    en: "Save",
    ar: "حفظ",
  },
  cancel: {
    en: "Cancel",
    ar: "إلغاء",
  },
  submit: {
    en: "Submit",
    ar: "إرسال",
  },
  next: {
    en: "Next",
    ar: "التالي",
  },
  prev: {
    en: "Previous",
    ar: "السابق",
  },
  completeVerification: {
    en: "Complete Verification",
    ar: "إكمال التحقق",
  },
  signPetition: {
    en: "Sign Petition",
    ar: "التوقيع على العريضة",
  },
  payFee: {
    en: "Pay 0.25π Fee",
    ar: "دفع رسوم ٠.٢٥π",
  },
  founderDashboard: {
    en: "Founder Dashboard",
    ar: "لوحة تحكم المؤسس",
  },
  founderAccess: {
    en: "Founder Access",
    ar: "دخول المؤسس",
  },
  founderAccessDesc: {
    en: "Enter your password to access the founder dashboard",
    ar: "أدخل كلمة المرور للوصول إلى لوحة تحكم المؤسس",
  },
  password: {
    en: "Password",
    ar: "كلمة المرور",
  },
  enterPassword: {
    en: "Enter password",
    ar: "أدخل كلمة المرور",
  },
  login: {
    en: "Login",
    ar: "تسجيل الدخول",
  },
  logout: {
    en: "Logout",
    ar: "تسجيل الخروج",
  },
  invalidPassword: {
    en: "Invalid password. Please try again.",
    ar: "كلمة مرور غير صحيحة. حاول مرة أخرى.",
  },
  totalSellers: {
    en: "Total Sellers",
    ar: "إجمالي البائعين",
  },
  activeBuyers: {
    en: "Active Buyers",
    ar: "المشترون النشطون",
  },
  totalRevenue: {
    en: "Total Revenue",
    ar: "إجمالي الإيرادات",
  },
  transactions: {
    en: "Transactions",
    ar: "المعاملات",
  },
  fromLastMonth: {
    en: "from last month",
    ar: "من الشهر الماضي",
  },
  pending: {
    en: "pending",
    ar: "قيد الانتظار",
  },
  feeSettings: {
    en: "Fee Settings",
    ar: "إعدادات الرسوم",
  },
  analytics: {
    en: "Analytics",
    ar: "التحليلات",
  },
  platformFees: {
    en: "Platform Fees",
    ar: "رسوم المنصة",
  },
  platformFeesDesc: {
    en: "Configure fees charged to users on the platform",
    ar: "تكوين الرسوم المفروضة على المستخدمين على المنصة",
  },
  onboardingFeeDesc: {
    en: "Fee charged when a seller joins the platform",
    ar: "الرسوم المفروضة عند انضمام بائع إلى المنصة",
  },
  transactionFee: {
    en: "Transaction Fee",
    ar: "رسوم المعاملات",
  },
  transactionFeeDesc: {
    en: "Fee charged per transaction between buyers and sellers",
    ar: "الرسوم المفروضة لكل معاملة بين المشترين والبائعين",
  },
  verificationFee: {
    en: "Verification Fee",
    ar: "رسوم التحقق",
  },
  verificationFeeDesc: {
    en: "Fee charged for seller identity verification",
    ar: "الرسوم المفروضة للتحقق من هوية البائع",
  },
  premiumListingFee: {
    en: "Premium Listing Fee",
    ar: "رسوم القائمة المميزة",
  },
  premiumListingFeeDesc: {
    en: "Monthly fee for featured seller listings",
    ar: "الرسوم الشهرية لقوائم البائعين المميزة",
  },
  withdrawalFee: {
    en: "Withdrawal Fee",
    ar: "رسوم السحب",
  },
  withdrawalFeeDesc: {
    en: "Fee charged when sellers withdraw funds",
    ar: "الرسوم المفروضة عند سحب البائعين للأموال",
  },
  editFees: {
    en: "Edit Fees",
    ar: "تعديل الرسوم",
  },
  saveFees: {
    en: "Save Changes",
    ar: "حفظ التغييرات",
  },
  platformAnalytics: {
    en: "Platform Analytics",
    ar: "تحليلات المنصة",
  },
  platformAnalyticsDesc: {
    en: "View platform performance and user insights",
    ar: "عرض أداء المنصة ورؤى المستخدمين",
  },
  analyticsComingSoon: {
    en: "Advanced analytics coming soon",
    ar: "التحليلات المتقدمة قريباً",
  },
  email: {
    en: "Email",
    ar: "البريد الإلكتروني",
  },
  pleaseEnterCredentials: {
    en: "Please enter email and password",
    ar: "يرجى إدخال البريد الإلكتروني وكلمة المرور",
  },
  invalidCredentials: {
    en: "Invalid credentials or unauthorized access",
    ar: "بيانات اعتماد غير صالحة أو وصول غير مصرح به",
  },
  loginSuccess: {
    en: "Login successful",
    ar: "تم تسجيل الدخول بنجاح",
  },
  founderOnly: {
    en: "Founder access only",
    ar: "دخول المؤسس فقط",
  },
  needHelp: {
    en: "Need help?",
    ar: "هل تحتاج مساعدة؟",
  },
  saving: {
    en: "Saving...",
    ar: "جاري الحفظ...",
  },
  feesSaved: {
    en: "Fees updated successfully",
    ar: "تم تحديث الرسوم بنجاح",
  },
  feesError: {
    en: "Failed to update fees",
    ar: "فشل تحديث الرسوم",
  },
  founderLoginDesc: {
    en: "Secure access to platform administration",
    ar: "وصول آمن إلى إدارة المنصة",
  },
  loginFounder: {
    en: "Login as Founder",
    ar: "تسجيل الدخول كمؤسس",
  },
  defaultPassword: {
    en: "Default: elmahrosa2025",
    ar: "الافتراضي: elmahrosa2025",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [dir, setDir] = useState("ltr")

  useEffect(() => {
    // Set direction based on language
    setDir(language === "ar" ? "rtl" : "ltr")
    // Set direction attribute on document element
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
