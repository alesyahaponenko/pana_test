import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <section className="relative m-auto mb-20 flex w-full max-w-[1200px] justify-center px-4 xl:px-0">
      <div className="relative flex w-full flex-col justify-center gap-10 rounded-[20px] bg-green px-5 pb-[52px] pt-[44px] md:px-[60px] lg:py-20">
        <div className="flex gap-2">
          <div className="grid size-[52px] place-content-center rounded-full bg-black">
            <Image src={'/static/favicons/a-logo.svg'} alt="Logo a" width={26} height={26} />
          </div>
          <div className="rounded-full bg-white px-5 py-4">
            <span className="font-aspekta text-[14px] font-semibold leading-[20px] text-black md:text-[18px] md:leading-[28px]">
              Ready to answer your question!
            </span>
          </div>
        </div>
        <div className="flex w-full gap-2 lg:justify-end">
          <input
            type="text"
            placeholder="Type question here"
            className="w-full rounded-full border border-black bg-transparent py-4 pl-5 font-aspekta text-[14px] leading-[21px] placeholder:text-black md:text-[16px] md:leading-[24px] lg:max-w-[598px]"
          />
          <button className="grid h-[52px] w-[82px] place-content-center rounded-full bg-black">
            <Image src={'/static/favicons/arrow-up.svg'} width={18} height={18} alt="Arrow" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
