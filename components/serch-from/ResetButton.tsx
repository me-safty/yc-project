"use client"
import { X } from "lucide-react"
import Link from "next/link"
import { FC } from "react"
export const ResetButton: FC = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement
    if (form) form.reset()
  }
  return (
    <button
      type="reset"
      onClick={reset}
      className="cursor-pointer text-2xl p-3 size-[50px] bg-black rounded-full flex items-center justify-center text-white"
    >
      <Link href="/">
        <X size={20} />
      </Link>
    </button>
  )
}
