import type React from "react"
import type { Metadata } from "next"
import { Inter, Racing_Sans_One, Space_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const racingSansOne = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-racing",
})
const cutiveMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cutive",
})

export const metadata: Metadata = {
  title: "FM Racing Imports - Importación de Coches Premium",
  description: "Especialistas en importación de vehículos premium desde Alemania",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${racingSansOne.variable} ${cutiveMono.variable}`}>{children}</body>
    </html>
  )
}
