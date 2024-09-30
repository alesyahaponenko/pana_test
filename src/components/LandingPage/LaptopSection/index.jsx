'use client'
import { useThemeHandler } from '@/lib/hooks/useThemeHandler'
import { useHeaderStore } from '@/store/useHeaderStore'
import { useEffect } from 'react'
import CanvasBlock from '@/components/LandingPage/CanvasBlock'

const LaptopSection = () => {
  const { resolvedTheme } = useThemeHandler()
  const { fill, setCurrentTheme, setFill } = useHeaderStore()

  useEffect(() => {
    setCurrentTheme(resolvedTheme)
    setFill(resolvedTheme === 'dark' ? '#FFFFFF' : '#000000')
  }, [resolvedTheme, setCurrentTheme, setFill])

  return (
    <section className="bigLogoSection pointer-events-none fixed left-0 top-0 z-50 m-auto flex h-screen w-screen items-center justify-center px-4 pt-16 xl:px-0">
      <div className="bigLogoSectionSvg relative flex h-[120px] w-full max-w-[1200px] items-center justify-center px-4 sm:px-10 md:h-[298px] xl:h-[454px]">
        <svg x="0" y="0" enableBackground="new 0 0 930 358" viewBox="0 0 930 358" className="">
          <g className="litAnim opacity-0" fill={fill}>
            <path d="M271.3 135.7c0 74.9-60.8 135.7-135.7 135.7S-.1 210.6-.1 135.7 60.7 0 135.6 0s135.7 60.8 135.7 135.7zm-51.8 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.4 0 83.9-37.6 83.9-83.9z"></path>
            <path className="litP-foot" d="M0.3 135.7H51.8V358H0.3z"></path>
          </g>
          <path
            className="litAnim opacity-0"
            fill={fill}
            d="M490.9 135.7c0 74.9-60.8 135.7-135.7 135.7s-135.7-60.8-135.7-135.7S280.3 0 355.2 0s135.7 60.8 135.7 135.7zm-51.7 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.3 0 83.9-37.6 83.9-83.9z"
          ></path>
          <path
            className="litAnim opacity-0"
            fill={fill}
            d="M658.8 242.6v28.5h51.5V144.5c.2-2.8.3-5.7.3-8.6C710.6 61 649.8.3 574.9.3S439.2 61 439.2 136c0 1.6 0 3.1.1 4.7v130.5h51.5v-28.7L491 136c0-46.3 37.6-83.9 83.9-83.9 46.4 0 83.9 37.6 83.9 83.9V242.6z"
          ></path>
          <g className="litAnim opacity-0" fill={fill}>
            <path d="M930.1 135.7c0 74.9-60.8 135.7-135.7 135.7s-135.7-60.8-135.7-135.7S719.5 0 794.4 0s135.7 60.8 135.7 135.7zm-51.8 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.4 0 83.9-37.6 83.9-83.9z"></path>
            <path className="litA-foot" d="M878.3 135.7H929.8V270.9H878.3z"></path>
          </g>
          <circle
            className="litAnim opacity-0"
            cx="794.4"
            cy="135.7"
            r="52.8"
            fill="#3AB54B"
          ></circle>
        </svg>
      </div>
      <CanvasBlock />
    </section>
  )
}

export default LaptopSection
