import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import Laptop from './Laptop'

const CanvasBlock = () => {
  const [position, setPosition] = useState([0, 0, 20])

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        setPosition([0, 0, 23])
      }
      if (window.matchMedia('(max-width: 567px)').matches) {
        setPosition([0, 0, 30])
      }
      if (window.matchMedia('(min-width: 1025px)').matches) {
        setPosition([0, 0, 15])
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="canvasWrapSection pointer-events-none fixed left-0 top-0 h-screen w-screen">
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Laptop />
          <Environment preset="city" />
        </Suspense>
        <PerspectiveCamera
          makeDefault
          far={1000}
          near={0.1}
          fov={40}
          rotation={[0, 0, 0]}
          position={position}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 15]} color="#fffffe" />
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      </Canvas>
    </div>
  )
}

export default CanvasBlock
