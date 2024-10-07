'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useHeaderStore } from '@/store/useHeaderStore'

export default function Footer() {
  const { fill } = useHeaderStore()

  return (
    <footer className="relative z-50 bg-[#E9E9E9] px-4 py-[44px] pb-5 text-white dark:bg-carbonBlack sm:pt-20 xl:px-0">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between space-y-10 md:items-center lg:flex-row lg:items-start lg:space-x-10 lg:space-y-0">
        {/* Left Side: Text and Logo */}
        <div className="flex flex-col md:text-center lg:items-start lg:text-left">
          <p className="max-w-[608px] font-aspekta text-[18px] font-semibold leading-[27px] text-black dark:text-white sm:text-[32px] sm:leading-[44.8px] md:max-w-[400px] md:text-[24px] md:leading-[33.6px]">
            Subscribing to our news service offers you unparalleled access to a wealth of accurate,
            timely, and insightful.
          </p>
        </div>

        {/* Right Side: Email Subscription */}
        <div className="flex w-full max-w-[488px] justify-center sm:hidden sm:items-center sm:gap-3 md:flex">
          <input
            type="text"
            placeholder="First name"
            className="h-[52px] w-full rounded-l-full border border-r-0 border-mediumGray bg-transparent px-5 py-3 text-[14px] font-normal leading-[20px] text-black placeholder:text-[#AAABAD] dark:text-white md:rounded-full md:border-r"
          />
          <button className="grid place-content-center rounded-r-full border border-l-0 border-mediumGray bg-transparent px-5 transition hover:bg-[#34c848] md:h-[52px] md:w-[82px] md:rounded-full md:border-0 md:bg-green">
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
        <div className="logoFooter w-[100px] sm:hidden md:flex">
          <svg
            x="0"
            y="0"
            enableBackground="new 0 0 930 358"
            viewBox="0 0 930 358"
            className="h-full w-full transition-colors duration-300"
          >
            <g fill={fill}>
              <path d="M271.3 135.7c0 74.9-60.8 135.7-135.7 135.7S-.1 210.6-.1 135.7 60.7 0 135.6 0s135.7 60.8 135.7 135.7zm-51.8 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.4 0 83.9-37.6 83.9-83.9z"></path>
              <path d="M0.3 135.7H51.8V358H0.3z"></path>
            </g>
            <path
              fill={fill}
              d="M490.9 135.7c0 74.9-60.8 135.7-135.7 135.7s-135.7-60.8-135.7-135.7S280.3 0 355.2 0s135.7 60.8 135.7 135.7zm-51.7 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.3 0 83.9-37.6 83.9-83.9z"
            ></path>
            <path
              fill={fill}
              d="M658.8 242.6v28.5h51.5V144.5c.2-2.8.3-5.7.3-8.6C710.6 61 649.8.3 574.9.3S439.2 61 439.2 136c0 1.6 0 3.1.1 4.7v130.5h51.5v-28.7L491 136c0-46.3 37.6-83.9 83.9-83.9 46.4 0 83.9 37.6 83.9 83.9V242.6z"
            ></path>
            <g fill={fill}>
              <path d="M930.1 135.7c0 74.9-60.8 135.7-135.7 135.7s-135.7-60.8-135.7-135.7S719.5 0 794.4 0s135.7 60.8 135.7 135.7zm-51.8 0c0-46.3-37.6-83.9-83.9-83.9-46.4 0-83.9 37.6-83.9 83.9 0 1.4 0 2.9.1 4.3 2.2 44.3 38.9 79.6 83.8 79.6 46.4 0 83.9-37.6 83.9-83.9z"></path>
              <path d="M878.3 135.7H929.8V270.9H878.3z"></path>
            </g>
            <circle cx="794.4" cy="135.7" r="52.8" fill="#3AB54B"></circle>
          </svg>
        </div>

        <div className="m:items-center hidden w-full max-w-[420px] justify-center sm:flex md:hidden md:max-w-[488px] md:gap-3">
          <input
            type="text"
            // placeholder="First name"
            className="h-[52px] w-full rounded-l-full border border-r-0 border-mediumGray bg-transparent px-5 py-3 text-[14px] font-normal leading-[20px] text-black placeholder:text-[#AAABAD] dark:text-white md:rounded-full md:border-r"
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
          <a href="/" className="font-aspekta text-[14px] leading-[20px] text-link">
            Terms
          </a>
          <a href="/" className="font-aspekta text-[14px] leading-[20px] text-link">
            Cookies
          </a>
          <a href="/" className="font-aspekta text-[14px] leading-[20px] text-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
