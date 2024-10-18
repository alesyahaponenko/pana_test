'use client'
import B2BBC from '@/components/LandingPage/B2BBC'
import Banner from '@/components/LandingPage/Banner'
import BusinessToolset from '@/components/LandingPage/BusinessToolset'
import ContactUs from '@/components/LandingPage/ContactUs/ContactUs'
import LaptopSection from '@/components/LandingPage/LaptopSection'
import NewsletterModal from '@/components/UI/Modals/NewsletterModal'
// import { useState } from 'react'
// import { RemoveScroll } from 'react-remove-scroll'
import StatsPromoCard from '@/components/LandingPage/StatsPromoCard'
import LiquidShader from '../LiquidShader'

const HomeLanding = () => {
  // const [isScrollLocked, setIsScrollLocked] = useState(true)

  // const handleAnimationComplete = () => {
  //   setIsScrollLocked(false)
  // }

  return (
    <>
      <LiquidShader />
      <div className="relative m-auto min-w-full max-w-[1440px] px-6 py-5 lg:px-10 xl:px-20">
        <Banner />
        <BusinessToolset />
        <B2BBC />
        <LaptopSection />
        <StatsPromoCard />
        <ContactUs />
      </div>
      {/* <Laptop3dSection /> */}
      <NewsletterModal />
    </>
  )
}
export default HomeLanding
