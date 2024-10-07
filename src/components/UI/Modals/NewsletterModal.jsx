'use client'
import React from 'react'
import GreenButton from '../Buttons/GreenButton'
import { X } from 'lucide-react'
import useModalStore from '@/store/useModalStore'

const NewsletterModal = () => {
  const { isOpen, closeModal } = useModalStore()

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 dark:bg-[#000000D0]">
      <div className="relative w-[95%] rounded-[24px] bg-[#262626] p-8 shadow-lg dark:bg-white md:w-[794px]">
        <div className="mx-auto w-full max-w-[386px] py-20">
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
            aria-label="Close"
            onClick={closeModal}
          >
            <X />
          </button>
          <div>
            <h2 className="text-center font-aspekta text-[36px] font-bold leading-[48px] text-white dark:text-black">
              Join Our <span className="text-green dark:text-black">Newsletter</span>
            </h2>

            <p className="mt-3 text-center font-aspekta text-[16px] font-normal leading-[24px] text-mediumGray">
              Subscribing to our news service offers you unparalleled access to a wealth of
              accurate, timely, and insightful.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex w-full items-center justify-center">
              <input
                type="text"
                placeholder="First name"
                className="h-[52px] w-full rounded-full border border-mediumGray bg-transparent px-5 py-3 text-[14px] font-normal leading-[20px] text-black text-white placeholder:text-[#AAABAD] dark:bg-white dark:text-black"
              />
            </div>

            <div className="flex w-full items-center justify-center">
              <input
                type="email"
                placeholder="E-mail address"
                className="h-[52px] w-full rounded-full border border-mediumGray bg-transparent px-5 py-3 text-[14px] font-normal leading-[20px] text-black text-white placeholder:text-[#AAABAD] dark:bg-white dark:text-black"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <GreenButton label={'Subscribe'} className={'bg-green text-white'} />
          </div>
        </div>{' '}
      </div>
    </div>
  )
}

export default NewsletterModal
