import type { Metadata } from "next"
import Header from "@/components/organisms/Header"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/organisms/Footer"
import { ThemeProvider } from "@/components/molecules/Theme-provider"
import { appInformation } from "@/Assets/local.json"
import { SITE_URL } from "@/config/site"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: appInformation.title, template: `%s | ${appInformation.title}` },
  description: appInformation.description,
  openGraph: {
    title: appInformation.title,
    description: appInformation.description,
    type: "website",
  },
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
          <main className="mx-auto flex w-full max-w-6xl flex-grow flex-col space-y-10 px-4 py-8 md:px-6 md:py-12">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
