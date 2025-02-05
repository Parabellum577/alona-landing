"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription 
} from "@/components/ui/sheet"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslations } from 'next-intl'
import { VisuallyHidden } from "@/components/ui/visually-hidden"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('navigation')

  const navigation = [
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('certificates'), href: '#certificates' },
    { name: t('process'), href: '#process' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
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
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {item.name}
            </button>
          ))}
          <LanguageSwitcher />
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
          >
            {t('consultation')}
          </button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[300px] flex flex-col"
          >
            <VisuallyHidden>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                 Navigation
                </SheetDescription>
              </SheetHeader>
            </VisuallyHidden>
            <div className="flex-1 mt-10">
              <div className="flex flex-col gap-4">
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
                  onClick={() => scrollToSection("#contact")}
                  className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors text-center"
                >
                  {t('consultation')}
                </button>
              </div>
            </div>
            <div className="py-4 flex justify-center">
              <LanguageSwitcher />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

