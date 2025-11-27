import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
