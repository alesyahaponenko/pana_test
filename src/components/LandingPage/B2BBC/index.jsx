import { useThemeHandler } from '@/lib/hooks/useThemeHandler'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const B2BBC = () => {
  const blockRef = useRef(null)
  const timelineRef = useRef(null)
  const timelineBlockRef = useRef(null)
  const timelineApiRef = useRef(null)
  const timelineAiRef = useRef(null)
  const [imageHover, setImageHover] = useState(false)
  const [blockHover, setBlockHover] = useState(false)
  const [apiHover, setApiHover] = useState(false)
  const [aiHover, setAiHover] = useState(false)
  const { resolvedTheme } = useThemeHandler()
  const isDarkTheme = resolvedTheme === 'dark'

  useEffect(() => {
    const image1 = blockRef.current.querySelector('.image1')
    const image2 = blockRef.current.querySelector('.image2')
    const image3 = blockRef.current.querySelector('.image3')

    timelineRef.current = gsap.timeline({ paused: true })
    timelineRef.current.to(image1, {
      scale: 1,
      zIndex: 0,
      borderWidth: 0,
      left: '14%',
      duration: 1,
      ease: 'expo.inOut',
    })
    timelineRef.current.to(
      image2,
      {
        scale: 1,
        left: '60%',
        duration: 1,
        ease: 'expo.inOut',
      },
      '<'
    )
    timelineRef.current.to(
      image3,
      {
        scale: 1.25,
        zIndex: 1000,
        borderWidth: 4,
        borderColor: 'black',
        left: '37%',
        duration: 1,
        ease: 'expo.inOut',
      },
      '<'
    )

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isDarkTheme])

  useEffect(() => {
    const smallCube = blockRef.current.querySelector('.smallCube')
    const middleCube = blockRef.current.querySelector('.middleCube')
    const bigCube = blockRef.current.querySelector('.bigCube')

    timelineBlockRef.current = gsap.timeline({ paused: true })
    timelineBlockRef.current.to(smallCube, {
      xPercent: 224,
      fillOpacity: '1',
      duration: 1,
      ease: 'expo.inOut',
    })
    timelineBlockRef.current.to(
      middleCube,
      {
        xPercent: -112,
        fillOpacity: '0.2',
        duration: 1,
        ease: 'expo.inOut',
      },
      '<'
    )
    timelineBlockRef.current.to(
      bigCube,
      {
        xPercent: -112,
        fillOpacity: '0.6',
        duration: 1,
        ease: 'expo.inOut',
      },
      '<'
    )

    return () => {
      if (timelineBlockRef.current) {
        timelineBlockRef.current.kill()
      }
    }
  }, [isDarkTheme])

  useEffect(() => {
    const pointWraps = blockRef.current.querySelectorAll('.pointWrap')
    const points = blockRef.current.querySelectorAll('.point')

    const randomBlink = (element) => {
      const timeline = gsap.timeline({ repeat: -1 })
      timeline.to(element, {
        opacity: 0,
        scale: 1.5,
        duration: Math.random() * 1.5 + 0.5,
        ease: 'power2.inOut',
      })
      timeline.to(element, {
        opacity: 1,
        scale: 1,
        duration: Math.random() * 1.5 + 0.5,
        ease: 'power2.inOut',
      })
      return timeline
    }

    timelineApiRef.current = gsap.timeline({ paused: true })

    pointWraps.forEach((wrap, index) => {
      const point = points[index]
      const wrapTimeline = randomBlink(wrap)
      const pointTimeline = randomBlink(point)

      timelineApiRef.current.add(wrapTimeline, Math.random() * 2)
      timelineApiRef.current.add(pointTimeline, Math.random() * 2)
    })

    return () => {
      timelineApiRef.current.kill()
    }
  }, [isDarkTheme])

  useEffect(() => {
    const squareAi = blockRef.current.querySelector('.squareAi')
    const moveParts = blockRef.current.querySelectorAll('.movePart')

    const greenShades = [
      '#3AB54B',
      '#2ECC71',
      '#27AE60',
      '#1E8449',
      '#145A32',
      '#66BB6A',
      '#4CAF50',
      '#43A047',
      '#2E7D32',
      '#1B5E20',
    ]

    const randomAnimation = (element) => {
      const timeline = gsap.timeline({ repeat: -1, yoyo: true })
      timeline.to(element, {
        fill: () => greenShades[Math.floor(Math.random() * greenShades.length)],
        duration: () => gsap.utils.random(0.5, 1.5),
        ease: 'power1.inOut',
      })
      return timeline
    }

    timelineAiRef.current = gsap.timeline({ paused: true, repeat: -1 })

    // Animate squareAi
    timelineAiRef.current.to(squareAi, {
      scale: 1.1,
      opacity: 0,
      transformOrigin: '50 50',
      fill: greenShades[0],
      duration: 1,
      ease: 'power2.inOut',
    })

    const movePartTimelines = Array.from(moveParts).map((part) => randomAnimation(part))

    const toggleMovePartAnimations = (play) => {
      movePartTimelines.forEach((tl) => (play ? tl.play() : tl.pause()))
    }

    // Add control to main timeline
    timelineAiRef.current.add(() => toggleMovePartAnimations(true), 0)

    return () => {
      if (timelineAiRef.current) {
        timelineAiRef.current.kill()
      }
      movePartTimelines.forEach((tl) => tl.kill())
    }
  }, [isDarkTheme])

  useEffect(() => {
    if (timelineRef.current) {
      imageHover ? timelineRef.current.play() : timelineRef.current.reverse()
    }
  }, [imageHover])

  useEffect(() => {
    if (timelineBlockRef.current) {
      blockHover ? timelineBlockRef.current.play() : timelineBlockRef.current.reverse()
    }
  }, [blockHover])

  useEffect(() => {
    if (timelineApiRef.current) {
      apiHover ? timelineApiRef.current.play() : timelineApiRef.current.reverse()
    }
  }, [apiHover])

  useEffect(() => {
    if (timelineAiRef.current) {
      aiHover ? timelineAiRef.current.play() : timelineAiRef.current.pause()
    }
  }, [aiHover])

  return (
    <section
      ref={blockRef}
      className="sectionB2BBC relative mx-auto w-full max-w-[1200px] px-4 sm:mb-[20vh] xl:px-0"
    >
      <h2 className="b2bcHeader mx-auto max-w-[310px] text-center font-aspekta text-[1.5rem] font-semibold leading-[2rem] text-carbonBlack dark:text-white sm:mb-40 md:max-w-[590px] md:text-[2rem] md:leading-[2.5rem] lg:text-[3.5rem] lg:leading-[4.2rem]">
        Next generation of <br />
        <span className="text-green">B2B2C</span> <br />
        digital sales business
      </h2>
      <div className="cardsOrdersWrap relative">
        <div className="cardsOrders grid-rows-auto relative mx-auto mt-[55px] grid max-w-[380px] grid-cols-1 gap-x-[20px] gap-y-[20px] md:mx-0 md:max-w-full md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
          <div
            onMouseEnter={() => setApiHover(true)}
            onMouseLeave={() => setApiHover(false)}
            className="order z-[10] order-1 flex w-full flex-col rounded-[30px] bg-[#e7e7e7] dark:bg-carbonBlack md:max-w-[383px]"
          >
            <div className="flex flex-col gap-8 p-8 lg:p-10">
              <div className="relative h-[198px] max-w-[307px]">
                <svg
                  width="294"
                  height="198"
                  viewBox="0 0 294 198"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2613_37130)">
                    <rect
                      x="81.168"
                      y="48.7969"
                      width="130.672"
                      height="84.4098"
                      rx="2"
                      fill="#3AB54B"
                      fillOpacity="0.2"
                    />
                    <rect
                      x="81.168"
                      y="48.7969"
                      width="130.672"
                      height="10.0041"
                      rx="2"
                      fill="#3AB54B"
                      fillOpacity="0.2"
                    />
                    <ellipse cx="93.1937" cy="53.7986" rx="1.88516" ry="1.87577" fill="#3AB54B" />
                    <ellipse cx="98.848" cy="53.7986" rx="1.88516" ry="1.87577" fill="#3AB54B" />
                    <ellipse cx="104.504" cy="53.7986" rx="1.88516" ry="1.87577" fill="#3AB54B" />
                    <path
                      d="M170.155 48.7966V-23.108H152.564M191.829 48.7966V-52.4951M218.843 55.3619H238.318V12.4996M218.843 69.1175H294.5M218.843 88.1879H262.819M219.157 140.71V171.347M213.817 176.974H150.365M150.365 133.206V225.119M124.922 133.206V171.972M102.934 133.206V151.964H50.4766"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <path
                      d="M88.173 123.515H70.2684M88.173 100.068H12.7852M88.173 82.2483H29.7474V52.5486M88.173 65.0537H69.0119V12M120.213 48.797V28.7888"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <g clipPath="url(#clip1_2613_37130)">
                      <path
                        d="M198.738 124.756V134.918C198.738 138.463 207.597 141.335 218.528 141.335C229.458 141.335 238.317 138.463 238.317 134.918V124.756H198.738Z"
                        fill="#3AB54B"
                      />
                      <path
                        d="M198.738 114.68V124.842C198.738 128.387 207.597 131.259 218.528 131.259C229.458 131.259 238.317 128.387 238.317 124.842V114.68H198.738Z"
                        fill="#236D2D"
                      />
                      <path
                        d="M198.738 104.609V114.771C198.738 118.316 207.597 121.188 218.528 121.188C229.458 121.188 238.317 118.316 238.317 114.771V104.609H198.738Z"
                        fill="#17481E"
                      />
                      <path
                        d="M238.317 104.609C238.317 108.154 229.458 111.026 218.528 111.026C207.597 111.026 198.738 108.154 198.738 104.609C198.738 101.065 207.597 98.1923 218.528 98.1923C229.458 98.1923 238.317 101.065 238.317 104.609Z"
                        fill="#0C240F"
                      />
                    </g>
                    <path
                      className="pointWrap"
                      d="M244.1 6.25258C244.1 9.4274 241.513 12.0052 238.317 12.0052C235.122 12.0052 232.535 9.4274 232.535 6.25258C232.535 3.07775 235.122 0.5 238.317 0.5C241.513 0.5 244.1 3.07775 244.1 6.25258Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="238.32"
                      cy="6.25298"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M274.877 88.1881C274.877 91.363 272.291 93.9407 269.095 93.9407C265.899 93.9407 263.312 91.363 263.312 88.1881C263.312 85.0133 265.899 82.4355 269.095 82.4355C272.291 82.4355 274.877 85.0133 274.877 88.1881Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="269.098"
                      cy="88.1876"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M225.252 176.975C225.252 180.15 222.666 182.728 219.47 182.728C216.274 182.728 213.688 180.15 213.688 176.975C213.688 173.8 216.274 171.223 219.47 171.223C222.666 171.223 225.252 173.8 225.252 176.975Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="219.473"
                      cy="176.976"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M130.391 178.225C130.391 181.4 127.804 183.978 124.608 183.978C121.413 183.978 118.826 181.4 118.826 178.225C118.826 175.05 121.413 172.473 124.608 172.473C127.804 172.473 130.391 175.05 130.391 178.225Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="124.611"
                      cy="178.226"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M49.967 153.84C49.967 157.015 47.3804 159.593 44.1847 159.593C40.9889 159.593 38.4023 157.015 38.4023 153.84C38.4023 150.666 40.9889 148.088 44.1847 148.088C47.3804 148.088 49.967 150.666 49.967 153.84Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="44.1874"
                      cy="153.841"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M70.0725 125.079C70.0725 128.254 67.4859 130.831 64.2901 130.831C61.0944 130.831 58.5078 128.254 58.5078 125.079C58.5078 121.904 61.0944 119.326 64.2901 119.326C67.4859 119.326 70.0725 121.904 70.0725 125.079Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="64.2928"
                      cy="125.079"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M12.2834 100.253C12.2834 103.427 9.6968 106.005 6.50107 106.005C3.30534 106.005 0.71875 103.427 0.71875 100.253C0.71875 97.0778 3.30534 94.5 6.50107 94.5C9.6968 94.5 12.2834 97.0778 12.2834 100.253Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="6.50182"
                      cy="100.253"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M35.5275 48.1715C35.5275 51.3463 32.9409 53.9241 29.7452 53.9241C26.5495 53.9241 23.9629 51.3463 23.9629 48.1715C23.9629 44.9967 26.5495 42.4189 29.7452 42.4189C32.9409 42.4189 35.5275 44.9967 35.5275 48.1715Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="29.7499"
                      cy="48.1719"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M75.0646 6.25258C75.0646 9.4274 72.478 12.0052 69.2823 12.0052C66.0866 12.0052 63.5 9.4274 63.5 6.25258C63.5 3.07775 66.0866 0.5 69.2823 0.5C72.478 0.5 75.0646 3.07775 75.0646 6.25258Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="69.285"
                      cy="6.25298"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      className="pointWrap"
                      d="M125.994 22.5358C125.994 25.7106 123.408 28.2884 120.212 28.2884C117.016 28.2884 114.43 25.7106 114.43 22.5358C114.43 19.361 117.016 16.7832 120.212 16.7832C123.408 16.7832 125.994 19.361 125.994 22.5358Z"
                      stroke="#3AB54B"
                      strokeOpacity="0.4"
                    />
                    <ellipse
                      className="point"
                      cx="120.215"
                      cy="22.5362"
                      rx="2.51354"
                      ry="2.50103"
                      fill="#3AB54B"
                    />
                    <path
                      d="M169.33 107.596H171.592C172.078 107.596 172.463 107.446 172.748 107.146C173.049 106.862 173.2 106.479 173.2 105.995V99.2176C173.2 98.534 173.334 98.0171 173.602 97.667C173.87 97.3002 174.322 97.0584 174.959 96.9417C174.322 96.825 173.87 96.5915 173.602 96.2414C173.334 95.8746 173.2 95.3494 173.2 94.6657V87.8879C173.2 87.4044 173.049 87.0209 172.748 86.7375C172.463 86.4373 172.078 86.2873 171.592 86.2873H169.33V84.4365H171.994C173.099 84.4365 173.929 84.72 174.482 85.2869C175.034 85.8371 175.311 86.6208 175.311 87.6378V94.3656C175.311 94.9492 175.47 95.3744 175.788 95.6411C176.123 95.8912 176.701 96.0163 177.522 96.0163V97.8671C176.701 97.8671 176.123 98.0004 175.788 98.2672C175.47 98.5173 175.311 98.9342 175.311 99.5177V106.246C175.311 107.263 175.034 108.046 174.482 108.596C173.929 109.163 173.099 109.447 171.994 109.447H169.33V107.596Z"
                      fill="#3AB54B"
                    />
                    <path d="M159.986 86.4375H162.198V104.445H159.986V86.4375Z" fill="#3AB54B" />
                    <path
                      d="M143.91 86.4375H151.147C152.521 86.4375 153.669 86.6876 154.59 87.1878C155.528 87.6713 156.224 88.3299 156.676 89.1636C157.145 89.9973 157.379 90.931 157.379 91.9648C157.379 92.9985 157.145 93.9323 156.676 94.7659C156.224 95.5996 155.528 96.2665 154.59 96.7668C153.669 97.2503 152.521 97.4921 151.147 97.4921H146.122V104.445H143.91V86.4375ZM151.147 95.4912C152.471 95.4912 153.459 95.1744 154.113 94.5408C154.766 93.8906 155.093 93.0319 155.093 91.9648C155.093 90.8977 154.766 90.0473 154.113 89.4137C153.459 88.7635 152.471 88.4383 151.147 88.4383H146.122V95.4912H151.147Z"
                      fill="#3AB54B"
                    />
                    <path
                      d="M137.363 99.2928H128.97L126.934 104.445H124.572L131.96 86.4375H134.373L141.761 104.445H139.399L137.363 99.2928ZM136.559 97.292L133.166 88.7134L129.774 97.292H136.559Z"
                      fill="#3AB54B"
                    />
                    <path
                      d="M115.525 109.447C114.419 109.447 113.59 109.163 113.037 108.596C112.484 108.046 112.207 107.263 112.207 106.246V99.5177C112.207 98.9342 112.04 98.5173 111.705 98.2672C111.387 98.0004 110.817 97.8671 109.996 97.8671V96.0163C110.817 96.0163 111.387 95.8912 111.705 95.6411C112.04 95.3744 112.207 94.9492 112.207 94.3656V87.6378C112.207 86.6208 112.484 85.8371 113.037 85.2869C113.59 84.72 114.419 84.4365 115.525 84.4365H118.188V86.2873H115.927C115.458 86.2873 115.072 86.4373 114.771 86.7375C114.469 87.0209 114.318 87.4044 114.318 87.8879V94.6657C114.318 95.3494 114.184 95.8746 113.916 96.2414C113.648 96.5915 113.196 96.825 112.559 96.9417C113.196 97.0584 113.648 97.3002 113.916 97.667C114.184 98.0171 114.318 98.534 114.318 99.2176V105.995C114.318 106.479 114.469 106.862 114.771 107.146C115.072 107.446 115.458 107.596 115.927 107.596H118.188V109.447H115.525Z"
                      fill="#3AB54B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2613_37130">
                      <rect width="294" height="198" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_2613_37130">
                      <rect
                        width="39.5786"
                        height="43.1428"
                        fill="white"
                        transform="translate(198.738 98.1923)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                {/* <Image src={'/static/landing/b2bbc/api.svg'} fill alt="Api Image" /> */}
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

          <div
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
            className="order relative z-[8] order-3 flex flex-col gap-8 rounded-[30px] bg-[#e7e7e7] pb-8 dark:bg-carbonBlack md:order-4 md:max-w-[383px] lg:order-3 lg:p-10"
          >
            <div className="space-y-3 p-8">
              <h3 className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
                Boost
              </h3>
              <p className="font-aspekta text-[16px] font-normal leading-[24px] text-darkSlate dark:text-smGray lg:text-[20px] lg:leading-[30px]">
                Customer loyalty by keeping them updated and providing exclusive, customized offers.
              </p>
            </div>
            <div className="relative bottom-[40px] left-0 h-[126px] w-full overflow-hidden sm:absolute">
              <div className="absolute -left-[15%] top-[50%] h-[100px] w-[100px] -translate-y-1/2 rounded-full border border-white"></div>
              <div className="absolute -right-[15%] top-[50%] h-[100px] w-[100px] -translate-y-1/2 rounded-full border border-white"></div>
              <div className="image1 absolute left-[37%] top-[50%] z-[1] h-[100px] w-[100px] -translate-y-1/2 scale-125 rounded-full border-4 border-[#000]">
                <Image
                  src={'/static/landing/b2bbc/image-1.jpg'}
                  fill
                  alt="Boost Image"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="image3 absolute left-[60%] top-[50%] h-[100px] w-[100px] -translate-y-1/2 rounded-full border border-white">
                <Image
                  src={'/static/landing/b2bbc/image-3.jpg'}
                  fill
                  alt="Boost Image"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="image2 absolute left-[14%] top-[50%] h-[100px] w-[100px] -translate-y-1/2 rounded-full border border-white">
                <Image
                  src={'/static/landing/b2bbc/image-2.jpg'}
                  fill
                  alt="Boost Image"
                  className="h-full w-full rounded-full"
                />
              </div>
              {/* <Image src={'/static/landing/b2bbc/boost.svg'} fill alt="Boost Image" /> */}
            </div>
          </div>
          <div className="order z-[7] order-4 grid place-content-center rounded-[30px] bg-white p-8 px-6 text-carbonBlack dark:bg-[#000] dark:text-white md:order-3 lg:order-4">
            <p className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
              We provide you with complete flexibility.
            </p>
          </div>

          <div
            onMouseEnter={() => setBlockHover(true)}
            onMouseLeave={() => setBlockHover(false)}
            className="order z-[6] order-5 flex flex-col gap-8 rounded-[30px] bg-[#e7e7e7] p-8 dark:bg-carbonBlack dark:text-white md:max-w-[383px] lg:p-10"
          >
            <div className="space-y-3">
              <h3 className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
                Benefit
              </h3>
              <p className="font-aspekta text-[16px] font-normal leading-[24px] text-carbonBlack dark:text-smGray lg:text-[20px] lg:leading-[30px]">
                From the power of partnerships to expand your reach and grow your audience.
              </p>
            </div>
            <div className="relative h-[169px] w-full max-w-[245px] self-end">
              <svg
                width="245"
                height="169"
                viewBox="0 0 245 169"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="smallCube"
                  d="M0 100C0 95.5817 3.58172 92 8 92H67C71.4183 92 75 95.5817 75 100V169H8C3.58172 169 0 165.418 0 161V100Z"
                  fill="#3AB54B"
                  fillOpacity="0.2"
                />
                <path
                  className="middleCube"
                  d="M85 59C85 54.5817 88.5817 51 93 51H152C156.418 51 160 54.5817 160 59V169H85V59Z"
                  fill="#3AB54B"
                  fillOpacity="0.6"
                />
                <path
                  className="bigCube"
                  d="M170 8C170 3.58172 173.582 0 178 0H237C241.418 0 245 3.58172 245 8V161C245 165.418 241.418 169 237 169H170V8Z"
                  fill="#3AB54B"
                />
              </svg>
            </div>
          </div>

          <div
            onMouseEnter={() => setAiHover(true)}
            onMouseLeave={() => setAiHover(false)}
            className="order z-[6] order-6 flex flex-col gap-8 rounded-[30px] bg-[#e7e7e7] p-8 dark:bg-carbonBlack dark:text-white md:max-w-[383px] lg:p-10"
          >
            <div className="relative -mt-4 flex h-[169px] w-full justify-center self-end">
              <svg
                width="307"
                height="198"
                viewBox="0 0 307 198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2913_41583)">
                  <path
                    className="movePart"
                    d="M137 140L137 139L135 139L135 140L137 140ZM135 152C135 152.552 135.448 153 136 153C136.552 153 137 152.552 137 152L135 152ZM135 140L135 152L137 152L137 140L135 140Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M149 140L149 139L147 139L147 140L149 140ZM147 152C147 152.552 147.448 153 148 153C148.552 153 149 152.552 149 152L147 152ZM147 140L147 152L149 152L149 140L147 140Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M161 140L161 139L159 139L159 140L161 140ZM159 152C159 152.552 159.448 153 160 153C160.552 153 161 152.552 161 152L159 152ZM159 140L159 152L161 152L161 140L159 140Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M173 140L173 139L171 139L171 140L173 140ZM171 152C171 152.552 171.448 153 172 153C172.552 153 173 152.552 173 152L171 152ZM171 140L171 152L173 152L173 140L171 140Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M171 50L171 51L173 51L173 50L171 50ZM173 38C173 37.4477 172.552 37 172 37C171.448 37 171 37.4477 171 38L173 38ZM173 50L173 38L171 38L171 50L173 50Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M159 50L159 51L161 51L161 50L159 50ZM161 38C161 37.4477 160.552 37 160 37C159.448 37 159 37.4477 159 38L161 38ZM161 50L161 38L159 38L159 50L161 50Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M147 50L147 51L149 51L149 50L147 50ZM149 38C149 37.4477 148.552 37 148 37C147.448 37 147 37.4477 147 38L149 38ZM149 50L149 38L147 38L147 50L149 50Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M135 50L135 51L137 51L137 50L135 50ZM137 38C137 37.4477 136.552 37 136 37C135.448 37 135 37.4477 135 38L137 38ZM137 50L137 38L135 38L135 50L137 50Z"
                    fill="#3AB54B"
                  />
                  <path
                    d="M136.5 152.5L136.5 152L135.5 152L135.5 152.5L136.5 152.5ZM135.5 207.5C135.5 207.776 135.724 208 136 208C136.276 208 136.5 207.776 136.5 207.5L135.5 207.5ZM135.5 152.5L135.5 207.5L136.5 207.5L136.5 152.5L135.5 152.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M148.5 152.5L148.5 152L147.5 152L147.5 152.5L148.5 152.5ZM147.5 207.5C147.5 207.776 147.724 208 148 208C148.276 208 148.5 207.776 148.5 207.5L147.5 207.5ZM147.5 152.5L147.5 207.5L148.5 207.5L148.5 152.5L147.5 152.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M160.5 152.5L160.5 152L159.5 152L159.5 152.5L160.5 152.5ZM159.5 207.5C159.5 207.776 159.724 208 160 208C160.276 208 160.5 207.776 160.5 207.5L159.5 207.5ZM159.5 152.5L159.5 207.5L160.5 207.5L160.5 152.5L159.5 152.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M172.5 152.5L172.5 152L171.5 152L171.5 152.5L172.5 152.5ZM171.5 207.5C171.5 207.776 171.724 208 172 208C172.276 208 172.5 207.776 172.5 207.5L171.5 207.5ZM171.5 152.5L171.5 207.5L172.5 207.5L172.5 152.5L171.5 152.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M171.5 37.5L171.5 38L172.5 38L172.5 37.5L171.5 37.5ZM172.5 -17.5C172.5 -17.7761 172.276 -18 172 -18C171.724 -18 171.5 -17.7761 171.5 -17.5L172.5 -17.5ZM172.5 37.5L172.5 -17.5L171.5 -17.5L171.5 37.5L172.5 37.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M159.5 37.5L159.5 38L160.5 38L160.5 37.5L159.5 37.5ZM160.5 -17.5C160.5 -17.7761 160.276 -18 160 -18C159.724 -18 159.5 -17.7761 159.5 -17.5L160.5 -17.5ZM160.5 37.5L160.5 -17.5L159.5 -17.5L159.5 37.5L160.5 37.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M147.5 37.5L147.5 38L148.5 38L148.5 37.5L147.5 37.5ZM148.5 -17.5C148.5 -17.7761 148.276 -18 148 -18C147.724 -18 147.5 -17.7761 147.5 -17.5L148.5 -17.5ZM148.5 37.5L148.5 -17.5L147.5 -17.5L147.5 37.5L148.5 37.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M135.5 37.5L135.5 38L136.5 38L136.5 37.5L135.5 37.5ZM136.5 -17.5C136.5 -17.7761 136.276 -18 136 -18C135.724 -18 135.5 -17.7761 135.5 -17.5L136.5 -17.5ZM136.5 37.5L136.5 -17.5L135.5 -17.5L135.5 37.5L136.5 37.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    className="movePart"
                    d="M199 112H198V114H199V112ZM211 114C211.552 114 212 113.552 212 113C212 112.448 211.552 112 211 112V114ZM199 114H211V112H199V114Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M199 100H198V102H199V100ZM211 102C211.552 102 212 101.552 212 101C212 100.448 211.552 100 211 100V102ZM199 102H211V100H199V102Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M199 88H198V90H199V88ZM211 90C211.552 90 212 89.5523 212 89C212 88.4477 211.552 88 211 88V90ZM199 90H211V88H199V90Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M199 76H198V78H199V76ZM211 78C211.552 78 212 77.5523 212 77C212 76.4477 211.552 76 211 76V78ZM199 78H211V76H199V78Z"
                    fill="#3AB54B"
                  />
                  <path
                    d="M97 77.5L97.5 77.5L97.5 76.5L97 76.5L97 77.5ZM-4.99998 76.5C-5.27613 76.5 -5.49998 76.7239 -5.49998 77C-5.49998 77.2761 -5.27613 77.5 -4.99998 77.5L-4.99998 76.5ZM97 76.5L-4.99998 76.5L-4.99998 77.5L97 77.5L97 76.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M97 89.5L97.5 89.5L97.5 88.5L97 88.5L97 89.5ZM-4.99998 88.5C-5.27613 88.5 -5.49998 88.7239 -5.49998 89C-5.49998 89.2761 -5.27613 89.5 -4.99998 89.5L-4.99998 88.5ZM97 88.5L-4.99998 88.5L-4.99998 89.5L97 89.5L97 88.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M97 101.5L97.5 101.5L97.5 100.5L97 100.5L97 101.5ZM-4.99998 100.5C-5.27613 100.5 -5.49998 100.724 -5.49998 101C-5.49998 101.276 -5.27613 101.5 -4.99998 101.5L-4.99998 100.5ZM97 100.5L-4.99998 100.5L-4.99998 101.5L97 101.5L97 100.5Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M97 113.5L97.5 113.5L97.5 112.5L97 112.5L97 113.5ZM-6.71117 136.547C-6.96147 136.663 -7.06982 136.961 -6.95317 137.211C-6.83653 137.461 -6.53906 137.57 -6.28877 137.453L-6.71117 136.547ZM45 113L45 112.5L44.8892 112.5L44.7888 112.547L45 113ZM97 112.5L45 112.5L45 113.5L97 113.5L97 112.5ZM44.7888 112.547L-6.71117 136.547L-6.28877 137.453L45.2112 113.453L44.7888 112.547Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M212 113L211.5 113L211.5 114L212 114L212 113ZM314 114C314.276 114 314.5 113.776 314.5 113.5C314.5 113.224 314.276 113 314 113L314 114ZM212 114L314 114L314 113L212 113L212 114Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M212 101L211.5 101L211.5 102L212 102L212 101ZM314 102C314.276 102 314.5 101.776 314.5 101.5C314.5 101.224 314.276 101 314 101L314 102ZM212 102L314 102L314 101L212 101L212 102Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M212 89.0001L211.5 89.0001L211.5 90.0001L212 90.0001L212 89.0001ZM307.693 73.4612C307.948 73.3548 308.068 73.062 307.961 72.8072C307.855 72.5523 307.562 72.4321 307.307 72.5385L307.693 73.4612ZM268 89.5001L268 90.0001L268.1 90.0001L268.193 89.9614L268 89.5001ZM212 90.0001L268 90.0001L268 89.0001L212 89.0001L212 90.0001ZM268.193 89.9614L307.693 73.4612L307.307 72.5385L267.807 89.0387L268.193 89.9614Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M212 77L211.5 77L211.5 78L212 78L212 77ZM315.711 53.9532C315.961 53.8366 316.07 53.5391 315.953 53.2888C315.837 53.0385 315.539 52.9302 315.289 53.0468L315.711 53.9532ZM264 77.5L264 78L264.111 78L264.211 77.9532L264 77.5ZM212 78L264 78L264 77L212 77L212 78ZM264.211 77.9532L315.711 53.9532L315.289 53.0468L263.789 77.0468L264.211 77.9532Z"
                    fill="#3AB54B"
                    fillOpacity="0.4"
                  />
                  <path
                    className="movePart"
                    d="M109 78L110 78L110 76L109 76L109 78ZM97 76C96.4477 76 96 76.4477 96 77C96 77.5523 96.4477 78 97 78L97 76ZM109 76L97 76L97 78L109 78L109 76Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M109 90L110 90L110 88L109 88L109 90ZM97 88C96.4477 88 96 88.4477 96 89C96 89.5523 96.4477 90 97 90L97 88ZM109 88L97 88L97 90L109 90L109 88Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M109 102L110 102L110 100L109 100L109 102ZM97 100C96.4477 100 96 100.448 96 101C96 101.552 96.4477 102 97 102L97 100ZM109 100L97 100L97 102L109 102L109 100Z"
                    fill="#3AB54B"
                  />
                  <path
                    className="movePart"
                    d="M109 114L110 114L110 112L109 112L109 114ZM97 112C96.4477 112 96 112.448 96 113C96 113.552 96.4477 114 97 114L97 112ZM109 112L97 112L97 114L109 114L109 112Z"
                    fill="#3AB54B"
                  />
                  <rect
                    className="squareAi"
                    x="109"
                    y="50.5"
                    width="89"
                    height="89"
                    rx="20"
                    fill="#3AB54B"
                    fillOpacity="0.2"
                  />
                  <rect
                    x="109.5"
                    y="51"
                    width="88"
                    height="88"
                    rx="19.5"
                    stroke="#3AB54B"
                    strokeOpacity="0.6"
                  />
                  <path
                    d="M163.986 85.9375H163.486V86.4375V104.445V104.945H163.986H166.198H166.698V104.445V86.4375V85.9375H166.198H163.986Z"
                    fill="#3AB54B"
                    stroke="#3AB54B"
                  />
                  <path
                    d="M143.362 104.945H143.702L143.827 104.629L145.738 99.7928H153.451L155.361 104.629L155.486 104.945H155.826H158.188H158.934L158.651 104.255L151.263 86.2477L151.136 85.9375H150.8H148.388H148.053L147.925 86.2477L140.537 104.255L140.254 104.945H141H143.362ZM146.937 96.792L149.594 90.0731L152.251 96.792H146.937Z"
                    fill="#3AB54B"
                    stroke="#3AB54B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2913_41583">
                    <rect width="307" height="198" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="font-aspekta text-[24px] font-medium leading-[31.2px] text-carbonBlack dark:text-white lg:text-[28px] lg:leading-[36.4px]">
              AI powered
            </h3>
            <p className="font-aspekta text-[16px] font-medium leading-[24px] text-carbonBlack dark:text-smGray lg:text-[20px] lg:leading-[30px]">
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
