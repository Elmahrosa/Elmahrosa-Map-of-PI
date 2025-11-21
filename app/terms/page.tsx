"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function TermsPage() {
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

  return <TermsContent />
}

function TermsContent() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: January 2025 | By Elmahrosa International",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing or using Elmahrosa Map of Pi (operated by Elmahrosa International), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.",
        },
        {
          title: "2. Marketplace Rules",
          content:
            "Sellers must complete verification before listing. All transactions are processed through Pi Network. Buyers must verify seller badges before purchase. Fraudulent activity will result in immediate account suspension.",
        },
        {
          title: "3. Fees and Payments",
          content:
            "NFT Minting Fee: 1 Pi per mint. Marketplace Trade Fee: 2% per transaction. Verification Fee: 5 Pi (one-time). Premium Listing Fee: 10 Pi per month. Withdrawal Fee: 0.5 Pi per withdrawal. All fees are non-refundable.",
        },
        {
          title: "4. Seller Verification",
          content:
            "Sellers must provide accurate business information. Verification includes identity check and business legitimacy. Verified badges are granted after successful verification. False information will result in permanent ban.",
        },
        {
          title: "5. User Conduct",
          content:
            "Users must not engage in fraudulent transactions, impersonate other users, manipulate marketplace ratings, share account credentials, or violate local laws and regulations.",
        },
        {
          title: "6. Intellectual Property",
          content:
            "The Elmahrosa Map of Pi brand, logo, and platform design are protected intellectual property. Users retain ownership of their content but grant us license to display it on the platform.",
        },
        {
          title: "7. Dispute Resolution",
          content:
            "Marketplace disputes should be reported to founder dashboard. We will mediate disputes fairly based on transaction evidence. Final decisions are made by platform founders. Serious disputes may require legal arbitration.",
        },
        {
          title: "8. Liability Limitations",
          content:
            "We are not responsible for: losses due to user error, third-party service failures, Pi Network downtime, or market value fluctuations. Use the platform at your own risk.",
        },
        {
          title: "9. Account Termination",
          content:
            "We reserve the right to suspend or terminate accounts for: violation of these terms, fraudulent activity, repeated complaints, or security threats. Terminated users forfeit all platform benefits.",
        },
        {
          title: "10. Changes to Terms",
          content:
            "We may modify these terms at any time. Users will be notified of significant changes. Continued use after changes constitutes acceptance of new terms.",
        },
        {
          title: "11. Contact Information",
          content:
            "For questions about these terms, contact Elmahrosa at: support@elmahrosa.com, through the founder dashboard, or visit EMAPOFPI.TEOSEGYPT.COM. Our marketplace operates across Egypt, MENA, and Africa.",
        },
      ],
    },
    ar: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: يناير 2025 | بواسطة المحروسة الدولية",
      sections: [
        {
          title: "1. قبول الشروط",
          content:
            "من خلال الوصول إلى خريطة المحروسة لـ Pi (تشغلها المحروسة الدولية) أو استخدامها، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام منصتنا.",
        },
        {
          title: "2. قواعد السوق",
          content:
            "يجب على البائعين إكمال التحقق قبل الإدراج. تتم معالجة جميع المعاملات من خلال Pi Network. يجب على المشترين التحقق من شارات البائع قبل الشراء. ستؤدي الأنشطة الاحتيالية إلى تعليق الحساب فورًا.",
        },
        {
          title: "3. الرسوم والمدفوعات",
          content:
            "رسوم سك NFT: 1 Pi لكل سك. رسوم تداول السوق: 2٪ لكل معاملة. رسوم التحقق: 5 Pi (لمرة واحدة). رسوم القائمة المميزة: 10 Pi شهريًا. رسوم السحب: 0.5 Pi لكل سحب. جميع الرسوم غير قابلة للاسترداد.",
        },
        {
          title: "4. التحقق من البائع",
          content:
            "يجب على البائعين تقديم معلومات تجارية دقيقة. يتضمن التحقق فحص الهوية وشرعية العمل. تُمنح الشارات المعتمدة بعد التحقق الناجح. ستؤدي المعلومات الكاذبة إلى حظر دائم.",
        },
        {
          title: "5. سلوك المستخدم",
          content:
            "يجب على المستخدمين عدم المشاركة في معاملات احتيالية، انتحال شخصية مستخدمين آخرين، التلاعب بتقييمات السوق، مشاركة بيانات اعتماد الحساب، أو انتهاك القوانين واللوائح المحلية.",
        },
        {
          title: "6. الملكية الفكرية",
          content:
            "علامة Elmahrosa Map of Pi والشعار وتصميم المنصة هي ملكية فكرية محمية. يحتفظ المستخدمون بملكية محتواهم لكنهم يمنحوننا ترخيصًا لعرضه على المنصة.",
        },
        {
          title: "7. حل النزاعات",
          content:
            "يجب الإبلاغ عن نزاعات السوق إلى لوحة تحكم المؤسس. سنتوسط في النزاعات بشكل عادل بناءً على أدلة المعاملات. يتم اتخاذ القرارات النهائية من قبل مؤسسي المنصة. قد تتطلب النزاعات الخطيرة التحكيم القانوني.",
        },
        {
          title: "8. قيود المسؤولية",
          content:
            "نحن لسنا مسؤولين عن: الخسائر بسبب خطأ المستخدم، فشل خدمات الطرف الثالث، توقف Pi Network، أو تقلبات القيمة السوقية. استخدم المنصة على مسؤوليتك الخاصة.",
        },
        {
          title: "9. إنهاء الحساب",
          content:
            "نحتفظ بالحق في تعليق أو إنهاء الحسابات بسبب: انتهاك هذه الشروط، نشاط احتيالي، شكاوى متكررة، أو تهديدات أمنية. يفقد المستخدمون المنتهية حساباتهم جميع مزايا المنصة.",
        },
        {
          title: "10. التغييرات على الشروط",
          content:
            "قد نعدل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بالتغييرات الهامة. يشكل الاستخدام المستمر بعد التغييرات قبولًا للشروط الجديدة.",
        },
        {
          title: "11. معلومات الاتصال",
          content:
            "لأسئلة حول هذه الشروط، اتصل بالمحروسة على: support@elmahrosa.com، من خلال لوحة تحكم المؤسس، أو قم بزيارة EMAPOFPI.TEOSEGYPT.COM. يعمل سوقنا عبر مصر والشرق الأوسط وأفريقيا.",
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
