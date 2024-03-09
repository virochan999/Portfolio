import type { Metadata } from "next"
import Header from "@/components/organisms/Header"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/organisms/Footer"
import { ThemeProvider } from "@/components/molecules/Theme-provider"
import { appInformation } from "../../public/local.json"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: appInformation.title,
  description: appInformation.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex flex-col flex-grow p-4 space-y-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
