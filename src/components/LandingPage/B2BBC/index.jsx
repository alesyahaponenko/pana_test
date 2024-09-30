import Image from 'next/image'

const B2BBC = () => {
  return (
    <section className="sectionB2BBC relative mx-auto mb-[20vh] w-full max-w-[1200px] px-4 xl:px-0">
      <h2 className="b2bcHeader mx-auto max-w-[310px] text-center font-aspekta text-[1.5rem] font-semibold leading-[2rem] text-carbonBlack dark:text-white sm:mb-40 md:max-w-[590px] md:text-[2rem] md:leading-[2.5rem] lg:text-[3.5rem] lg:leading-[4.2rem]">
        Next generation of <br />
        <span className="text-green">B2B2C</span> <br />
        digital sales business
      </h2>
      <div className="cardsOrdersWrap relative">
        <div className="cardsOrders grid-rows-auto relative mx-auto mt-[55px] grid max-w-[380px] grid-cols-1 gap-x-[20px] gap-y-[20px] md:mx-0 md:max-w-full md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
          <div className="order z-[10] order-1 flex w-full flex-col rounded-[30px] bg-[#e7e7e7] dark:bg-carbonBlack md:max-w-[383px]">
            <div className="flex flex-col gap-8 p-8 lg:p-10">
              <div className="relative h-[198px] max-w-[307px]">
                <Image src={'/static/landing/b2bbc/api.svg'} fill alt="Api Image" />
              </div>
              <div className="space-y-3">
                <h3 className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
                  Transform
                </h3>
                <p className="font-aspekta text-[16px] font-normal leading-[24px] text-carbonBlack dark:text-white lg:text-[20px] lg:leading-[30px]">
                  Your custom website into a fully functional online store with our easy to use REST
                  API.
                </p>
              </div>
            </div>
          </div>
          <div className="order z-[9] order-2 grid place-content-center rounded-[30px] bg-white p-8 px-6 dark:bg-[#000] lg:place-content-start">
            <p className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
              The time for static product placement is over.
            </p>
          </div>

          <div className="order z-[8] order-3 flex flex-col gap-8 rounded-[30px] bg-[#e7e7e7] pb-8 dark:bg-carbonBlack md:order-4 md:max-w-[383px] lg:order-3 lg:p-10">
            <div className="space-y-3 p-8">
              <h3 className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
                Boost
              </h3>
              <p className="font-aspekta text-[16px] font-normal leading-[24px] text-smGray lg:text-[20px] lg:leading-[30px]">
                Customer loyalty by keeping them updated and providing exclusive, customized offers.
              </p>
            </div>
            <div className="relative h-[126px] w-full">
              <Image src={'/static/landing/b2bbc/boost.svg'} fill alt="Boost Image" />
            </div>
          </div>
          <div className="order z-[7] order-4 grid place-content-center rounded-[30px] bg-white p-8 px-6 text-carbonBlack dark:bg-[#000] dark:text-white md:order-3 lg:order-4">
            <p className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
              We provide you with complete flexibility.
            </p>
          </div>

          <div className="order z-[6] order-5 flex flex-col gap-8 rounded-[30px] bg-[#e7e7e7] p-8 dark:bg-carbonBlack dark:text-white md:max-w-[383px] lg:p-10">
            <div className="space-y-3">
              <h3 className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
                Benefit
              </h3>
              <p className="font-aspekta text-[16px] font-normal leading-[24px] text-smGray lg:text-[20px] lg:leading-[30px]">
                From the power of partnerships to expand your reach and grow your audience.
              </p>
            </div>
            <div className="relative h-[169px] w-full max-w-[245px] self-end">
              <Image src={'/static/landing/b2bbc/benefit.svg'} fill alt="Benefit Image" />
            </div>
          </div>

          <div className="order z-[6] order-5 flex flex-col gap-8 rounded-[30px] bg-[#e7e7e7] p-8 dark:bg-carbonBlack dark:text-white md:max-w-[383px] lg:p-10">
            <div className="relative -mt-4 flex h-[169px] w-full justify-center self-end">
              <Image src={'/static/landing/b2bbc/ai.svg'} fill alt="Benefit Image" />
            </div>
            <h3 className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
              AI powered
            </h3>
            <p className="font-aspekta text-[16px] font-medium leading-[24px] text-smGray lg:text-[20px] lg:leading-[30px]">
              We offer state-of-the-art technology, allowing you to act with unprecedented
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default B2BBC
