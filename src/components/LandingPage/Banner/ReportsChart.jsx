import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

const ReportsChart = ({ imageSrc, label }) => {
  return (
    <section
      className={clsx(
        'flex w-full flex-col gap-[17.89px] rounded-[32px] bg-white pb-[1rem] pt-[1.2rem] drop-shadow-xl dark:bg-darkSlate'
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
      <div className="relative h-full w-full">
        <div
          className={clsx(
            'relative h-0 w-full min-[1000px]:pb-[48%] min-[1200px]:pb-[52%] min-[1300px]:pb-[53%] min-[1400px]:pb-[54.5%] 2xl:pb-[56%] min-[1750px]:pb-[59%] min-[2250px]:pb-[63%]'
          )}
        >
          <div className="absolute inset-0 h-full w-full">
            <Image src={imageSrc} alt="Chart" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportsChart
