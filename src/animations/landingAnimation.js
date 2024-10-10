import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import '@/css/splitText.css'

gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin)

export const landingAnimation = (bannerRef) => {
  const banert1 = gsap.timeline({})
  const banert2 = gsap.timeline({})

  ScrollTrigger.create({
    trigger: '.bannerSection',
    start: `top top`,
    end: () => (window.innerWidth > 1024 ? '+=80%' : '+=40%'),
    scrub: 3,
    animation: banert1,
    fastScrollEnd: true,
    // markers: true,
  })

  banert1.fromTo(
    '.smallBanner',
    { scale: 1 },
    {
      scale: 0,
      blur: 0,
      duration: 1.5,
      ease: 'expo.inOut',
    },
    0
  )
  banert1.to(
    '.bigBanner .split-line .split-line',
    {
      y: 150,
      blur: '(20px)',
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: 'expo.inOut',
    },
    '<'
  )
  banert1.to(
    '.bigBanner .split-char',
    { x: 20, opacity: 0, filter: 'blur(20px)', stagger: 0.01, ease: 'expo.inOut', duration: 1 },
    0
  )
  banert1.to(
    '.smallBanner',
    { opacity: 0, filter: 'blur(20px)', ease: 'expo.inOut', duration: 1 },
    0
  )
  banert1.to(
    '.totalUsersBlock',
    {
      'will-change': 'transform',
      left: '26%',
      top: '14.8%',
      rotation: 0,
      ease: 'none',
      duration: 1,
    },
    0
  )
  banert1.to(
    '.bannerBlock',
    {
      'will-change': 'transform',
      left: '26%',
      top: '58%',
      rotation: 0,
      ease: 'none',
      duration: 1,
    },
    0.2
  )
  banert1.to(
    '.analyticsBlock',
    {
      'will-change': 'transform',
      left: '68.5%',
      top: '58%',
      rotation: 0,
      ease: 'none',
      duration: 1,
    },
    0.4
  )

  ScrollTrigger.create({
    trigger: '.dashboardPin',
    start: `top 50%`,
    end: '+=50%',
    // pin: true,
    // anticipatePin: true,
    // pinSpacing: false,
    scrub: 3,
    animation: banert2,
    fastScrollEnd: true,
    // id: 'dashboardPin',
    // markers: {
    //   startColor: 'red',
    //   endColor: 'red',
    //   fontSize: '12px',
    //   fontWeight: 'bold',
    //   indent: 1200,
    // },
  })

  const lines = {
    solidGreenLine: document.querySelector('.solidGreenLine'),
    grayLine: document.querySelector('.grayLine'),
    dottedGreenLine: document.querySelector('.dottedGreenLine'),
    dottedLineMask: document.querySelector('#dottedLineMask path'),
  }

  Object.entries(lines).forEach(([key, line]) => {
    const length = line.getTotalLength()
    gsap.set(line, {
      strokeDasharray: key === 'dottedGreenLine' ? '3.15 10.51' : length,
      strokeDashoffset: key === 'dottedLineMask' ? -length : length,
      opacity: key === 'dottedGreenLine' ? 0 : 1,
    })
  })

  banert2
    .to([lines.solidGreenLine, lines.dottedGreenLine], { opacity: 1, duration: 0.1 })
    .to(lines.solidGreenLine, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'none',
    })
    .to(lines.dottedLineMask, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'none',
    })
    .to(
      lines.grayLine,
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'none',
      },
      0.5
    )

  const grayLine = lines.grayLine

  banert2.to(
    [
      bannerRef.current.querySelector('.tableGr_circle'),
      bannerRef.current.querySelector('.tableGr'),
    ],
    { opacity: 1, duration: 0.01 },
    0.4
  )

  banert2
    .to(
      bannerRef.current.querySelector('.tableGr_circle'),
      {
        motionPath: {
          path: grayLine,
          align: grayLine,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 0.385,
        },
        duration: 1,
        ease: 'none',
      },
      0.5
    )
    .fromTo(
      bannerRef.current.querySelector('.tableGr'),
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        duration: 1,
      },
      '<+=1'
    )
    .fromTo(
      bannerRef.current.querySelector('.tableNum'),
      { y: -10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'none',
        duration: 1,
      },
      '<+=0.5'
    )

  // BusinessToolset Animation

  const header = document.querySelector('.btHeader')
  const btHeader = new SplitText(header, { type: 'lines', linesClass: 'split-line' })

  btHeader.lines.forEach((line) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('line-wrapper')
    line.parentNode.insertBefore(wrapper, line)
    wrapper.appendChild(line)
  })

  const btlt1 = gsap.timeline({})
  const btlt2 = gsap.timeline({})

  ScrollTrigger.create({
    trigger: '.btHeader',
    start: 'top 90%',
    end: '+=30%',
    scrub: 3,
    animation: btlt1,
    fastScrollEnd: true,
  })

  btlt1.fromTo(
    btHeader.lines,
    {
      'will-change': 'transform',
      y: 200,
    },
    {
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'expo.out',
    }
  )

  const btltArr = document.querySelectorAll('.blurInOut')
  const animTitles = gsap.utils.toArray('.animTitle')

  animTitles.forEach((el) => {
    gsap.fromTo(
      el,
      {
        'will-change': 'opacity, transform',
        opacity: 0,
        y: 40,
      },
      {
        ease: 'expo.out',
        y: 0,
        opacity: 1,
        stagger: { each: 0.06, from: 'start' },
        scrollTrigger: {
          trigger: el,
          start: `top 90%`,
          end: `+=30%`,
          scrub: 3,
          fastScrollEnd: true,
        },
      }
    )
  }, [])

  btltArr.forEach((el) => {
    btlt2.fromTo(
      el,
      {
        'will-change': 'opacity, transform',
        opacity: 0,
        filter: 'blur(20px)',
        y: 140,
        scaleY: 2,
      },
      {
        ease: 'expo.out',
        y: 0,
        scaleY: 1,
        opacity: 1,
        filter: 'blur(0px)',
        stagger: { each: 0.06, from: 'start' },
        scrollTrigger: {
          trigger: el,
          start: `top 90%`,
          end: `+=30%`,
          scrub: 3,
          fastScrollEnd: true,
        },
      }
    )
  }, [])

  // B2BBC Animation

  const b2bcHeader = document.querySelector('.b2bcHeader')
  const b2bcHeaderSplit = new SplitText(b2bcHeader, { type: 'lines', linesClass: 'split-line' })

  b2bcHeaderSplit.lines.forEach((line) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('line-wrapper')
    line.parentNode.insertBefore(wrapper, line)
    wrapper.appendChild(line)
  })

  gsap.fromTo(
    b2bcHeaderSplit.lines,
    {
      'will-change': 'transform',
      yPercent: 100,
    },
    {
      ease: 'expo.out',
      yPercent: 0,
      stagger: { each: 0.06, from: 'start' },
      scrollTrigger: {
        trigger: b2bcHeader,
        start: `top 80%`,
        end: `+=30%`,
        scrub: 3,
        fastScrollEnd: true,
      },
    }
  )

  const b2bctl = gsap.timeline()

  let mm = gsap.matchMedia()

  mm.add('(min-width: 568px)', () => {
    ScrollTrigger.create({
      trigger: '.cardsOrders',
      start: `top bottom-=${window.innerHeight * 0.1}`,
      end: '+=30%',
      animation: b2bctl,
      scrub: 3,
    })

    b2bctl.fromTo(
      ['.order-1', '.order-2', '.order-3'],
      { 'will-change': 'transform', scale: 0.8, yPercent: 20 },
      {
        yPercent: 0,
        scale: 1,
        duration: 1,
        ease: 'none',
      }
    )
    b2bctl.fromTo(
      '.order-1 > div >div',
      { 'will-change': 'transform', scale: 0.5, opacity: 0, yPercent: 20 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'none',
      },
      '<+=0.2'
    )
    b2bctl.fromTo(
      '.order-2 > p',
      { 'will-change': 'transform', scale: 0.5, opacity: 0, yPercent: 20 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'none',
      },
      '<'
    )
    b2bctl.fromTo(
      '.order-3 > div',
      { 'will-change': 'transform', scale: 0.5, opacity: 0, yPercent: 20 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'none',
      },
      '<'
    )
  })

  mm.add('(max-width: 567px)', () => {
    const cards = ['.order-1', '.order-2', '.order-3', '.order-4', '.order-5', '.order-6']

    cards.forEach((cardSelector) => {
      const cardElement = document.querySelector(cardSelector)

      if (!cardElement) return

      gsap.fromTo(
        cardElement,
        {
          'will-change': 'transform, opacity',
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardElement,
            start: 'top 80%',
            end: '+=30%',
            scrub: true,
          },
        }
      )

      // const innerElements = cardElement.querySelectorAll('div, p')
      // if (innerElements.length > 0) {
      //   gsap.fromTo(
      //     innerElements,
      //     {
      //       y: 20,
      //       opacity: 0,
      //       scale: 0.5,
      //     },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       scale: 1,
      //       duration: 0.5,
      //       stagger: 0.1,
      //       ease: 'power2.out',
      //       scrollTrigger: {
      //         trigger: cardElement,
      //         start: 'top 80%',
      //       },
      //     }
      //   )
      // }
    })
  })

  const b2bctl2 = gsap.timeline()

  let mm2 = gsap.matchMedia()

  // mm2.add('(max-width: 567px)', () => {
  //   const cardsOrders = document.querySelector('.cardsOrders')
  //   const cards = ['.order-4', '.order-5', '.order-6']

  //   // if (!cardsOrders) {
  //   //   console.warn('Element .cardsOrders not found')
  //   //   return
  //   // }

  //   let b2bctl2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.cardsOrders',
  //       start: `top bottom-=${1.3 * window.innerHeight}`,
  //       end: '+=100%',
  //       scrub: 3,
  //     },
  //   })

  //   cards.forEach((cardSelector, index) => {
  //     const cardElement = document.querySelector(cardSelector)
  //     if (!cardElement) {
  //       console.warn(`Element ${cardSelector} not found`)
  //       return
  //     }

  //     const prevCardsHeight =
  //       index === 0
  //         ? 0
  //         : Array.from(cards.slice(0, index)).reduce((sum, prevCardSelector) => {
  //           const prevCard = document.querySelector(prevCardSelector)
  //           return sum + (prevCard ? prevCard.offsetHeight : 0)
  //         }, 0)

  //     b2bctl2.fromTo(
  //       cardElement,
  //       {
  //         'will-change': 'transform',
  //         y: () => cardsOrders.offsetHeight + prevCardsHeight,
  //         opacity: 0,
  //         scale: 0.8,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         scale: 1,
  //         duration: 1,
  //         ease: 'power2.out',
  //       },
  //       index * 0.2
  //     )

  //     const innerElements = cardElement.querySelectorAll('p, div, *')
  //     if (innerElements.length > 0) {
  //       b2bctl2.fromTo(
  //         innerElements,
  //         {
  //           'will-change': 'transform',
  //           y: 20,
  //           opacity: 0,
  //           scale: 0.5,
  //         },
  //         {
  //           y: 0,
  //           opacity: 1,
  //           scale: 1,
  //           duration: 0.5,
  //           stagger: 0.1,
  //           ease: 'power2.out',
  //         },
  //         `-=${0.7}`
  //       )
  //     }
  //   })
  // })

  mm2.add('(min-width: 568px)', () => {
    ScrollTrigger.create({
      trigger: '.cardsOrders',
      start: 'top 50%',
      end: '+=30%',
      animation: b2bctl2,
      scrub: 3,
    })

    b2bctl2.fromTo(
      ['.order-4', '.order-5', '.order-6'],
      { 'will-change': 'transform', scale: 0.8, yPercent: 20 },
      {
        yPercent: 0,
        scale: 1,
        duration: 0.5,
        ease: 'none',
      }
    )
    b2bctl2.fromTo(
      '.order-4 > p',
      { 'will-change': 'transform', scale: 0.5, opacity: 0, yPercent: 20 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'none',
      },
      '<+=0.2'
    )
    b2bctl2.fromTo(
      '.order-5 > div',
      { 'will-change': 'transform', scale: 0.5, opacity: 0, yPercent: 20 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'none',
      },
      '<'
    )
    b2bctl2.fromTo(
      '.order-6 > *',
      { 'will-change': 'transform', scale: 0.5, opacity: 0, yPercent: 20 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'none',
      },
      '<'
    )
  })

  ///PANA LOGO
  const panaTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.bigLogoSection',
      start: 'top 70%',
      end: '+=80%',
      scrub: 3,
      // fastScrollEnd: true,
    },
  })
  panaTl.fromTo(
    '.bigLogoSectionSvg .litAnim:nth-child(-n+4)',
    {
      'will-change': 'transform',
      yPercent: 150,
    },
    {
      yPercent: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'expo.out',
    }
  )
  panaTl.fromTo(
    '.bigLogoSectionSvg .litAnim:last-child',
    {
      'will-change': 'transform',
      yPercent: 400,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'expo.out',
    },
    '<+=0.5'
  )
  panaTl.fromTo(
    '.bigLogoSectionLaptop',
    {
      'will-change': 'transform',
      yPercent: 150,
      scale: 0,
    },
    {
      yPercent: () => {
        if (window.innerWidth > 1024) {
          return 0
        }
        if (window.innerWidth < 1025 && window.innerWidth > 576) {
          return -50
        }
        if (window.innerWidth < 577) {
          return 10
        }
      },
      scale: 1,
      duration: 1.5,
      ease: 'expo.out',
    },
    '<-=0.2'
  )

  const statsPromoCardTitle = document.querySelector('.statsPromoCardTitle')
  let statsPromotl = gsap.timeline()
  if (statsPromoCardTitle) {
    const StatsPromoCardTitleAnim = new SplitText(statsPromoCardTitle, {
      type: 'lines',
      linesClass: 'split-line',
    })

    StatsPromoCardTitleAnim.lines.forEach((line) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('line-wrapper')
      line.parentNode.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    statsPromotl = gsap.timeline({
      scrollTrigger: {
        trigger: '.statsPromoCard',
        start: 'top 80%',
        end: '+=50%',
        scrub: 3,
        // fastScrollEnd: true,
      },
    })

    statsPromotl.fromTo(
      StatsPromoCardTitleAnim.lines,
      {
        'will-change': 'transform',
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'expo.out',
      }
    )
  }

  const llmText = document.querySelector('.llmText')
  const llmTitle = document.querySelector('.llmTitle')

  const llmTitleAnim = new SplitText(llmTitle, {
    type: 'lines',
    linesClass: 'split-line',
  })

  llmTitleAnim.lines.forEach((line) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('line-wrapper')
    line.parentNode.insertBefore(wrapper, line)
    wrapper.appendChild(line)
  })

  const llmTextAnim = new SplitText(llmText, {
    type: 'lines',
    linesClass: 'split-line',
  })

  llmTextAnim.lines.forEach((line) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('line-wrapper')
    line.parentNode.insertBefore(wrapper, line)
    wrapper.appendChild(line)
  })

  let llmTitleTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.llmTextWrap',
      start: 'top 80%',
      end: '+=30%',
      scrub: 3,
      // fastScrollEnd: true,
    },
  })

  llmTitleTl.fromTo(
    llmTitleAnim.lines,
    {
      'will-change': 'transform',
      y: 150,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'expo.out',
    }
  )

  let llmTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.llmTextWrap',
      start: 'top 60%',
      end: '+=30%',
      scrub: 3,
      // fastScrollEnd: true,
    },
  })

  llmTl.fromTo(
    llmTextAnim.lines,
    {
      'will-change': 'transform',
      y: 150,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'expo.out',
    }
  )

  //let statsPromoMedia = gsap.matchMedia()
  let greenButtonTl = gsap.timeline()
  let statsImageTl = gsap.timeline()
  let llmImageTl = gsap.timeline()

  // statsPromoMedia.add('(min-width: 1024px)', () => {
  greenButtonTl.fromTo(
    '.greenButton',
    {
      'will-change': 'transform',
      y: 150,
      opacity: 0,
      filter: 'blur(20px)',
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.greenButtonWrap',
        start: 'top 85%',
        end: '+=30%',
        scrub: 3,
        // fastScrollEnd: true,
      },
    }
  )
  statsImageTl.fromTo(
    '.statsImage',
    {
      'will-change': 'transform',
      y: 150,
      opacity: 0,
      scale: 0.5,
      filter: 'blur(20px)',
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.statsPromoCard',
        start: 'top 60%',
        end: '+=30%',
        scrub: 3,
        // fastScrollEnd: true,
      },
    }
  )
  llmImageTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.llmImageWrap',
      start: 'top 85%',
      end: '+=30%',
      scrub: 3,
      // fastScrollEnd: true,
    },
  })
  llmImageTl.fromTo(
    '.llmImage',
    {
      'will-change': 'transform',
      y: 150,
      scale: 0.5,
      opacity: 0,
      filter: 'blur(20px)',
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'expo.out',
    }
  )
  llmImageTl.to('.blurDiv ', {
    opacity: 0,
    duration: 1,
    ease: 'expo.out',
  })
  // }) // statsPromoMedia end

  // const bigLogotl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.emptyDiv',
  //     start: `top bottom`,
  //     end: '+=200%',
  //     scrub: 3,
  //     fastScrollEnd: true,
  //     // id: 'pana',
  //     // markers: {
  //     //   startColor: 'white',
  //     //   endColor: 'white',
  //     //   fontSize: '12px',
  //     //   fontWeight: 'bold',
  //     //   indent: 1200,
  //     // },
  //   },
  // })

  // bigLogotl.fromTo(
  //   '.litAnim',
  //   {
  //     'will-change': 'transform',
  //     yPercent: 150,
  //   },
  //   {
  //     yPercent: 0,
  //     opacity: 1,
  //     stagger: 0.3,
  //     duration: 3,
  //     ease: 'power2.inOut',
  //   }
  // )
  // bigLogotl.to('.greenPoint', {
  //   opacity: 1,
  //   duration: 0.3,
  //   ease: 'none',
  // })
  // bigLogotl.to(
  //   '.litAnim',
  //   {
  //     opacity: 0.5,
  //     stagger: 0.3,
  //     duration: 1,
  //     ease: 'none',
  //   },
  //   '+=1'
  // )

  // const promoCardtl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.emptyDiv',
  //     start: `top top+=-${0.5 * window.innerHeight}`,
  //     end: '+=100%',
  //     scrub: 3,
  //     fastScrollEnd: true,
  //     // id: 'PROMO',
  //     // markers: {
  //     //   startColor: 'red',
  //     //   endColor: 'red',
  //     //   fontSize: '12px',
  //     //   fontWeight: 'bold',
  //     //   // indent: 1200,
  //     // },
  //   },
  // })

  // promoCardtl.fromTo(
  //   '.statsPromoCard',
  //   {
  //     y: () => 0,
  //   },
  //   {
  //     y: () => -window.innerHeight,
  //     ease: 'none',
  //   }
  // )

  // const promoCardAfterTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.emptyDiv',
  //     start: `bottom bottom-=${-2 * window.innerHeight}`,
  //     scrub: 3,
  //     fastScrollEnd: true,
  //     // id: 'After',
  //     // markers: {
  //     //   startColor: 'green',
  //     //   endColor: 'green',
  //     //   fontSize: '12px',
  //     //   fontWeight: 'bold',
  //     //   indent: 1200,
  //     // },
  //   },
  // })

  // promoCardAfterTl.to('.bigLogoSection', {
  //   zIndex: -1,
  //   duration: 0.3,
  //   ease: 'none',
  // })
  // promoCardAfterTl.to(
  //   '.litAnim',
  //   {
  //     opacity: 0,
  //     stagger: 0.3,
  //     duration: 1,
  //     ease: 'none',
  //   },
  //   '<'
  // )
  // promoCardAfterTl.to(
  //   '.greenPoint',
  //   {
  //     opacity: 0,
  //     duration: 0.3,
  //     ease: 'none',
  //   },
  //   '<'
  // )
  // bigLogotl.to(
  //   '.blurDiv',
  //   {
  //     autoAlpha: 0,
  //     duration: 1,
  //     ease: 'none',
  //   },
  //   '<'
  // )
  // bigLogotl.to(
  //   '.litAnim',
  //   {
  //     opacity: 1,
  //     duration: 1,
  //     ease: 'none',
  //   },
  //   '<'
  // )
  // bigLogotl.to(
  //   '.lit',
  //   {
  //     opacity: 1,
  //     duration: 1,
  //     ease: 'none',
  //   },
  //   '<'
  // )

  const mainTimeline = gsap.timeline()
  mainTimeline
    .add(banert1)
    .add(banert2)
    .add(btlt1)
    .add(btlt2)
    .add(b2bctl)
    .add(b2bctl2)
    .add(statsPromotl)
    .add(llmTextAnim)
    .add(llmTitleTl)
    .add(llmTl)
    .add(statsImageTl)
    .add(llmImageTl)
    .add(greenButtonTl)
  // .add(bigLogotl)
  // .add(promoCardtl)
  // .add(promoCardAfterTl)

  return { mainTimeline }
}
