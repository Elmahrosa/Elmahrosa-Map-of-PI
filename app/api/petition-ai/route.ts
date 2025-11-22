import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, purpose, locale = "en" } = body

    if (!name || !purpose) {
      return NextResponse.json({ error: "Name and purpose required" }, { status: 400 })
    }

    const textEn = `Petition for Seller Onboarding

Petitioner: ${name}

I, ${name}, hereby petition for seller onboarding on EMAPOFPI, the official Pi Network marketplace platform for Egypt, MENA, and Africa.

Business Purpose:
${purpose}

Commitments:
• Complete identity and business verification
• Comply with escrow safety protocols
• Maintain transparent and fair pricing
• Participate in dispute resolution processes when necessary
• Uphold civic-first values and community standards

I understand that this petition will be reviewed and that verification is required before active trading. I commit to maintaining high standards of service and contributing positively to the Pi Network ecosystem.

Date: ${new Date().toLocaleDateString()}
Signature: ${name}`

    const textAr = `عريضة انضمام بائع

مقدم العريضة: ${name}

أنا، ${name}، أتقدم بهذه العريضة للانضمام كبائع على منصة EMAPOFPI، المنصة الرسمية لسوق شبكة باي في مصر والشرق الأوسط وأفريقيا.

الغرض التجاري:
${purpose}

الالتزامات:
• إكمال التحقق من الهوية والنشاط التجاري
• الالتزام ببروتوكولات أمان الضمان
• الحفاظ على تسعير شفاف وعادل
• المشاركة في عمليات حل النزاعات عند الضرورة
• دعم القيم المدنية ومعايير المجتمع

أتفهم أن هذه العريضة ستتم مراجعتها وأن التحقق مطلوب قبل بدء التداول النشط. ألتزم بالحفاظ على معايير عالية من الخدمة والمساهمة الإيجابية في نظام شبكة باي.

التاريخ: ${new Date().toLocaleDateString("ar-EG")}
التوقيع: ${name}`

    const petition = locale === "ar" ? textAr : textEn

    return NextResponse.json({ petition, name, locale, generatedAt: new Date().toISOString() })
  } catch (error) {
    console.error("[v0] Petition AI error:", error)
    return NextResponse.json({ error: "Failed to generate petition" }, { status: 500 })
  }
}
