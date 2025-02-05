import Link from "next/link"
import { Instagram, Send, Mail } from "lucide-react"
import { useLocale } from 'next-intl'

export function Footer() {
  const locale = useLocale()
  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <Link href="https://www.instagram.com/aln_litvin/" target="_blank" className="hover:text-[#9399FA]">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://t.me/Litvin_Alona" target="_blank" className="hover:text-[#9399FA]">
              <Send className="h-6 w-6" />
            </Link>
            <Link href="mailto:alenalementa@gmail.com" className="hover:text-[#9399FA]">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 - {locale === 'uk' ? 'Всі права захищено' : 'Все права защищены'}
          </div>
        </div>
      </div>
    </footer>
  )
}

