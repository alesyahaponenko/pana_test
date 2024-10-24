'use client'
import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { useThemeHandler } from '@/hooks/useThemeHandler'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import '@/css/splitText.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

const TitleAnimated = ({ greenText, textLine1, textLine2, maxWidth }) => {
  const { resolvedTheme } = useThemeHandler()
  const isDarkTheme = resolvedTheme === 'dark'
  const [mounted, setMounted] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (titleRef.current) {
      const splitText = new SplitText(titleRef.current, {
        type: 'lines',
        linesClass: 'overflow-hidden',
      })

      splitText.lines.forEach((line) => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('line-wrapper')
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.titleAnimatedWrap',
          start: 'top 80%',
          end: '+=50%',
          scrub: 3,
          fastScrollEnd: true,
        },
      })

      tl.fromTo(
        splitText.lines,
        {
          yPercent: 100,
          opacity: 0,
          rotateX: -40,
          transformOrigin: '0% 50% -50',
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out',
        }
      )

      return () => {
        splitText.revert()
        tl.kill()
      }
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="titleAnimatedWrap relative mx-auto my-10 flex h-[47vh] w-full max-w-[1400px] flex-col items-center justify-center px-4 lg:px-10">
      <h2
        ref={titleRef}
        className="titleAnimated text-center font-aspekta text-[1.5rem] font-semibold leading-[2rem] text-carbonBlack dark:text-white md:text-[2rem] md:leading-[2.5rem] lg:max-w-[800px] lg:text-[2.8rem] lg:leading-[3rem]"
      >
        <span className="text-green">{greenText}</span> {textLine1}{' '}
        <br className="hidden sm:block" />
        {textLine2}
      </h2>
    </div>
  )
}

export default TitleAnimated
