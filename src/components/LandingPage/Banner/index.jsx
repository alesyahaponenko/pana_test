'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import TotalUsers from './TotalUsers'
import BannerChart from './BannerChart'
import { landingAnimation } from '@/animations/landingAnimation'
import { useHeaderStore } from '@/store/useHeaderStore'
import { useThemeHandler } from '@/lib/hooks/useThemeHandler'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReportsChart from './ReportsChart'

gsap.registerPlugin(ScrollTrigger)

const Banner = ({ onAnimationComplete }) => {
  const bannerRef = useRef()
  const { resolvedTheme } = useThemeHandler()
  const [mounted, setMounted] = useState(false)

  // const { animationPlayed } = useHeaderStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (bannerRef.current) {
      const { mainTimeline } = landingAnimation(bannerRef)

      mainTimeline.eventCallback('onComplete', () => {
        ScrollTrigger.sort()
        ScrollTrigger.refresh()
        // onAnimationComplete()
      })

      return () => {
        mainTimeline.kill()
      }
    }
  }, [])

  const getImageSrc = (lightSrc, darkSrc) => {
    if (!mounted) return lightSrc
    return isDarkTheme ? darkSrc : lightSrc
  }

  const isDarkTheme = resolvedTheme === 'dark'

  return (
    <>
      <section
        ref={bannerRef}
        className="bannerSection relative flex h-[80vh] w-full flex-col items-center justify-center rounded-[20px] pb-10 dark:bg-transparent sm:mt-[100px] sm:h-auto lg:mx-0"
      >
        <div className="mb-[3rem] flex w-full flex-col items-center justify-center gap-5 md:mb-[8rem]">
          <h1 className="bigBanner w-full max-w-[90vw] text-center font-aspekta text-[5px] font-semibold leading-[36.4px] dark:text-white sm:max-w-[806px] sm:text-[3rem] sm:leading-[4rem] md:text-[4rem] md:leading-[4rem]">
            Created for ambitious <br className="block sm:hidden" />
            <span className="whitespace-nowrap">
              <span className="inline-block text-green">e</span>Commerce businesses
            </span>
          </h1>
        </div>
        {/* <div className="relative m-auto hidden h-screen w-[90%] justify-center">
          <Image
            src={getImageSrc(
              '/static/landing/mob_dashboard.svg',
              '/static/landing/mob_dashboard_b.svg'
            )}
            fill
            alt="Dashboard"
            className="object-contain"
          />
        </div> */}
        <div className="dashboardPin relative hidden w-full sm:flex">
          <div className="dashboard relative mx-auto flex w-[95%] justify-center lg:w-[90%] lg:max-w-[804px]">
            <div className="blurDiv fixed bottom-0 left-0 z-[999] h-[15vh] w-full bg-gradient-to-t from-[#ededed] via-[#ededed] to-transparent dark:from-[#000] dark:via-[#000]"></div>
            <div className="relative h-0 w-full p-[37.8%]">
              <div className="">
                <Image
                  src={getImageSrc(
                    '/static/landing/banner/dashboard_bg_light.svg',
                    '/static/landing/banner/dashboard_bg.svg'
                  )}
                  fill
                  alt="Dashboard"
                  className="object-contain"
                />
                <div className="absolute -top-[0.5%] left-[2.5%] h-full w-[21%] drop-shadow-xl">
                  <Image
                    src={getImageSrc(
                      '/static/landing/banner/menu_light.svg',
                      '/static/landing/banner/menu_dark.svg'
                    )}
                    fill
                    alt="Dashboard"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="totalUsersBlock absolute left-[45.5%] top-[0%] h-[60%] w-[72.2%] rotate-[-7deg]">
                <TotalUsers />
              </div>
              <div className="bannerBlock absolute left-[0%] top-[30%] h-auto w-[40%] rotate-[15deg]">
                <ReportsChart
                  imageSrc={getImageSrc(
                    '/static/landing/banner/reports_l.svg',
                    '/static/landing/banner/reports.svg'
                  )}
                  label="Reports"
                />
              </div>

              <div className="analyticsBlock absolute left-[85%] top-[40%] h-auto w-[29%] rotate-[7deg]">
                <BannerChart
                  imageSrc={getImageSrc(
                    '/static/landing/banner/analytics_l.svg',
                    '/static/landing/banner/analytics.svg'
                  )}
                  label="Analytics"
                  className="pb-[37%] 2xl:pb-[85%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
