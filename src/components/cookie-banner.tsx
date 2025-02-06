"use client"

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Button } from './ui/button'

export function CookieBanner() {
  const t = useTranslations('cookies')
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            {t('banner.message')}{' '}
            <Link 
              href={locale === 'uk' ? '/uk/cookie-policy' : '/ru/cookie-policy'}
              className="text-primary hover:text-primary-hover underline"
            >
              {t('banner.learnMore')}
            </Link>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={acceptCookies}
              className="bg-primary hover:bg-primary-hover text-white ml-4"
            >
              {t('banner.accept')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 