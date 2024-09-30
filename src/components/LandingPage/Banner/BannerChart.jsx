import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

const BannerChart = ({ imageSrc, label, className }) => {
  return (
    <section
      className={clsx(
        'flex w-full flex-col gap-[17.89px] rounded-[16px] bg-white pb-[15.68px] pt-[21.41px] drop-shadow-xl dark:bg-darkSlate'
      )}
    >
      <div className="flex w-full justify-between px-[21px]">
        <div className="flex gap-[17.62px]">
          <h3 className="font-inter text-[11.01px] font-semibold leading-[14.31px] dark:text-white">
            {label}
          </h3>
        </div>
        <div className="flex gap-[1px]">
          <div className="size-[1.93px] rounded-full bg-black dark:bg-white"></div>
          <div className="size-[1.93px] rounded-full bg-black dark:bg-white"></div>
          <div className="size-[1.93px] rounded-full bg-black dark:bg-white"></div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className={clsx('relative h-0 w-full', className)}>
          <div className="absolute left-0 top-0 h-full w-full">
            <Image src={imageSrc} alt="Chart" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerChart
