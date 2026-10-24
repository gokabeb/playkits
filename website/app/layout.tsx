import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display, Lora, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/ui/custom-cursor"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
})

export const metadata: Metadata = {
  title: "Playkits.org | Healing Through Play",
  description:
    "Student-led nonprofit designing evidence-based playkits for trauma-affected children. 100% of donations go directly to playkits.",
  keywords: ["trauma therapy", "play therapy", "children", "nonprofit", "healing", "playkits"],
  openGraph: {
    title: "Playkits.org | Healing Through Play",
    description: "Evidence-based playkits for trauma-affected children. Partner with us to bring healing through play.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${lora.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
