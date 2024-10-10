'use client'
import { useThemeHandler } from '@/lib/hooks/useThemeHandler'
import { useHeaderStore } from '@/store/useHeaderStore'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const LaptopSection = () => {
  const { resolvedTheme } = useThemeHandler()
  const { fill, setCurrentTheme, setFill } = useHeaderStore()
  const videoRef = useRef(null)

  useEffect(() => {
    setCurrentTheme(resolvedTheme)
    setFill(resolvedTheme === 'dark' ? '#282828' : '#d9d9d9')
  }, [resolvedTheme, setCurrentTheme, setFill])

  return (
    <section className="bigLogoSection relative m-auto flex h-screen w-screen justify-center px-4 pt-16 sm:items-center xl:px-0">
      <div className="bigLogoSectionSvg absolute left-1/2 top-0 flex h-[250px] w-full max-w-[1200px] -translate-x-1/2 items-center justify-center overflow-hidden px-4 sm:px-10 md:h-[298px] xl:h-[454px]">
        <svg x="0" y="0" enableBackground="new 0 0 930 358" viewBox="0 0 930 358" className="">
          <g className="litAnim" fill={fill}>
            <path d="M271.3 135.7c0 74.9-60.8 135.7-135.7 135.7S-.1 210.6-.1 135.7 60.7 0 135.6 0s135.7 60.8 135.7 135.7zm-51.8 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.4 0 83.9-37.6 83.9-83.9z"></path>
            <path className="litP-foot" d="M0.3 135.7H51.8V358H0.3z"></path>
          </g>
          <path
            className="litAnim"
            fill={fill}
            d="M490.9 135.7c0 74.9-60.8 135.7-135.7 135.7s-135.7-60.8-135.7-135.7S280.3 0 355.2 0s135.7 60.8 135.7 135.7zm-51.7 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.3 0 83.9-37.6 83.9-83.9z"
          ></path>
          <path
            className="litAnim"
            fill={fill}
            d="M658.8 242.6v28.5h51.5V144.5c.2-2.8.3-5.7.3-8.6C710.6 61 649.8.3 574.9.3S439.2 61 439.2 136c0 1.6 0 3.1.1 4.7v130.5h51.5v-28.7L491 136c0-46.3 37.6-83.9 83.9-83.9 46.4 0 83.9 37.6 83.9 83.9V242.6z"
          ></path>
          <g className="litAnim" fill={fill}>
            <path d="M930.1 135.7c0 74.9-60.8 135.7-135.7 135.7s-135.7-60.8-135.7-135.7S719.5 0 794.4 0s135.7 60.8 135.7 135.7zm-51.8 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.4 0 83.9-37.6 83.9-83.9z"></path>
            <path className="litA-foot" d="M878.3 135.7H929.8V270.9H878.3z"></path>
          </g>
          <circle className="litAnim" cx="794.4" cy="135.7" r="52.8" fill="#3AB54B"></circle>
        </svg>
      </div>
      <div className="bigLogoSectionLaptop relative hidden aspect-[16/9] w-full max-w-[1200px] lg:block">
        <div className="absolute inset-[1%_11%_11%_11%]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full rounded-2xl object-cover"
          >
            <source src="/static/landing/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-[0%_0%_0%_0%]">
          <Image
            src="/static/landing/book.png"
            fill
            alt="Laptop Mockup"
            className="object-contain"
          />
        </div>
      </div>
      <div className="bigLogoSectionLaptop relative hidden aspect-[16/9] w-full max-w-[1200px] sm:flex lg:hidden">
        <div className="absolute inset-[7%_12%_-93%_12%]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full rounded-[30px] object-cover"
          >
            <source src="/static/landing/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 h-[80vh]">
          <Image
            src="/static/landing/tablet.png"
            fill
            alt="Laptop Mockup"
            className="object-contain"
          />
        </div>
      </div>
      <div className="bigLogoSectionLaptop relative block aspect-[16/9] w-full max-w-[1200px] sm:hidden">
        <div className="absolute inset-[1%_11%_25%_12%] overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full rounded-[30px] object-cover"
          >
            <source src="/static/landing/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 h-[70vh]">
          <Image
            src="/static/landing/phone.png"
            fill
            alt="Laptop Mockup"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default LaptopSection
