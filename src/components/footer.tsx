import Link from "next/link"
import { Instagram, Send, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-[#9399FA]">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-[#9399FA]">
              <Send className="h-6 w-6" />
              <span className="sr-only">Telegram</span>
            </Link>
            <Link href="#" className="hover:text-[#9399FA]">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <div className="text-sm text-gray-400">© 2024 - Всі права захищено</div>
        </div>
      </div>
    </footer>
  )
}

