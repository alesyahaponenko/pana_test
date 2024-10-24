import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useThemeHandler } from '@/hooks/useThemeHandler'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  uniform bool isDarkTheme;
  varying vec2 vUv;

   float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed)
  {
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
    
    return clamp(
        (0.35 + 0.15 * sin(cosAngle * seedA + time * speed)) +
        (0.3 + 0.2 * cos(-cosAngle * seedB + time * speed)),
        0.0, 1.0) *
        clamp((resolution.y - length(sourceToCoord)) / resolution.y, 0.0, 1.0);
  }

  vec3 getGreenShade(float index, float totalShades) {
    float hue = 0.25 + (index / totalShades) * 0.15;
    vec3 rgb = clamp(abs(mod(hue * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return rgb;
  }

  void main() {
    vec2 coord = vUv * resolution;
    vec3 finalColor = vec3(0.0);
    
    const int RAY_COUNT = 20;
    const float TOTAL_SHADES = float(RAY_COUNT);

    for (int i = 0; i < RAY_COUNT; i++) {
      float fi = float(i);
      float timeScale = 0.2 + fi * 0.02;
      vec2 rayPos = vec2(
        resolution.x * (0.3 + 0.5 * (fi / TOTAL_SHADES) + 0.1 * sin(time * timeScale + fi)),
        -resolution.y * 0.25
      );
      
      vec2 rayRefDir = normalize(vec2(
        sin(time * (0.1 + fi * 0.01) + fi) * 0.2,
        1.0
      ));
      
      float raySeedA = 12.9898 + fi * 4.1414;
      float raySeedB = 78.233 + fi * 2.7183;
      float raySpeed = 0.1 + 0.02 * fi + 0.05 * sin(time * (0.1 + fi * 0.01));
      
      vec3 rayColor = getGreenShade(fi, TOTAL_SHADES);
      float ray = rayStrength(rayPos, rayRefDir, coord, raySeedA, raySeedB, raySpeed);
      
      float intensity = 0.5 + 0.1 * sin(time * (0.2 + fi * 0.03) + fi);
      float alpha = 0.01 + 0.5 * (1.0 - fi / TOTAL_SHADES); 
      
      finalColor += rayColor * ray * intensity * alpha;
    }
    
    float brightness = 1.0 - (coord.y / resolution.y);
    brightness = pow(brightness, 1.8);
    finalColor *= brightness;
    
    finalColor = pow(finalColor * 2.0, vec3(1.5));

    // Add theme-dependent background color with slight animation
    vec3 backgroundColor = isDarkTheme ? 
      vec3(0.05, 0.07, 0.1) + vec3(0.02) * sin(time * 0.1) : // Dark theme
      vec3(0.95, 0.95, 0.95) + vec3(0.02) * sin(time * 0.1); // Light theme
    
    finalColor += backgroundColor;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

function NoiseAnimation({ isDarkTheme }) {
  const meshRef = useRef()
  const greenIntensityRef = useRef()
  const clockRef = useRef({ getElapsedTime: () => performance.now() / 1000 })
  const { size } = useThree()

  useEffect(() => {
    gsap.fromTo(
      greenIntensityRef,
      { current: 0.5 },
      {
        current: 0,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'header',
          start: 'top 1px',
          scrub: 3,
        },
      }
    )
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      const time = clockRef.current.getElapsedTime()
      meshRef.current.material.uniforms.time.value = time
      meshRef.current.material.uniforms.resolution.value = [size.width, size.height]
      meshRef.current.material.uniforms.isDarkTheme.value = isDarkTheme
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[30, 30]} position={[0, 0, 0]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          greenIntensity: { value: greenIntensityRef.current },
          resolution: { value: [size.width, size.height] },
          isDarkTheme: { value: isDarkTheme },
        }}
      />
    </mesh>
  )
}

export default function LiquidShader() {
  const { resolvedTheme } = useThemeHandler()
  const isDarkTheme = resolvedTheme === 'dark'

  return (
    <div className="liquidShader fixed left-0 top-0 -z-[1] h-screen w-screen">
      <Canvas gl={{ alpha: true, antialias: true }}>
        <NoiseAnimation isDarkTheme={isDarkTheme} />
      </Canvas>
    </div>
  )
}
