import { useGLTF, Html } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { a as three } from '@react-spring/three'
import StatsPromoCard from '../StatsPromoCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Laptop({ ...props }) {
  const group = useRef()
  const coverRef = useRef()
  const screenRef = useRef()
  const { nodes, materials } = useGLTF('/static/landing/3d/mac-draco.glb')

  useEffect(() => {
    if (group.current) {
      let mm = gsap.matchMedia()

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.emptyDiv',
          start: `top 30%`,
          end: '+=300%',
          scrub: 3,
          fastScrollEnd: true,
          // id: 'Laptop',
          // markers: {
          //   startColor: 'yellow',
          //   endColor: 'yellow',
          //   fontSize: '12px',
          //   fontWeight: 'bold',
          //   indent: 800,
          // },
        },
      })

      mm.add('(min-width: 568px)', () => {
        tl.fromTo(group.current.position, { y: -10 }, { y: -2, ease: 'none' })
        tl.to(group.current.position, { z: -2, ease: 'none' }, '<')
        tl.fromTo(coverRef.current.rotation, { x: 1.575 }, { x: 0, ease: 'none' }, '<+=0.5')
        tl.to(group.current.position, { z: 6, ease: 'none' })
        tl.to(group.current.position, { y: -3, ease: 'none' }, '<')
        tl.to(group.current.position, { y: -3, ease: 'none', duration: 2 })
        tl.to(group.current.position, { z: -2, ease: 'none' })
        tl.to(coverRef.current.rotation, { x: 1.575, ease: 'none', duration: 1 }, '<+=0.5')
        tl.to(group.current.position, { y: 14, ease: 'none', duration: 1.5 })
      })

      mm.add('(max-width: 567px)', () => {
        tl.fromTo(group.current.position, { y: -30 }, { y: -2, ease: 'none' })
        tl.to(group.current.position, { z: -10, ease: 'none' }, '<')
        tl.fromTo(coverRef.current.rotation, { x: 1.575 }, { x: 0, ease: 'none' }, '<+=0.5')
        tl.to(group.current.position, { z: 17, ease: 'none' })
        tl.to(group.current.position, { y: -3, ease: 'none' }, '<')
        tl.to(group.current.position, { y: -3, ease: 'none', duration: 2 })
        tl.to(group.current.position, { z: -2, ease: 'none' })
        tl.to(coverRef.current.rotation, { x: 1.575, ease: 'none', duration: 1 }, '<+=0.5')
        tl.to(group.current.position, { y: 14, ease: 'none', duration: 1.5 })
      })

      ScrollTrigger.sort()
      ScrollTrigger.refresh()

      return () => {
        tl.kill()
      }
    }
  }, [])

  return (
    <group ref={group} {...props} dispose={null} position={[0, -2, 0]}>
      <three.group ref={coverRef} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh ref={screenRef} geometry={nodes['Cube008_2'].geometry} material-color={'#000000'}>
            <Html
              occlude
              transform
              distanceFactor={3}
              className="content"
              rotation-x={-Math.PI / 2}
              position={[0, 0.04, -0.09]}
            >
              <div
                className="wrapper"
                onPointerDown={(e) => e.stopPropagation()}
                style={{
                  width: '1120px',
                  height: '720px',
                  overflow: 'hidden',
                  backgroundColor: 'black',
                  padding: '20px',
                }}
              >
                <StatsPromoCard />
              </div>
            </Html>
          </mesh>
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  )
}
