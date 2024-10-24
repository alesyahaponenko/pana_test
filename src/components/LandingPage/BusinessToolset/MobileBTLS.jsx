import { useState } from 'react'
import { useThemeHandler } from '@/hooks/useThemeHandler'
import ManagmentSvg from './ManagmentSvg'
import MarketingSvg from './MarketingSvg'
import SalesSvg from './SalesSvg'

export default function MobileBTLS() {
  const { resolvedTheme } = useThemeHandler()
  const [managementHover, setManagementHover] = useState(false)
  const [marketingHover, setMarketingHover] = useState(false)
  const [salesHover, setSalesHover] = useState(false)
  const isDarkTheme = resolvedTheme === 'dark'

  return (
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
  )
}
