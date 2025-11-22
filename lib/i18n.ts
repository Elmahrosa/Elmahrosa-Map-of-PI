export type Locale = "en" | "ar"

export const strings = {
  en: {
    // Navigation
    welcome: "Welcome",
    marketplace: "Marketplace",
    sellers: "Sellers",
    dashboard: "Dashboard",
    login: "Login",
    logout: "Logout",

    // Hero
    heroTitle: "ELMAHROSA MAP OF PI",
    heroSubtitle: "Official seller onboarding platform for Pi Network",
    heroRegion: "Egypt, MENA, and Africa",
    heroCta: "Join as Seller",
    heroLearn: "Learn More",

    // Features
    featuresTitle: "Why Choose EMAPOFPI?",
    featureVerification: "Verified Sellers",
    featureVerificationDesc: "Petition-first onboarding with transparent verification badges",
    featureEscrow: "Safe Escrow Trades",
    featureEscrowDesc: "Funds held safely until delivery confirmation",
    featureTrust: "Trust Scoring",
    featureTrustDesc: "Transparent metrics based on trade history and compliance",
    featureBilingual: "Bilingual Support",
    featureBilingualDesc: "Full Arabic and English interface with RTL support",

    // Marketplace
    marketplaceTitle: "Browse Marketplace",
    marketplaceFilter: "Filter by Region",
    allRegions: "All Regions",
    egypt: "Egypt",
    mena: "MENA",
    africa: "Africa",
    verified: "Verified",
    trusted: "Trusted",
    pro: "Pro",
    viewDetails: "View Details",

    // Seller Registration
    registerTitle: "Become a Verified Seller",
    registerDesc: "Join the civic-first marketplace and start trading with Pi Network",
    fullName: "Full Name",
    businessName: "Business Name",
    email: "Email Address",
    region: "Region",
    selectRegion: "Select your region",
    purpose: "Business Purpose",
    purposePlaceholder: "Describe your business and why you want to join...",
    submitPetition: "Submit Petition",

    // Trust Score
    trustScore: "Trust Score",
    verificationBadge: "Verification Badge",

    // Footer
    footerTagline: "Civic-first marketplace for Pi Network",
    quickLinks: "Quick Links",
    about: "About",
    howItWorks: "How It Works",
    compliance: "Compliance",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    security: "Security",
    support: "Support",
    contact: "Contact",
    faq: "FAQ",

    // Dashboard
    dashboardTitle: "Seller Dashboard",
    myListings: "My Listings",
    activeEscrows: "Active Escrows",
    stats: "Statistics",
    totalSales: "Total Sales",
    completedTrades: "Completed Trades",
    averageRating: "Average Rating",

    // Escrow
    escrowId: "Escrow ID",
    buyer: "Buyer",
    seller: "Seller",
    amount: "Amount",
    status: "Status",
    initiated: "Initiated",
    funded: "Funded",
    delivered: "Delivered",
    released: "Released",
    refunded: "Refunded",
    dispute: "Dispute",

    // AI & Compliance
    petitionGenerated: "Petition Generated",
    complianceCheck: "Compliance Check",
    auditLog: "Audit Log",
  },
  ar: {
    // Navigation
    welcome: "مرحباً",
    marketplace: "السوق",
    sellers: "البائعون",
    dashboard: "لوحة التحكم",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",

    // Hero
    heroTitle: "المحروسة خريطة باي",
    heroSubtitle: "منصة انضمام البائعين الرسمية لشبكة باي",
    heroRegion: "مصر والشرق الأوسط وأفريقيا",
    heroCta: "انضم كبائع",
    heroLearn: "اعرف المزيد",

    // Features
    featuresTitle: "لماذا تختار EMAPOFPI؟",
    featureVerification: "بائعون موثقون",
    featureVerificationDesc: "انضمام يعتمد على العريضة مع شارات تحقق شفافة",
    featureEscrow: "معاملات ضمان آمنة",
    featureEscrowDesc: "الأموال محفوظة بأمان حتى تأكيد التسليم",
    featureTrust: "تقييم الثقة",
    featureTrustDesc: "مقاييس شفافة تعتمد على سجل التداول والامتثال",
    featureBilingual: "دعم ثنائي اللغة",
    featureBilingualDesc: "واجهة كاملة بالعربية والإنجليزية مع دعم RTL",

    // Marketplace
    marketplaceTitle: "تصفح السوق",
    marketplaceFilter: "تصفية حسب المنطقة",
    allRegions: "جميع المناطق",
    egypt: "مصر",
    mena: "الشرق الأوسط",
    africa: "أفريقيا",
    verified: "موثق",
    trusted: "موثوق",
    pro: "محترف",
    viewDetails: "عرض التفاصيل",

    // Seller Registration
    registerTitle: "كن بائعًا موثقًا",
    registerDesc: "انضم إلى السوق المدني وابدأ التداول مع شبكة باي",
    fullName: "الاسم الكامل",
    businessName: "اسم النشاط التجاري",
    email: "البريد الإلكتروني",
    region: "المنطقة",
    selectRegion: "اختر منطقتك",
    purpose: "الغرض التجاري",
    purposePlaceholder: "صف نشاطك التجاري وسبب رغبتك في الانضمام...",
    submitPetition: "إرسال العريضة",

    // Trust Score
    trustScore: "درجة الثقة",
    verificationBadge: "شارة التحقق",

    // Footer
    footerTagline: "سوق مدني لشبكة باي",
    quickLinks: "روابط سريعة",
    about: "عن المنصة",
    howItWorks: "كيف يعمل",
    compliance: "الامتثال",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    security: "الأمان",
    support: "الدعم",
    contact: "اتصل بنا",
    faq: "الأسئلة الشائعة",

    // Dashboard
    dashboardTitle: "لوحة تحكم البائع",
    myListings: "قوائمي",
    activeEscrows: "الضمانات النشطة",
    stats: "الإحصائيات",
    totalSales: "إجمالي المبيعات",
    completedTrades: "الصفقات المكتملة",
    averageRating: "متوسط التقييم",

    // Escrow
    escrowId: "معرف الضمان",
    buyer: "المشتري",
    seller: "البائع",
    amount: "المبلغ",
    status: "الحالة",
    initiated: "بدأ",
    funded: "ممول",
    delivered: "تم التسليم",
    released: "تم الإفراج",
    refunded: "تم الاسترداد",
    dispute: "نزاع",

    // AI & Compliance
    petitionGenerated: "تم إنشاء العريضة",
    complianceCheck: "فحص الامتثال",
    auditLog: "سجل التدقيق",
  },
}

export function t(key: keyof typeof strings.en, locale: Locale = "en"): string {
  return strings[locale][key] || strings.en[key] || key
}
