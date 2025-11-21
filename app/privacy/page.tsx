"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  return <PrivacyContent />
}

function PrivacyContent() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 2025 | By Elmahrosa International",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "Elmahrosa Map of Pi collects information you provide directly to us, including your Pi Network username, wallet address, and marketplace activity. We also collect transaction data to verify sellers and process payments securely across Egypt, MENA, and Africa.",
        },
        {
          title: "2. How We Use Your Information",
          content:
            "Your information is used to: authenticate your identity via Pi Network, process marketplace transactions, verify seller badges and credentials, maintain platform security, improve our services, and comply with legal obligations.",
        },
        {
          title: "3. Data Sharing",
          content:
            "We do not sell your personal information. We share data only with: Pi Network (for authentication and payments), verified sellers (transaction details only), and legal authorities (when required by law).",
        },
        {
          title: "4. Data Security",
          content:
            "We implement industry-standard security measures including encrypted data transmission, secure server infrastructure, regular security audits, and row-level security policies in our database.",
        },
        {
          title: "5. Your Rights",
          content:
            "You have the right to: access your personal data, request data deletion, opt-out of marketing communications, and withdraw consent at any time. Contact us at support@elmahrosa.com to exercise these rights.",
        },
        {
          title: "6. Cookies and Tracking",
          content:
            "We use essential cookies for authentication and session management. We do not use third-party tracking cookies. You can disable cookies in your browser settings.",
        },
        {
          title: "7. International Data Transfers",
          content:
            "Your data may be processed in Egypt, MENA region, and other locations where our service providers operate. We ensure adequate data protection measures are in place.",
        },
        {
          title: "8. Changes to This Policy",
          content:
            "We may update this privacy policy periodically. We will notify users of significant changes via email or platform notification.",
        },
        {
          title: "9. Contact Us",
          content:
            "For privacy questions or concerns, contact Elmahrosa at: support@elmahrosa.com, visit our founder dashboard, or reach us at EMAPOFPI.TEOSEGYPT.COM",
        },
      ],
    },
    ar: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: يناير 2025 | بواسطة المحروسة الدولية",
      sections: [
        {
          title: "1. المعلومات التي نجمعها",
          content:
            "تجمع خريطة المحروسة لـ Pi المعلومات التي تقدمها لنا مباشرة، بما في ذلك اسم مستخدم Pi Network الخاص بك وعنوان المحفظة ونشاط السوق. نجمع أيضًا بيانات المعاملات للتحقق من البائعين ومعالجة المدفوعات بشكل آمن عبر مصر والشرق الأوسط وأفريقيا.",
        },
        {
          title: "2. كيفية استخدام معلوماتك",
          content:
            "تُستخدم معلوماتك في: المصادقة على هويتك عبر Pi Network، معالجة معاملات السوق، التحقق من شارات وبيانات اعتماد البائع، الحفاظ على أمان المنصة، تحسين خدماتنا، والامتثال للالتزامات القانونية.",
        },
        {
          title: "3. مشاركة البيانات",
          content:
            "لا نبيع معلوماتك الشخصية. نشارك البيانات فقط مع: Pi Network (للمصادقة والمدفوعات)، البائعين المعتمدين (تفاصيل المعاملات فقط)، والسلطات القانونية (عند الطلب القانوني).",
        },
        {
          title: "4. أمن البيانات",
          content:
            "نطبق إجراءات أمان معيارية في الصناعة بما في ذلك نقل البيانات المشفرة، البنية التحتية الآمنة للخادم، عمليات التدقيق الأمني المنتظمة، وسياسات الأمان على مستوى الصف في قاعدة البيانات.",
        },
        {
          title: "5. حقوقك",
          content:
            "لديك الحق في: الوصول إلى بياناتك الشخصية، طلب حذف البيانات، إلغاء الاشتراك في الاتصالات التسويقية، وسحب الموافقة في أي وقت. اتصل بنا على support@elmahrosa.com لممارسة هذه الحقوق.",
        },
        {
          title: "6. ملفات تعريف الارتباط والتتبع",
          content:
            "نستخدم ملفات تعريف الارتباط الأساسية للمصادقة وإدارة الجلسة. لا نستخدم ملفات تعريف ارتباط التتبع من طرف ثالث. يمكنك تعطيل ملفات تعريف الارتباط في إعدادات المتصفح.",
        },
        {
          title: "7. نقل البيانات الدولي",
          content:
            "قد تتم معالجة بياناتك في مصر ومنطقة الشرق الأوسط وشمال أفريقيا ومواقع أخرى حيث يعمل مزودو الخدمة لدينا. نضمن وجود تدابير كافية لحماية البيانات.",
        },
        {
          title: "8. التغييرات على هذه السياسة",
          content:
            "قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري. سنخطر المستخدمين بالتغييرات الهامة عبر البريد الإلكتروني أو إشعار المنصة.",
        },
        {
          title: "9. اتصل بنا",
          content:
            "لأسئلة أو مخاوف الخصوصية، اتصل بالمحروسة على: support@elmahrosa.com، قم بزيارة لوحة تحكم المؤسس، أو تواصل معنا على EMAPOFPI.TEOSEGYPT.COM",
        },
      ],
    },
  }

  const text = content[language]

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === "ar" ? "العودة للرئيسية" : "Back to Home"}
        </Link>

        <div className="bg-card border border-border rounded-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{text.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{text.lastUpdated}</p>

          <div className="space-y-6">
            {text.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
