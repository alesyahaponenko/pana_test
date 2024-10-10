import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

const BannerChart = ({ imageSrc, label }) => {
  return (
    <section
      className={clsx(
        'flex w-full flex-col gap-[17.89px] rounded-[32px] bg-white pb-[15.68px] pt-[21.41px] drop-shadow-xl dark:bg-darkSlate'
      )}
    >
      <div className="flex w-full justify-between px-[21px]">
        <div className="flex gap-[17.62px]">
          <h3 className="font-inter text-[0.8rem] font-semibold leading-[1rem] dark:text-white xl:text-[1rem]">
            {label}
          </h3>
        </div>
        <div className="flex gap-[1px]">
          <div className="size-[1.93px] rounded-full bg-black dark:bg-white"></div>
          <div className="size-[1.93px] rounded-full bg-black dark:bg-white"></div>
          <div className="size-[1.93px] rounded-full bg-black dark:bg-white"></div>
        </div>
      </div>
      <div className="relative h-full w-full pb-2">
        <div className="relative h-0 w-full pb-[62%] min-[1020px]:pb-[60%] min-[1200px]:pb-[66.5%] min-[1300px]:pb-[69%] min-[1400px]:pb-[71%] 2xl:pb-[74%] min-[1750px]:pb-[78%] min-[2250px]:pb-[83%]">
          <Image src={imageSrc} alt="Chart" fill className="object-contain" />
        </div>
      </div>
    </section>
  )
}

export default BannerChart
