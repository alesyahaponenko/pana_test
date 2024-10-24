import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const headerAnimation = (headerRef, logoRef, logoPreLoadRef, logoPreLoadWrapRef, fill) => {
  const tl_header = gsap.timeline({ paused: true })
  const tl = gsap.timeline({
    paused: true,
  })
  const duration = 1.5
  const stagger = 0.2
  const ease = 'expo.inOut'

  new SplitText('.bigBanner', { type: 'lines', linesClass: 'split-line' })

  // First timeline (logo animation)
  // tl_header
  //   .to(logoPreLoadRef.current.querySelectorAll('.lit'), {
  //     opacity: 1,
  //     stagger: stagger,
  //     duration: duration,
  //     ease: ease,
  //   })
  //   .to(
  //     logoPreLoadRef.current.querySelectorAll('.lit'),
  //     {
  //       opacity: 0,
  //       stagger: stagger,
  //       duration: duration,
  //       ease: ease,
  //     },
  //     '<+=1'
  //   )
  //   .to(
  //     logoPreLoadRef.current.querySelector('.greenPoint'),
  //     {
  //       opacity: 1,
  //       duration: duration,
  //       ease: ease,
  //     },
  //     '<+=0.5'
  //   )
  //   .to(
  //     logoPreLoadRef.current.querySelectorAll('.lit'),
  //     {
  //       opacity: 1,
  //       stagger: stagger,
  //       duration: duration,
  //       ease: ease,
  //     },
  //     '<+=1'
  //   )
  //   .to(
  //     logoPreLoadRef.current.querySelectorAll('.lit'),
  //     {
  //       fill: '#3AB54B',
  //       stagger: stagger,
  //       duration: 0.04,
  //       ease: ease,
  //     },
  //     '<+=0.8'
  //   )
  //   .to(
  //     logoPreLoadRef.current.querySelectorAll('.lit'),
  //     {
  //       fill: fill,
  //       stagger: stagger,
  //       duration: 0.04,
  //       ease: ease,
  //     },
  //     '<+=0.4'
  //   )
  //   .to(
  //     logoPreLoadRef.current.querySelectorAll('.lit'),
  //     {
  //       opacity: 0,
  //       stagger: stagger,
  //       duration: duration,
  //       ease: ease,
  //       onComplete: () => tl.play(),
  //     },
  //     '<+=1'
  //   )
  //   .to(
  //     logoPreLoadRef.current.querySelector('.greenPoint'),
  //     {
  //       opacity: 0,
  //       duration: 1,
  //       ease: ease,
  //     },
  //     '<'
  //   )

  // Second timeline (content animation)
  tl.fromTo(
    headerRef.current,
    { height: '100vh' },
    {
      height: 'auto',
      duration: 1,
      ease: ease,

    }
  )
    .fromTo(
      '.smallBanner',
      { scale: 0 },
      {
        scale: 1,
        duration: 1.5,
        ease: 'expo.inOut',
      },
      '<+=0.4'
    )
    .to(
      '.bigBanner .split-line',
      {
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'expo.inOut',
      },
      '<'
    )
    .fromTo(
      '.dashboard',
      { scale: 0.3, y: 200 },
      {
        scale: 1,
        y: 0,
        duration: 2.5,
        ease: 'expo.inOut',
      },
      '<+=0.15'
    )

    .fromTo(
      '.totalUsersBlock',
      { x: 300 },
      {
        x: 0,
        duration: 1.5,
        ease: 'expo.inOut',
      },
      '<+=0.7'
    )
    .fromTo(
      '.bannerBlock',
      { scale: 0 },
      {
        scale: 1,
        duration: 1.5,
        ease: 'expo.inOut',
      },
      '<+=0.2'
    )
    .to(
      headerRef.current.querySelectorAll('.restHide'),
      {
        opacity: 1,
        stagger: stagger,
        duration: duration,
        ease: ease,
      },
      '<'
    )
    .to(
      logoRef.current.querySelector('.greenPoint'),
      {
        opacity: 1,
        duration: duration,
        ease: ease,
      },
      '<'
    )
    .to(
      logoRef.current.querySelectorAll('.lit'),
      {
        opacity: 1,
        stagger: stagger,
        duration: duration,
        ease: ease,
      },
      '<'
    )
    .to(
      '.liquidShader',
      {
        opacity: 1,
        duration: 1,
        ease: ease,
      },
      '<'
    )
    .to(logoPreLoadWrapRef.current, {
      autoAlpha: 0,
      duration: 0.1,
      onComplete: () => {
        setTimeout(() => {
          ScrollTrigger.sort()
          ScrollTrigger.refresh()
        }, 500)
      },
    })

  return { tl_header, tl }
}
