import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      <Link href="/">
        <Image
          src="/logo.png"
          width={85}
          height={30}
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-5">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </div>
    </header>
  )
}
