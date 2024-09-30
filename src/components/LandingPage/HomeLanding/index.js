'use client'
import B2BBC from '@/components/LandingPage/B2BBC'
import Banner from '@/components/LandingPage/Banner'
import BusinessToolset from '@/components/LandingPage/BusinessToolset'
import ContactUs from '@/components/LandingPage/ContactUs/ContactUs'
import LaptopSection from '@/components/LandingPage/LaptopSection'
import NewsletterModal from '@/components/UI/Modals/NewsletterModal'
import { useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

const HomeLanding = () => {
  const [isScrollLocked, setIsScrollLocked] = useState(true)

  const handleAnimationComplete = () => {
    setIsScrollLocked(false)
  }
  return (
    <RemoveScroll enabled={isScrollLocked}>
      <div className="relative min-w-full max-w-[1200px]">
        <Banner onAnimationComplete={handleAnimationComplete} />
        <BusinessToolset />
        <B2BBC />
        <div className="emptyDiv relative h-[400vh] w-full"></div>
        <ContactUs />
      </div>
      <LaptopSection />
      <div className="blurDiv fixed bottom-0 left-0 z-[9999] h-[20vh] w-full bg-gradient-to-t from-[#ededed] via-[#ededed] to-transparent dark:from-[#000] dark:via-[#000]"></div>
      <NewsletterModal />
    </RemoveScroll>
  )
}
export default HomeLanding
