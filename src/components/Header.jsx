'use client'
import Image from 'next/image'
import Link from 'next/link'
import GreenButton from './UI/Buttons/GreenButton'
import { useEffect, useRef } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import Logo from './UI/Logo'
import LogoHeader from './UI/LogoHeader'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/UI/drawer'
import clsx from 'clsx'
import useModalStore from '@/store/useModalStore'
import ThemeSwitch from './ThemeSwitch'
import { headerAnimation } from '@/animations/headerAnimation'
import { useHeaderStore } from '@/store/useHeaderStore'
import { useThemeHandler } from '@/lib/hooks/useThemeHandler'
import gsap from 'gsap'

const Header = () => {
  const headerRef = useRef()
  const logoRef = useRef()
  const logoPreLoadRef = useRef()
  const logoPreLoadWrapRef = useRef()

  const { resolvedTheme } = useThemeHandler()
  const { openModal } = useModalStore()

  const {
    isOpen,
    currentTheme,
    fill,
    animationPlayed,
    setIsOpen,
    setCurrentTheme,
    setFill,
    onAnimationComplete,
  } = useHeaderStore()

  useEffect(() => {
    setCurrentTheme(resolvedTheme)
    setFill(resolvedTheme === 'dark' ? '#FFFFFF' : '#000000')
  }, [resolvedTheme, setCurrentTheme, setFill])

  useEffect(() => {
    window.scrollTo(0, 0)
    // gsap.config({ nullTargetWarn: false }) // dont show warn
  }, [])

  useEffect(() => {
    if (!animationPlayed) {
      const animation = headerAnimation(
        headerRef,
        logoRef,
        logoPreLoadRef,
        logoPreLoadWrapRef,
        fill,
        () => {
          onAnimationComplete()
        }
      )
      return () => {
        animation.kill()
      }
    }
  }, [animationPlayed, fill, onAnimationComplete])

  const isDarkTheme = currentTheme === 'dark'

  return (
    <header className={`h-screen px-6 py-5 xl:px-0`} ref={headerRef}>
      <div
        className="logoPreLoad fixed left-0 top-0 z-50 h-screen w-screen"
        ref={logoPreLoadWrapRef}
      >
        <div className="absolute left-1/2 top-1/2 flex w-[30vw] -translate-x-1/2 -translate-y-1/2">
          <Logo fill={fill} ref={logoPreLoadRef} />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="relative flex w-[100px] items-center justify-center">
          <LogoHeader fill={fill} ref={logoRef} />
        </div>
        <nav className="restHide left-1/2 hidden -translate-x-1/2 gap-10 opacity-0 md:absolute md:flex md:justify-center"></nav>
        <div className="restHide relative z-10 flex w-full max-w-[350px] items-center justify-end gap-2 opacity-0">
          <ThemeSwitch />
          <GreenButton
            label={'Subscribe'}
            className={'hidden hover:bg-green hover:text-white md:block'}
            onClick={openModal}
          />
        </div>

        <div className="restHide opacity-0 md:hidden">
          {/* <Hamburger toggled={isOpen} toggle={setIsOpen} color={isDarkTheme ? 'white' : 'black'} /> */}
        </div>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center ${
            isDarkTheme ? 'bg-menuBg' : 'bg-white'
          }`}
        >
          <div className="flex w-full justify-between p-6">
            <Logo fill={fill} />
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color={isDarkTheme ? ' white' : ' black'}
            />
          </div>
          {/* <nav className="mt-[72px] flex flex-col items-center gap-7">
            {['Uniqueness', 'Benefits', 'Innovations', 'Technology'].map((item, index) => (
              <Link
                key={index}
                href={'/'}
                className={`font-aspekta text-[28px] leading-[36px] ${
                  isDarkTheme ? 'text-link' : 'text-carbonBlack'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav> */}
          <div className="mb-8 mt-auto w-full px-4">
            <Drawer className="">
              <DrawerTrigger className="w-full">
                <button
                  className={clsx(
                    'leading-[20.8px]w-full w-full max-w-full rounded-full border-2 border-green bg-green py-[14px] font-inter text-[16px] font-bold text-white'
                  )}
                  onClick={() => {}}
                >
                  Subscribe
                </button>
              </DrawerTrigger>
              <DrawerContent className={isDarkTheme ? 'bg-white' : ''}>
                <DrawerHeader className={'flex flex-col gap-4'}>
                  <DrawerTitle className="font-aspekta text-[28px] font-semibold leading-[36px] text-black">
                    Join Our Newsletter
                  </DrawerTitle>

                  <DrawerDescription className="font-aspekta text-[16px] font-normal leading-[24px] text-mediumGray">
                    Subscribing to our news service offers you unparalleled access to a wealth of
                    accurate, timely, and insightful.
                  </DrawerDescription>
                  <DrawerDescription className="mt-6">
                    <div class="space-y-3">
                      <div class="flex w-full items-center justify-center">
                        <input
                          type="text"
                          placeholder="First name"
                          class="h-[52px] w-full rounded-full border border-mediumGray px-5 py-3 text-[14px] font-normal leading-[20px] text-black placeholder:text-[#AAABAD]"
                        />
                      </div>

                      <div class="flex w-full items-center justify-center">
                        <input
                          type="email"
                          placeholder="E-mail address"
                          class="placeholdertext-[#AAABAD] h-[52px] w-full rounded-full border border-mediumGray px-5 py-3 text-[14px] font-normal leading-[20px] text-black"
                        />
                      </div>
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <GreenButton label={'Subscribe'} className={'bg-green text-white'} />
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <div className="mt-4 flex justify-center gap-4">
              {['facebook', 'twitter', 'ig', 'in'].map((platform, index) => (
                <Link
                  key={index}
                  href={`https://${platform}.com`}
                  aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  className="text-link"
                >
                  <Image
                    src={`/static/favicons/${platform}.svg`}
                    width={30}
                    height={30}
                    alt={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    className={isDarkTheme ? 'invert-0' : 'invert'}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
