'use client'

import React, { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

const ManagmentSvg = ({ managementHover, isDarkTheme }) => {
  const linesRef = useRef([])
  const timelineRef = useRef(null)

  const setLineRef = useCallback((el, index) => {
    linesRef.current[index] = el
  }, [])

  useEffect(() => {
    const lines = linesRef.current.filter(Boolean)
    if (lines.length === 5) {
      const lineHeight = 43
      const containerHeight = 173
      const centerLineIndex = 2

      const tl = gsap.timeline({ repeat: -1 })

      lines.forEach((line, index) => {
        gsap.set(line, { y: index * lineHeight })

        tl.to(
          line,
          {
            y: `-=${containerHeight + lineHeight}`,
            duration: lines.length * 0.8,
            ease: 'none',
            modifiers: {
              y: (y) => gsap.utils.wrap(-lineHeight, containerHeight, parseFloat(y)),
            },
          },
          0
        )

        if (index === centerLineIndex) {
          const rect = line.querySelector('rect')
          tl.to(
            line,
            {
              x: -10,
              duration: 0.8,
              ease: 'expo.inOut',
              yoyo: true,
              repeat: 1,
            },
            '-=0.8'
          )

          tl.to(
            rect,
            {
              fill: isDarkTheme ? '#3AB54B' : '#4ea8566e',
              duration: 0.8,
              ease: 'expo.inOut',
              yoyo: true,
              repeat: 1,
              repeatDelay: 0.3,
            },
            '<'
          )
        }
      })

      timelineRef.current = tl
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isDarkTheme])

  useEffect(() => {
    if (timelineRef.current) {
      managementHover ? timelineRef.current.play() : timelineRef.current.pause()
    }
  }, [managementHover])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="308"
      height="172"
      fill="none"
      viewBox="0 0 308 172"
    >
      <defs>
        <mask id="lineMask">
          <rect x="0" y="0" width="308" height="172" 
          fill={isDarkTheme ? "#262626" : "#fff"} />
        </mask>
      </defs>

      <g mask="url(#lineMask)">
        {[0, 1, 2, 3, 4].map((index) => (
          <g
            key={index}
            className={`line line${index + 1}`}
            ref={(el) => setLineRef(el, index)}
            transform={`translate(0, ${index * 44})`}
          >
            <rect
              width="299.661"
              height="39.314"
              x="8.34"
              fill="#ECECEC"
              fillOpacity={isDarkTheme ? '0.9' : '0.4'}
              rx="8"
            />
            <path
              fill="#000000"
              fillOpacity="0.1"
              fillRule="evenodd"
              d="M24.353 11.908a.762.762 0 011.078.083l6.115 7.166a.77.77 0 010 1l-6.115 7.167a.762.762 0 01-1.078.083.77.77 0 01-.083-1.083l5.69-6.667-5.69-6.667a.77.77 0 01.083-1.082z"
              clipRule="evenodd"
            />
            <path
              stroke="#000000"
              strokeLinecap="round"
              strokeOpacity="0.08"
              strokeWidth="3"
              d="M47.478 19.657H98.85M124.535 19.657h51.371"
            />
            <path
              stroke="#3AB54B"
              strokeLinecap="round"
              strokeWidth="3"
              d="M201.59 19.657h15.9M226.053 19.657h15.9M250.514 19.657h15.9"
            />
          </g>
        ))}
      </g>
      <g className="tablo" filter="url(#filter0_d_54_7870)">
        <rect
          width="79.725"
          height="93.6"
          x="206.982"
          y="71.757"
          fill="#fff"
          stroke="#E9E9E9"
          rx="7.5"
        ></rect>
        <path
          stroke="#00164F"
          strokeLinecap="round"
          strokeOpacity="0.08"
          strokeWidth="3"
          d="M219.938 87.228H260.3M219.938 149.885H260.3M219.938 109.343h55.039"
        ></path>
        <rect
          width="68.494"
          height="22.114"
          x="212.598"
          y="119.171"
          fill="#3AB54B"
          fillOpacity="0.07"
          rx="4"
        ></rect>
        <path
          stroke="#3AB54B"
          strokeLinecap="round"
          strokeWidth="3"
          d="M219.938 130.228h33.023"
        ></path>
      </g>
      <g className="hand" filter="url(#filter1_d_54_7870)">
        <path
          fill="#fff"
          d="M275.224 136.814c0 .138.07-.385.288-.73a1 1 0 011.263-.622.99.99 0 01.627 1.254v2.23a11.44 11.44 0 01-.239 1.717c-.16.502-.387.98-.676 1.421a7.094 7.094 0 00-1.183 1.786 4.046 4.046 0 00-.1.987 3.4 3.4 0 00.12.908 5.951 5.951 0 01-1.223 0c-.388-.06-.865-.829-.995-1.066a.38.38 0 00-.676 0c-.219.375-.706 1.056-.994 1.095-.666.079-2.048 0-3.122 0 0 0 .179-.987-.229-1.342-.408-.355-.825-.77-1.133-1.046l-.826-.908a4.381 4.381 0 01-1.233-1.973c-.208-.928-.189-1.382 0-1.747.193-.31.494-.538.846-.641.292-.052.592-.032.875.059.195.08.364.214.487.385.228.306.298.454.209.118-.09-.336-.199-.839-.408-1.53-.209-.69-.338-.848-.467-1.213-.13-.365-.299-.711-.498-1.165a12.18 12.18 0 01-.457-1.421 1.4 1.4 0 01.259-1.154c.356-.346.871-.477 1.352-.346.377.163.695.435.915.78.293.465.533.962.715 1.48.329.847.563 1.727.696 2.625-.019-.53.028-1.06.14-1.579.11-.32.363-.571.686-.681.296-.09.609-.11.914-.059.309.064.582.24.766.493.23.576.357 1.187.378 1.806.014-.527.09-1.05.229-1.559.166-.232.409-.399.686-.474.328-.059.665-.059.994 0 .269.09.505.258.676.484.211.523.339 1.076.378 1.638"
        ></path>
        <path
          fill="#7F7F7F"
          fillRule="evenodd"
          d="M277.775 136.772a1.358 1.358 0 00-.881-1.66 1.376 1.376 0 00-1.5.431 5.619 5.619 0 00-.158-.486l-.052-.093a1.765 1.765 0 00-.856-.612 3.183 3.183 0 00-1.178-.013c-.35.092-.639.276-.851.529a1.625 1.625 0 00-.029-.074c-.283-.409-.637-.637-1.036-.72a2.396 2.396 0 00-1.1.068 1.483 1.483 0 00-.793.626 13.56 13.56 0 00-.271-.771 7.73 7.73 0 00-.748-1.543 2.424 2.424 0 00-1.082-.923c-.658-.184-1.31-.017-1.762.42-.354.456-.474.988-.362 1.498.129.51.287.999.474 1.477.065.149.273.613.242.543a9.808 9.808 0 01.252.611c.035.099.07.187.12.299.204.464.227.521.341.897.058.192.11.375.16.562a2.207 2.207 0 00-1.032-.065c-.48.138-.856.424-1.097.811-.26.5-.265 1.051-.046 2.022.25.843.712 1.583 1.343 2.164l.802.884c.11.101.413.385.612.572l.178.167c.096.089.184.169.269.245l.105.092c.06.052.11.182.13.371a2.367 2.367 0 01-.022.628.371.371 0 00.367.436c.273 0 .549.004 1.017.014l.113.003c1.19.027 1.64.027 2.036-.02.419-.057.893-.626 1.293-1.298.347.637.793 1.194 1.271 1.267.45.047.886.047 1.319.002a.37.37 0 00.321-.464 3.082 3.082 0 01-.107-.811 3.683 3.683 0 01.091-.906 6.931 6.931 0 011.096-1.62 6.12 6.12 0 00.755-1.558c.136-.617.218-1.209.255-1.805l.001-1.205v-.992zm-3.632-1.706c.134.049.291.157.413.303.169.465.268.952.294 1.446-.013.021-.011.024.098.269.544.093.544.093.605-.066.025-.052.025-.052.033-.075a1.71 1.71 0 00.035-.128c.038-.139.072-.248.116-.355.029-.069.059-.13.091-.179.147-.403.501-.577.828-.468.326.109.502.46.392.784l-.02.118v2.231a11.08 11.08 0 01-.23 1.639c-.14.436-.353.884-.624 1.297a7.25 7.25 0 00-1.21 1.833 4.268 4.268 0 00-.133 1.15c-.001.185.013.372.041.559a5.439 5.439 0 01-.733-.028c-.121-.018-.49-.479-.705-.874a.749.749 0 00-.666-.401.752.752 0 00-.672.412c-.234.4-.638.884-.712.895-.337.039-.782.039-1.924.014l-.113-.003c-.253-.006-.451-.009-.624-.012a2.76 2.76 0 00-.013-.407c-.039-.356-.152-.648-.379-.846l-.05-.043a18.033 18.033 0 01-.308-.28l-.135-.126c-.194-.182-.533-.501-.637-.594l-.798-.881a4.042 4.042 0 01-1.152-1.83c-.178-.793-.175-1.187-.026-1.473.13-.207.355-.378.619-.456.192-.031.43-.015.654.057a.748.748 0 01.299.248c-.027-.037.217.301.268.351a.177.177 0 00.037.048c.042.036.12.031.439.008.202-.293.202-.293.177-.37a1.401 1.401 0 00-.048-.229l-.123-.484-.035-.143c-.081-.317-.16-.604-.253-.914-.125-.414-.157-.491-.373-.982a3.201 3.201 0 01-.101-.25 9.762 9.762 0 00-.272-.662l-.234-.525a11.624 11.624 0 01-.438-1.365 1.027 1.027 0 01.194-.839c.225-.213.603-.31.956-.213.259.116.519.338.699.62.278.441.506.913.679 1.405.323.832.549 1.686.679 2.557.069.462.758.399.742-.067-.018-.5.026-1 .131-1.489a.725.725 0 01.442-.408c.229-.069.484-.086.732-.044a.88.88 0 01.525.345c.17.456.289 1.025.308 1.601.016.479.733.477.745-.002.012-.474.079-.944.198-1.403a.87.87 0 01.442-.283 2.44 2.44 0 01.83.007z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#7F7F7F"
          d="M274.617 142.751v-3.406a.372.372 0 00-.373-.37.372.372 0 00-.373.37v3.406a.37.37 0 00.373.369.37.37 0 00.373-.369zM272.64 142.751l-.01-3.408a.37.37 0 00-.373-.368.37.37 0 00-.372.37l.01 3.408a.37.37 0 00.374.367.37.37 0 00.371-.369zM269.895 139.35l.019 3.399a.373.373 0 00.746-.004l-.02-3.399a.373.373 0 00-.745.004z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_54_7870"
          width="88.725"
          height="102.6"
          x="202.482"
          y="68.257"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.252095 0 0 0 0 0.526921 0 0 0 0.15 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_54_7870"></feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_54_7870" result="shape"></feBlend>
        </filter>
        <filter
          id="filter1_d_54_7870"
          width="15.055"
          height="16.543"
          x="263.573"
          y="131.457"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.4"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_54_7870"></feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_54_7870" result="shape"></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

export default ManagmentSvg
