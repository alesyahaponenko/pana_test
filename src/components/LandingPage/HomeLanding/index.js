'use client'
import B2BBC from '@/components/LandingPage/B2BBC'
import Banner from '@/components/LandingPage/Banner'
import BusinessToolset from '@/components/LandingPage/BusinessToolset'
import ContactUs from '@/components/LandingPage/ContactUs/ContactUs'
import LaptopSection from '@/components/LandingPage/LaptopSection'
import NewsletterModal from '@/components/UI/Modals/NewsletterModal'
import { RemoveScroll } from 'react-remove-scroll'
import StatsPromoCard from '@/components/LandingPage/StatsPromoCard'
import LiquidShader from '@/components/LandingPage/LiquidShader'
import TitleAnimated from '@/components/LandingPage/TitleAnimated'

const HomeLanding = () => {
  // const isScrollLocked = useAppSelector((state) => state.header.isScrollLocked)

  return (
    <>
      <LiquidShader />
      <RemoveScroll enabled={false}>
        <div className="relative m-auto min-w-full max-w-[1440px] px-6 py-5 lg:px-10 xl:px-20">
          <Banner />
          <TitleAnimated
            greenText="One tool provides"
            textLine1="you everything"
            textLine2="you need to handle your digital sales business"
            maxW="800"
          />
          <BusinessToolset />
          <TitleAnimated
            greenText="One tool provides"
            textLine1="you everything"
            textLine2="you need to handle your digital sales business"
            maxW="800"
          />
          <B2BBC />
          <LaptopSection />
          <StatsPromoCard />
          <ContactUs />
        </div>
        <div className="blurDiv fixed bottom-0 left-0 z-[999] h-[15vh] w-full bg-gradient-to-t from-[#ededed] via-[#ededed]/20 to-[#ededed]/0 blur-[7px] dark:from-[#000] dark:via-[#000]/70 dark:to-[#000]/0"></div>
        <NewsletterModal />
      </RemoveScroll>
    </>
  )
}
export default HomeLanding
