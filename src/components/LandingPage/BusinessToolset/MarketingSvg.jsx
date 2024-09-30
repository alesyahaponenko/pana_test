'use client'

import React, { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import CustomEase from 'gsap/CustomEase'

gsap.registerPlugin(MotionPathPlugin, CustomEase)

const MarketingSvg = ({ marketingHover, isDarkTheme }) => {
  const svgRef = useRef(null)
  const pointMoveRef = useRef(null)
  const vertLineRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const pathLine = svgRef.current.querySelector('.pathLine')
    const percentTable = svgRef.current.querySelector('.percentTable')
    const numberText = svgRef.current.querySelector('.numberText')
    const pointMove = pointMoveRef.current

    timelineRef.current = gsap.timeline({ repeat: -1 })
    timelineRef.current.to(pointMove, {
      duration: 5,
      motionPath: {
        path: pathLine,
        align: pathLine,
        alignOrigin: [0.5, 0],
      },
      ease: 'none',
    })
    timelineRef.current.fromTo(
      percentTable,
      { x: -275 },
      {
        x: 0,
        duration: 5,
        ease: CustomEase.create(
          'custom',
          'M0,0 C0,0 0.131,0.126 0.324,0.318 0.381,0.375 0.504,0.387 0.563,0.458 0.606,0.51 0.701,0.633 0.738,0.687 0.881,0.896 1,1 1,1 '
        ),
      },
      '<'
    )
    timelineRef.current.to(
      { value: 0 },
      {
        value: 100,
        duration: 5,
        ease: 'power1.inOut',
        onUpdate: function () {
          numberText.textContent = Math.floor(this.targets()[0].value)
        },
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
    if (timelineRef.current) {
      marketingHover ? timelineRef.current.play() : timelineRef.current.pause()
    }
  }, [marketingHover])

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="358"
      height="207"
      fill="none"
      viewBox="0 0 358 207"
      className="w-full"
    >
      <path stroke="#383838" strokeDasharray="8 8" d="M0 40.787L358 40.787"></path>
      <path stroke="#383838" strokeDasharray="8 8" d="M0 90.501L358 90.501"></path>
      <path stroke="#383838" strokeDasharray="8 8" d="M0 140.216L358 140.216"></path>
      <path
        className="pathLine"
        stroke="#3AB54B"
        strokeWidth="4"
        d="M6.476 48.652s16.08 36.61 37.465 43.73c25.407 8.461 38.791-29.138 64.754-22.555 32.544 8.252 12.202 67.235 45.328 72.73 49.954 8.286 24.977-72.73 127.659-103.111"
      ></path>

      <g className="percentTable" filter="url(#filter0_b_2026_4954)">
        <rect
          width="69"
          height="29.028"
          x="249.958"
          y="0.779"
          fill={isDarkTheme ? '#fff' : '#E9E9E9'}
          rx="14.514"
        ></rect>
        <rect
          width="68.449"
          height="28.476"
          x="250.234"
          y="1.055"
          stroke="#000"
          strokeOpacity="0.1"
          strokeWidth="0.551"
          rx="14.238"
        ></rect>
        <text
          x="284"
          y="16"
          fill="#000"
          fontSize="12"
          textAnchor="middle"
          dominantBaseline="middle"
          className="numberText"
        >
          100
        </text>
        <text
          x="299"
          y="16"
          fill="#000"
          fontSize="12"
          textAnchor="middle"
          dominantBaseline="middle"
          className="numberText"
        >
          %
        </text>
        {/* <path
          className="Numbers"
          fill="#000"
          d="M269.514 17.895v-5.897h1.338v5.897h-1.338zm-2.28-2.28v-1.337h5.898v1.338h-5.898zm10.866 3.798c-.634 0-1.197-.107-1.688-.32-.489-.213-.872-.504-1.151-.874a2.06 2.06 0 01-.409-1.265 2.103 2.103 0 01.239-1.01c.162-.307.381-.563.656-.767.279-.208.588-.34.929-.397v-.06a1.848 1.848 0 01-1.091-.685 1.982 1.982 0 01-.409-1.249c-.003-.449.122-.85.375-1.202s.6-.629 1.04-.83c.44-.205.943-.307 1.509-.307.559 0 1.058.102 1.495.306.441.202.787.48 1.04.831.256.353.384.753.384 1.202 0 .472-.141.888-.422 1.249a1.845 1.845 0 01-1.078.686v.06c.34.056.647.188.92.396.276.204.494.46.656.767.165.307.247.643.247 1.01 0 .471-.139.893-.417 1.265-.279.37-.662.66-1.151.874-.486.213-1.044.32-1.674.32zm0-1.22c.326 0 .61-.055.852-.165.241-.114.429-.273.562-.478.134-.204.202-.44.205-.707a1.325 1.325 0 00-.217-.737 1.43 1.43 0 00-.576-.507 1.805 1.805 0 00-.826-.184c-.313 0-.591.062-.836.184a1.46 1.46 0 00-.579.507 1.293 1.293 0 00-.205.737c-.003.267.063.503.196.707.134.202.321.36.563.473.244.114.531.17.861.17zm0-3.975c.267 0 .502-.054.707-.162.207-.108.371-.258.49-.452a1.28 1.28 0 00.183-.669 1.243 1.243 0 00-.179-.656 1.15 1.15 0 00-.486-.439 1.56 1.56 0 00-.715-.158c-.276 0-.519.053-.729.158a1.155 1.155 0 00-.486.439 1.21 1.21 0 00-.166.656c-.003.253.054.476.17.67.12.19.283.34.49.451.211.108.451.162.721.162zm5.353 5.169a.914.914 0 01-.665-.273.885.885 0 01-.273-.665.875.875 0 01.273-.656.914.914 0 01.665-.273.9.9 0 01.652.273.894.894 0 01.149 1.13.978.978 0 01-.341.34.887.887 0 01-.46.124zm2.513-.094v-1.142l3.03-2.97c.29-.293.531-.553.724-.78.193-.227.338-.447.435-.66.097-.213.145-.44.145-.682 0-.276-.063-.511-.188-.707a1.25 1.25 0 00-.515-.46 1.667 1.667 0 00-.746-.163c-.287 0-.538.06-.754.18a1.23 1.23 0 00-.503.498 1.597 1.597 0 00-.175.771h-1.504c0-.554.126-1.035.379-1.444.253-.41.601-.726 1.044-.95.446-.225.958-.337 1.534-.337.585 0 1.1.109 1.543.328.443.218.787.518 1.031.899.247.38.371.815.371 1.304 0 .327-.063.648-.188.963-.125.315-.345.665-.66 1.048-.313.384-.752.848-1.317 1.394l-1.504 1.53v.06h3.801v1.32h-5.983zm12.119-1.636v-.46c0-.338.071-.65.213-.934.145-.284.355-.512.631-.686.276-.173.609-.26 1.001-.26.404 0 .742.087 1.015.26.272.17.478.398.618.682.142.284.213.597.213.938v.46c0 .338-.071.649-.213.933a1.69 1.69 0 01-.627.686c-.273.174-.608.26-1.006.26-.397 0-.734-.087-1.009-.26a1.69 1.69 0 01-.627-.686 2.095 2.095 0 01-.209-.933zm1.113-.46v.46c0 .224.054.43.161.618.108.187.299.281.571.281.276 0 .465-.092.567-.277.105-.188.158-.395.158-.622v-.46c0-.228-.05-.435-.149-.622-.1-.19-.291-.286-.576-.286-.267 0-.455.095-.566.285a1.198 1.198 0 00-.166.623zm-5.549-4.534v-.46c0-.342.073-.654.218-.938a1.69 1.69 0 01.63-.682c.276-.173.61-.26 1.002-.26.4 0 .737.087 1.01.26.275.17.483.398.622.682.139.284.209.596.209.937v.46c0 .341-.071.654-.213.938-.14.281-.347.507-.623.678-.275.17-.61.255-1.005.255-.401 0-.739-.085-1.015-.255a1.677 1.677 0 01-.622-.682 2.058 2.058 0 01-.213-.934zm1.121-.46v.46c0 .227.053.434.158.622.108.184.298.277.571.277.272 0 .46-.093.562-.277.105-.188.158-.395.158-.623v-.46c0-.227-.05-.434-.149-.622-.1-.19-.29-.285-.571-.285-.27 0-.459.095-.567.285a1.24 1.24 0 00-.162.622zm-.635 7.09l6-8.727h1.065l-6 8.727h-1.065z"
        ></path> */}
      </g>
      <g ref={pointMoveRef} className="pointMove">
        <circle
          cx="4.308"
          cy="4.308"
          r="4.887"
          fill="#3AB54B"
          stroke={isDarkTheme ? '#fff' : '#FFF'}
          strokeWidth="3.158"
          transform="matrix(-1 0 0 1 287.765 39.732)"
        ></circle>
        <path
          ref={vertLineRef}
          className="vertLine"
          stroke="#AAABAD"
          strokeWidth="1.103"
          d="M283.622 41.287L283.622 240.001"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_2026_4954"
          width="113.111"
          height="73.139"
          x="227.902"
          y="-21.276"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="11.028"></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2026_4954"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2026_4954"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_2026_4954"
          width="17.444"
          height="17.444"
          x="275.736"
          y="36.424"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2.105"></feOffset>
          <feGaussianBlur stdDeviation="1.053"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2026_4954"></feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_2026_4954" result="shape"></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

export default MarketingSvg
