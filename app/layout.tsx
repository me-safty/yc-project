import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { PropsWithChildren } from "react"
import { Header } from "../components/header"
import { neobrutalism } from "@clerk/themes"
import localFont from "next/font/local"

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "YC Safety",
  description: "YC Safety for Construction Industry",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
        elements: {
          "cl-logoImage": {
            width: "100px",
            height: "auto",
          },
        },
        variables: {
          colorPrimary: "#2b7fff",
        },
        layout: {
          // unsafe_disableDevelopmentModeWarnings: true,
          logoImageUrl: "/logo.png",
          socialButtonsVariant: "iconButton",
        },
      }}
    >
      <html lang="en">
        <body className={`${workSans.variable} antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
