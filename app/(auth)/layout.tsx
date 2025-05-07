import { PropsWithChildren } from "react"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full flex justify-center">
      <div className="h-[80vh] max-w-5xl flex items-center justify-center">
        {children}
      </div>
    </main>
  )
}
