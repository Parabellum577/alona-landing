import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-8 items-start">
          <div className="relative h-full">
            <div className="aspect-square w-full h-full rounded-3xl bg-gray-100 overflow-hidden">
              <Image
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt="Yulia Lohvynenko"
                width={800}
                height={800}
                className="object-cover h-full w-full"
                priority
              />
            </div>
          </div>
          <div className="space-y-8 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Нумеролог та цвяхотерапевт</h1>
              <h2 className="text-4xl font-bold text-[#9399FA]">Litvin Alona</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[calc(100%-12rem)]">
              <Link
                href="#services"
                className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group relative min-h-[160px]"
              >
                <span className="font-medium">Цвяхотерапія</span>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                </div>
              </Link>
              <Link
                href="#services"
                className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group relative min-h-[160px]"
              >
                <span className="font-medium">Розбір Матриці Долі</span>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                </div>
              </Link>
              <Link
                href="#services"
                className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group relative min-h-[160px]"
              >
                <span className="font-medium">Психологічна гра &quot;Ліла&quot;</span>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                </div>
              </Link>
              <Link
                href="#contact"
                className="block p-6 bg-[#9399FA] rounded-xl hover:bg-[#8AA3F9] transition-colors group relative min-h-[160px]"
              >
                <span className="font-medium text-white">Записатися на консультацію</span>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronRight className="h-5 w-5 text-[#9399FA]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

