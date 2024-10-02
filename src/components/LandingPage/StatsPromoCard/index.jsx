'use client'
import GreenButton from '@/components/UI/Buttons/GreenButton'
import { useThemeHandler } from '@/lib/hooks/useThemeHandler'
import useModalStore from '@/store/useModalStore'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const StatsPromoCard = () => {
  const { openModal } = useModalStore()
  const { resolvedTheme } = useThemeHandler()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getImageSrc = (lightSrc, darkSrc) => {
    if (!mounted) return lightSrc
    return isDarkTheme ? darkSrc : lightSrc
  }

  const isDarkTheme = resolvedTheme === 'dark'

  return (
    <section className="statsPromoCard mx-auto my-20 w-full max-w-[1200px] bg-[#E9E9E9] p-4 dark:bg-[#17171799] md:rounded-[30px] md:py-[108px] lg:p-[120px] lg:pb-[164px]">
      <div className="mb-20 flex flex-col gap-10">
        <h2 className="mx-auto max-w-[486px] text-center font-aspekta text-[1.5rem] font-medium leading-[2rem] text-black dark:text-white md:text-[32px] md:font-semibold md:leading-[44.8px] lg:max-w-[985px] lg:text-[2.3rem] lg:leading-[3.4rem]">
          Get live statistics and <span className="text-green">recommended sale</span> strategies
          based on statistics and user behaving
        </h2>
        <div className="relative h-[124px] w-full md:h-[246px]">
          <Image
            src={getImageSrc(
              '/static/landing/stats-promo/dash_light.svg',
              '/static/landing/stats-promo/dash_dark.svg'
            )}
            fill
            alt="Stats Promo"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-5">
        <div className="flex flex-col items-center justify-center gap-8 lg:items-start">
          <div className="mx-auto flex max-w-[486px] flex-col gap-5 md:gap-4">
            <h2 className="text-center font-aspekta text-[24px] font-medium leading-[31.2px] text-black dark:text-white md:text-[32px] md:leading-[44.8px] lg:text-left lg:text-[44px] lg:leading-[61.6px]">
              <span className="text-green">LLM module</span> what's recommending sale strategies
              based on there statistics
            </h2>
            <p className="text-center font-aspekta text-[16px] leading-[24px] text-smGray lg:max-w-[488px] lg:text-left lg:text-[18px] lg:leading-[28px]">
              Our LLM module uses advanced machine learning algorithms to analyze statistics and
              provide personalized recommendations on sales strategies.
            </p>
          </div>
          <GreenButton
            label={'Subscribe'}
            className={
              'max-w-[157px] border border-transparent bg-green text-white hover:border hover:border-green hover:bg-transparent hover:text-white'
            }
            onClick={openModal}
          />
        </div>
        <div className="relative mx-auto h-[370px] w-full max-w-[440px] md:h-[534px] lg:h-[416px]">
          <Image
            src={'/static/landing/stats-promo/notification.webp'}
            fill
            alt="Notification"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default StatsPromoCard
