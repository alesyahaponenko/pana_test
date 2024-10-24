import { useThemeHandler } from '@/hooks/useThemeHandler'
import React, { useEffect, useRef, useState } from 'react'
import DesktopBTLS from './DesktopBTLS'
import MobileBTLS from './MobileBTLS'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BusinessToolset = () => {
  const { resolvedTheme } = useThemeHandler()
  const isDarkTheme = resolvedTheme === 'dark'
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && sectionRef.current) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <section
      ref={sectionRef}
      className="pinBusinessToolset relative mx-auto flex h-auto w-full max-w-[1400px] flex-col items-center px-4 lg:px-10"
    >
      <div className="block w-full lg:hidden">
        <MobileBTLS />
      </div>
      <div className="hidden w-full lg:block">
        <DesktopBTLS />
      </div>
    </section>
  )
}

export default BusinessToolset
