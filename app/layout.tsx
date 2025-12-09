import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creative Web Agency",
  description: "Delivering Custom Solutions for Your Business",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add preload for critical assets */}
        {/* <link rel="preload" href="/home_page_optimized.jpg" as="image" /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
