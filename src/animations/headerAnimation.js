import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export const headerAnimation = (
  headerRef,
  logoRef,
  logoPreLoadRef,
  logoPreLoadWrapRef,
  fill,
  onComplete
) => {
  const tl = gsap.timeline()
  const duration = 1.5
  const stagger = 0.2
  const ease = 'expo.inOut'

  new SplitText('.bigBanner', { type: 'lines', linesClass: 'split-line' })

  tl.to(logoPreLoadRef.current.querySelectorAll('.lit'), {
    opacity: 1,
    stagger: stagger,
    duration: duration,
    ease: ease,
  })
  tl.to(
    logoPreLoadRef.current.querySelectorAll('.lit'),
    {
      opacity: 0,
      stagger: stagger,
      duration: duration,
      ease: ease,
    },
    '<+=1'
  )
  tl.to(
    logoPreLoadRef.current.querySelector('.greenPoint'),
    {
      opacity: 1,
      duration: duration,
      ease: ease,
    },
    '<+=0.5'
  )
  tl.to(
    logoPreLoadRef.current.querySelectorAll('.lit'),
    {
      opacity: 1,
      stagger: stagger,
      duration: duration,
      ease: ease,
    },
    '<+=1'
  )
  tl.to(
    logoPreLoadRef.current.querySelectorAll('.lit'),
    {
      fill: '#3AB54B',
      stagger: stagger,
      duration: 1,
      duration: 0.04,
      ease: ease,
    },
    '<+=0.8'
  )
  tl.to(
    logoPreLoadRef.current.querySelectorAll('.lit'),
    {
      fill: fill,
      stagger: stagger,
      duration: 1,
      duration: 0.04,
      ease: ease,
    },
    '<+=0.4'
  )
  tl.to(
    logoPreLoadRef.current.querySelectorAll('.lit'),
    {
      opacity: 0,
      stagger: stagger,
      duration: duration,
      ease: ease,
    },
    '<+=1'
  )
  tl.to(
    logoPreLoadRef.current.querySelector('.greenPoint'),
    {
      opacity: 0,
      duration: duration,
      ease: ease,
    },
    '<+=1'
  )

  tl.fromTo(
    headerRef.current,
    { height: '100vh' },
    {
      height: 'auto',
      duration: 2,
      ease: ease,
    }
  )
  tl.fromTo(
    '.smallBanner',
    { scale: 0 },
    {
      scale: 1,
      duration: 1.5,
      ease: 'expo.inOut',
    },
    '<+=0.4'
  )
  tl.to(
    '.bigBanner .split-line',
    {
      y: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: 'expo.inOut',
    },
    '<'
  )
  tl.fromTo(
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
  tl.fromTo(
    '.totalUsersBlock',
    {
      x: 300,
    },
    {
      x: 0,
      duration: 1.5,
      ease: 'expo.inOut',
    },
    '<+=0.7'
  )
  tl.fromTo(
    '.bannerBlock',
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1.5,
      ease: 'expo.inOut',
    },
    '<+=0.2'
  )
  tl.to(
    headerRef.current.querySelectorAll('.restHide'),
    {
      opacity: 1,
      stagger: stagger,
      duration: duration,
      ease: ease,
    },
    '<'
  )
  tl.to(
    logoRef.current.querySelector('.greenPoint'),
    {
      opacity: 1,
      duration: duration,
      ease: ease,
    },
    '<'
  )
  tl.to(
    logoRef.current.querySelectorAll('.lit'),
    {
      opacity: 1,
      stagger: stagger,
      duration: duration,
      ease: ease,
    },
    '<'
  )
  tl.to(logoPreLoadWrapRef.current, {
    autoAlpha: 0,
    duration: 0.1,
    onComplete: () => {
      if (onComplete) onComplete()
    },
  })

  return tl
}
