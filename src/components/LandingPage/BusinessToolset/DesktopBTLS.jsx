import { useThemeHandler } from '@/hooks/useThemeHandler'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function DesktopBTLS() {
  const { resolvedTheme } = useThemeHandler()
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef(null)
  const slidesRef = useRef([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && sectionRef.current) {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        // Изначально скрываем второй и третий слайды
        gsap.set(slidesRef.current[1], { autoAlpha: 0, yPercent: 30, scale: 0.9 })
        gsap.set(slidesRef.current[2], { autoAlpha: 0, yPercent: 30, scale: 0.9 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=300%',
            pin: true,
            scrub: 1.5,
            // markers: true,
          },
        })

        // Первый слайд - появление
        tl.fromTo(slidesRef.current[0].querySelectorAll('h3, p'), 
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.out",
          }
        )
        .fromTo(slidesRef.current[0].querySelector('.imageWrapper'),
          {
            scale: 0.9,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          '<'
        )
        
        // Переход к второму слайду
        .to(slidesRef.current[0], {
          yPercent: -30,
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.4,
          ease: "power2.inOut",
        }, '+=0.5')
        .fromTo(slidesRef.current[1], 
          {
            yPercent: 30,
            autoAlpha: 0,
            scale: 0.9,
          },
          {
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          }, 
          '<+=0.1'
        )
        
        // Анимация контента второго слайда
        .fromTo(slidesRef.current[1].querySelectorAll('h3, p'),
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.out",
          },
          '<'
        )
        .fromTo(slidesRef.current[1].querySelector('.imageWrapper'),
          {
            scale: 0.9,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          '<'
        )

        // Переход к третьему слайду
        .to(slidesRef.current[1], {
          yPercent: -30,
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.4,
          ease: "power2.inOut",
        }, '+=0.5')
        .fromTo(slidesRef.current[2], 
          {
            yPercent: 30,
            autoAlpha: 0,
            scale: 0.9,
          },
          {
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          }, 
          '<+=0.1'
        )
        
        // Анимация контента третьего слайда
        .fromTo(slidesRef.current[2].querySelectorAll('h3, p'),
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.out",
          },
          '<'
        )
        .fromTo(slidesRef.current[2].querySelector('.imageWrapper'),
          {
            scale: 0.9,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          '<'
        )

        return () => {
          tl.kill()
          ScrollTrigger.getAll().forEach((st) => st.kill())
        }
      })
    }
  }, [mounted])

  const isDarkTheme = mounted && resolvedTheme === 'dark'

  const getImageSrc = (lightSrc, darkSrc) => {
    if (!mounted || !resolvedTheme) {
      return lightSrc
    }
    return isDarkTheme ? darkSrc : lightSrc
  }

  const slides = [
    {
      image: { light: '/static/landing/oneTool/managment_l.svg', dark: '/static/landing/oneTool/managment_d.svg' },
      title: 'Management',
      text: 'Effortlessly organize your store, branches, products, team, and customers - whether you`re a startup or a large enterprise.'
    },
    {
      image: { light: '/static/landing/oneTool/marketing_l.svg', dark: '/static/landing/oneTool/marketing_d.svg' },
      title: 'Marketing',
      text: 'Leverage direct communication with your customers to keep them informed about your products, offers, and services.'
    },
    {
      image: { light: '/static/landing/oneTool/sales_l.svg', dark: '/static/landing/oneTool/sales_d.svg' },
      title: 'Sales',
      text: 'Follow your own sales strategies and harness live statistics to maximize your business success.'
    }
  ]

  return (
    <div
      ref={sectionRef}
      className="desktopBTLS relative -mt-[15vh] flex h-screen w-full max-w-[1200px] items-center overflow-hidden pb-4"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          ref={el => slidesRef.current[index] = el}
          className="slide absolute top-0 left-0 flex h-full w-full items-center"
        >
          <div className="relative flex w-[32%]">
            <div className="relative size-full">
              <div className="imageWrapper absolute left-1/2 top-1/2 h-0 w-auto -translate-x-1/2 -translate-y-1/2 p-[75%]">
                <Image
                  src={getImageSrc(slide.image.light, slide.image.dark)}
                  fill
                  priority
                  alt={slide.title}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[68%] text-white">
            <div className="ml-[10rem] mt-10 flex flex-col gap-4 lg:max-w-[590px]">
              <h3 className="animTitle font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white md:text-[32px] md:leading-[41.6px] lg:text-[40px] lg:leading-[52px]">
                {slide.title}
              </h3>
              <p className="animTitle font-aspekta text-[16px] leading-[24px] text-darkSlate dark:text-smGray lg:text-[20px] lg:leading-[30px]">
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}