import { useThemeHandler } from '@/lib/hooks/useThemeHandler'
import React, { useEffect, useState } from 'react'
import ManagmentSvg from './ManagmentSvg'
import MarketingSvg from './MarketingSvg'
import SalesSvg from './SalesSvg'

const BusinessToolset = () => {
  const { resolvedTheme } = useThemeHandler()
  const [managementHover, setManagementHover] = useState(false)
  const [marketingHover, setMarketingHover] = useState(false)
  const [salesHover, setSalesHover] = useState(false)
  const isDarkTheme = resolvedTheme === 'dark'
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="pinBusinessToolset relative mx-auto mb-10 h-auto w-full max-w-[1200px] px-4 pt-20 sm:mb-40 xl:px-0">
      <h2 className="btHeader text-center font-aspekta text-[1.5rem] font-semibold leading-[2rem] text-carbonBlack dark:text-white md:text-left md:text-[2rem] md:leading-[2.5rem] lg:max-w-[895px] lg:text-[3.5rem] lg:leading-[4rem]">
        <span className="text-green">One tool provides</span> <br className="block sm:hidden" />
        everything you need to handle your digital sales business
      </h2>

      <div className="mt-[7.5rem] flex flex-col gap-10">
        <div
          onMouseEnter={() => setManagementHover(true)}
          onMouseLeave={() => setManagementHover(false)}
          className="mx-auto flex w-full max-w-[358px] flex-col gap-0 md:mx-0 md:max-w-full md:flex-row md:gap-[87px] lg:gap-[121px]"
        >
          <div className="blurInOut relative w-full max-w-[358px] rounded-[20px] bg-white/40 px-8 dark:bg-carbonBlack">
            <div className="relative flex h-[232px] w-full items-center justify-center p-1">
              <ManagmentSvg managementHover={managementHover} isDarkTheme={isDarkTheme} />
            </div>
            {/* <button className="absolute right-0 top-0 w-full max-w-[163px] translate-y-[-50%] transform rounded-full border border-green bg-[#232323CC] py-4 font-inter text-[16px] font-bold leading-[24px] text-green backdrop-blur-sm sm:hidden">
              Subscribe
            </button> */}
          </div>
          <div className="mt-10 flex flex-col gap-4 lg:max-w-[590px]">
            <h3 className="animTitle font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white md:text-[32px] md:leading-[41.6px] lg:text-[40px] lg:leading-[52px]">
              Management
            </h3>
            <p className="animTitle font-aspekta text-[16px] leading-[24px] text-darkSlate dark:text-smGray lg:text-[20px] lg:leading-[30px]">
              Effortlessly organize your store, branches, products, team, and customers - whether
              you’re a startup or a large enterprise.
            </p>
          </div>
        </div>
        <div className="h-[2px] w-full bg-black/10 dark:bg-white/10"></div>
        <div
          onMouseEnter={() => setMarketingHover(true)}
          onMouseLeave={() => setMarketingHover(false)}
          className="mx-auto flex w-full max-w-[358px] flex-col gap-0 md:mx-0 md:max-w-full md:flex-row md:gap-[87px]"
        >
          <div className="blurInOut relative w-full max-w-[358px] rounded-[20px] bg-white/40 px-8 dark:bg-carbonBlack">
            <div className="relative flex h-[232px] w-auto items-center justify-center">
              <MarketingSvg marketingHover={marketingHover} isDarkTheme={isDarkTheme} />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 lg:max-w-[590px]">
            <h3 className="animTitle font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white md:text-[32px] md:leading-[41.6px] lg:text-[40px] lg:leading-[52px]">
              Marketing
            </h3>
            <p className="animTitle font-aspekta text-[16px] leading-[24px] text-darkSlate dark:text-smGray lg:text-[20px] lg:leading-[30px]">
              Leverage direct communication with your customers to keep them informed about your
              products, offers, and services.
            </p>
          </div>
        </div>
        <div className="h-[2px] w-full bg-black/10 dark:bg-white/10"></div>
        <div
          onMouseEnter={() => setSalesHover(true)}
          onMouseLeave={() => setSalesHover(false)}
          className="mx-auto flex w-full max-w-[358px] flex-col gap-0 md:mx-0 md:max-w-full md:flex-row md:gap-[87px]"
        >
          <div className="blurInOut relative w-full max-w-[358px] rounded-[20px] bg-white/40 px-8 dark:bg-carbonBlack">
            <div className="relative flex h-[232px] w-auto items-center justify-center">
              <SalesSvg salesHover={salesHover} isDarkTheme={isDarkTheme} />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 lg:max-w-[590px]">
            <h3 className="animTitle font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white md:text-[32px] md:leading-[41.6px] lg:text-[40px] lg:leading-[52px]">
              Sales
            </h3>
            <p className="animTitle font-aspekta text-[16px] leading-[24px] text-darkSlate dark:text-smGray lg:text-[20px] lg:leading-[30px]">
              Follow your own sales strategies and harness live statistics to maximize your business
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessToolset
