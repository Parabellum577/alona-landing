"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [buttonPosition, setButtonPosition] = useState(24)
  const footerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    footerRef.current = document.querySelector('footer')

    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (footerTop < windowHeight) {
          const newPosition = windowHeight - footerTop + 24
          setButtonPosition(newPosition)
        } else {
          setButtonPosition(24)
        }
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    window.addEventListener("resize", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      window.removeEventListener("resize", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      className="fixed right-6 z-50 rounded-full w-12 h-12 bg-primary hover:bg-primary-hover text-white shadow-lg animate-fadeIn transition-[bottom] hidden md:flex items-center justify-center"
      style={{ bottom: `${buttonPosition}px` }}
      onClick={scrollToTop}
      size="icon"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  )
} 