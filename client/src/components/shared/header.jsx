"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "All Listings" },
    { href: "/buy", label: "How To Buy" },
    { href: "/sell", label: "How To Sell" },
  ]

  return (
    <header className="container mx-auto py-4 px-4 sticky backdrop-blur-xs top-[35px] bg-[#1360f3]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-yellow-300 p-2 rounded-lg">
              <span className="font-bold text-blue-600 text-xl">BX</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${isActive ? "bg-yellow-300 text-blue-900" : "text-white hover:bg-blue-500"
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>


        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative text-white">
            <Heart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-yellow-300 text-xs text-blue-900 rounded-full w-4 h-4 flex items-center justify-center font-bold">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <User className="h-5 w-5" />
          </Button>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            <span className="hidden sm:inline">Add Listing</span>
            <span className="sm:hidden">+</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
