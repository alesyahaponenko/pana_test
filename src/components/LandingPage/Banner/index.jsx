'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import TotalUsers from './TotalUsers'
import { landingAnimation } from '@/animations/landingAnimation'
import { useThemeHandler } from '@/hooks/useThemeHandler'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Banner = () => {
  const bannerRef = useRef()
  const { resolvedTheme } = useThemeHandler()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (bannerRef.current) {
      const { mainTimeline } = landingAnimation(bannerRef)

      return () => {
        mainTimeline.kill()
      }
    }
  }, [])

  const isDarkTheme = mounted && resolvedTheme === 'dark'

  const getImageSrc = (lightSrc, darkSrc) => {
    if (!mounted || !resolvedTheme) {
      return lightSrc
    }
    return isDarkTheme ? darkSrc : lightSrc
  }

  return (
    <>
      <section
        ref={bannerRef}
        className="bannerSection relative flex h-[80vh] w-full flex-col items-center justify-center rounded-[20px] pb-4 dark:bg-transparent sm:mt-[100px] sm:h-auto lg:mx-0"
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
            <div className="relative h-0 w-full rounded-2xl border border-black/20 p-[37.8%] dark:border-white/20">
              <Image
                src={getImageSrc(
                  '/static/landing/banner/dashboard_bg_l.svg',
                  '/static/landing/banner/dashboard_bg_d.svg'
                )}
                priority
                fill
                alt="Dashboard"
                className="scale-[0.96] object-contain"
              />
              {/* <div className="totalUsersBlock absolute left-[45.5%] top-[0%] h-[60%] w-[72.2%] rotate-[-7deg]"> */}
              <div className="totalUsersBlock absolute left-[43%] top-[0%] h-0 w-[75%] rotate-[-7deg] p-[15%]">
                <TotalUsers isDarkTheme={isDarkTheme} />
              </div>
              <div className="bannerBlock absolute -left-[10%] top-[30%] h-0 w-auto rotate-[15deg] p-[20.5%]">
                <Image
                  src={getImageSrc(
                    '/static/landing/banner/reports_l.svg',
                    '/static/landing/banner/reports_d.svg'
                  )}
                  priority
                  fill
                  alt="Dashboard"
                  className="object-contain"
                />
              </div>

              <div className="analyticsBlock absolute left-[85.5%] top-[30%] h-0 w-auto rotate-[7deg] p-[14.8%]">
                <Image
                  src={getImageSrc(
                    '/static/landing/banner/analytics_l.svg',
                    '/static/landing/banner/analytics_d.svg'
                  )}
                  priority
                  fill
                  alt="Dashboard"
                  className="object-contain"
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
