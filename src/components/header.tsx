"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Про мене", href: "#about" },
  { name: "Послуги", href: "#services" },
  { name: "Сертифікати", href: "#certificates" },
  { name: "Процес", href: "#process" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
        Litvin Alona
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-gray-700 hover:text-[#9399FA] transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#9399FA] text-white px-4 py-2 rounded-lg hover:bg-[#8AA3F9] transition-colors"
          >
            Консультація
          </button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection("#contact")
                  setIsOpen(false)
                }}
                className="bg-[#9399FA] text-white px-4 py-2 rounded-lg hover:bg-[#8AA3F9] transition-colors mt-4"
              >
                Консультація
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

