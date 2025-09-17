import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  console.log("[v0] API /send-email appelée")

  try {
    const body = await request.json()
    console.log("[v0] Données reçues:", body)

    const { name, email, message } = body

    // Validation des données
    if (!name || !email || !message) {
      console.log("[v0] Données manquantes")
      return NextResponse.json({ success: false, error: "Tous les champs sont requis" }, { status: 400 })
    }

    // Vérification de la clé API Resend
    if (!process.env.RESEND_API_KEY) {
      console.log("[v0] Clé API Resend manquante")
      return NextResponse.json({ success: false, error: "Configuration email manquante" }, { status: 500 })
    }

    console.log("[v0] Envoi de l'email via Resend...")

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["yvesleopoldbeugre98@gmail.com"],
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis votre portfolio</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.log("[v0] Erreur Resend:", error)
      return NextResponse.json({ success: false, error: "Erreur lors de l'envoi de l'email" }, { status: 500 })
    }

    console.log("[v0] Email envoyé avec succès:", data)
    return NextResponse.json({ success: true, message: "Message envoyé avec succès!" })
  } catch (error) {
    console.log("[v0] Erreur dans l'API:", error)
    return NextResponse.json({ success: false, error: "Erreur serveur interne" }, { status: 500 })
  }
}
