import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import  Logo  from './UI/Logo'

export default function Footer() {
  return (
    <footer className="relative z-50 bg-carbonBlack px-4 py-[44px] pb-5 text-white dark:bg-[#111111] sm:pt-20 xl:px-0">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between space-y-10 md:items-center lg:flex-row lg:items-start lg:space-x-10 lg:space-y-0">
        {/* Left Side: Text and Logo */}
        <div className="flex flex-col md:text-center lg:items-start lg:text-left">
          <p className="max-w-[608px] font-aspekta text-[18px] leading-[27px] text-white dark:text-white sm:text-[32px] sm:leading-[44.8px] md:max-w-[400px] md:text-[24px] md:leading-[33.6px]">
            Subscribing to our news service offers you unparalleled access to a wealth of accurate,
            timely, and insightful.
          </p>
        </div>

        {/* Right Side: Email Subscription */}
        <div className="flex w-full max-w-[488px] justify-center sm:hidden sm:items-center sm:gap-3 md:flex">
          <input
            type="text"
            placeholder="First name"
            className="h-[52px] w-full rounded-l-full border border-r-0 border-mediumGray bg-transparent px-5 py-3 text-[14px] font-normal leading-[20px] text-black placeholder:text-[#AAABAD] md:rounded-full md:border-r"
          />
          <button className="grid place-content-center rounded-r-full border border-l-0 border-mediumGray bg-transparent px-5 md:h-[52px] md:w-[82px] md:rounded-full md:border-0 md:bg-green">
            <Image
              src={'/static/favicons/arrow-up.svg'}
              width={18}
              height={18}
              alt="Arrow"
              className="rotate-90 transform"
            />
          </button>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-10 pb-5 pt-[60px] md:gap-0">
        <div className="sm:hidden md:flex">
          <Logo className="fill-white dark:fill-white" />
        </div>

        <div className="m:items-center hidden w-full max-w-[420px] justify-center sm:flex md:hidden md:max-w-[488px] md:gap-3">
          <input
            type="text"
            placeholder="First name"
            className="h-[52px] w-full rounded-l-full border border-r-0 border-mediumGray bg-transparent px-5 py-3 text-[14px] font-normal leading-[20px] text-black placeholder:text-[#AAABAD] md:rounded-full md:border-r"
          />
          <button className="grid place-content-center rounded-r-full border border-l-0 border-mediumGray bg-transparent px-5 md:h-[52px] md:w-[82px] md:rounded-full md:border-0 md:bg-green">
            <Image
              src={'/static/favicons/arrow-up.svg'}
              width={18}
              height={18}
              alt="Arrow"
              className="rotate-90 transform"
            />
          </button>
        </div>
        <div className="flex justify-center gap-4">
          {['facebook', 'twitter', 'ig', 'in'].map((platform, index) => (
            <Link
              key={index}
              href={`https://${platform}.com`}
              aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
              className="grid size-[34px] place-content-center rounded-full bg-black text-link"
            >
              <Image
                src={`/static/favicons/${platform}.svg`}
                width={30}
                height={30}
                alt={platform.charAt(0).toUpperCase() + platform.slice(1)}
                className=""
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-2 border-t border-white pb-0 pt-5 dark:border-carbonBlack sm:flex-row sm:gap-0 sm:py-5">
        {/* Copyright */}
        <div className="font-aspekta text-[14px] leading-[20px] text-link">
          &copy; 2024, Pana. All rights reserved
        </div>
        {/* Footer Links */}
        <div className="flex space-x-6">
          <a href="#" className="font-aspekta text-[14px] leading-[20px] text-link">
            Terms
          </a>
          <a href="#" className="font-aspekta text-[14px] leading-[20px] text-link">
            Cookies
          </a>
          <a href="#" className="font-aspekta text-[14px] leading-[20px] text-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
