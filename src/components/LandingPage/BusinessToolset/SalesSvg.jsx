'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

const SalesSvg = ({ salesHover, isDarkTheme }) => {
  const svgRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const part1 = svgRef.current.querySelector('.part1')
    const part2 = svgRef.current.querySelector('.part2')
    const part3 = svgRef.current.querySelector('.part3')
    const number = svgRef.current.querySelector('.number')

    timelineRef.current = gsap.timeline({ repeat: -1 })

    timelineRef.current.fromTo(
      part1,
      { drawSVG: '65% 65%' },
      { drawSVG: '65% 30%', duration: 1, ease: 'none' }
    )
    timelineRef.current.fromTo(part2, { opacity: 0 }, { opacity: 1, duration: 0.01, ease: 'none' })
    timelineRef.current.fromTo(
      part2,
      { drawSVG: '30% 30%' },
      { drawSVG: '30% 10%', duration: 1, ease: 'none' }
    )
    timelineRef.current.fromTo(part3, { opacity: 0 }, { opacity: 1, duration: 0.01, ease: 'none' })
    timelineRef.current.fromTo(
      part3,
      { drawSVG: '10% 10%' },
      { drawSVG: '10% -20%', duration: 1, ease: 'none' }
    )
    timelineRef.current.to(
      { value: 0 }, // начальное значение
      {
        value: 80, // конечное значение
        duration: 3,
        ease: 'none',
        onUpdate: function () {
          number.textContent = Math.round(this.targets()[0].value) // обновляем текст внутри элемента
        },
      },
      0
    )

    timelineRef.current.progress(1)

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isDarkTheme])

  useEffect(() => {
    if (timelineRef.current) {
      salesHover ? timelineRef.current.restart() : timelineRef.current.pause()
    }
  }, [salesHover])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="223"
      height="222"
      fill="none"
      viewBox="0 0 223 222"
      ref={svgRef}
    >
      <circle cx="111" cy="111" r="75" stroke="#E9E9E9" strokeWidth="10" fill="none" />
      <circle
        className="part1"
        cx="111"
        cy="111"
        r="75"
        stroke="#16361B"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        className="part2"
        cx="111"
        cy="111"
        r="75"
        stroke="#24692E"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        className="part3"
        cx="111"
        cy="111"
        r="75"
        stroke="#3AB54B"
        strokeLinecap="round"
        strokeWidth="24"
        fill="none"
      />
      <text
        className="number"
        x="105"
        y="111"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fill={isDarkTheme ? '#fff' : '#000'}
      >
        0
      </text>
      <text
        x="130"
        y="111"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fill={isDarkTheme ? '#fff' : '#000'}
      >
        %
      </text>
    </svg>
  )
}

export default SalesSvg
