import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
  size?: number
  color?: string
  speed?: number
  spread?: number
}

export const ParticleField = ({ 
  count = 1000, 
  size = 0.02, 
  color = '#ffffff',
  speed = 0.1,
  spread = 15
}: ParticleFieldProps) => {
  const points = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread
      
      colors[i * 3] = Math.random()
      colors[i * 3 + 1] = Math.random()
      colors[i * 3 + 2] = Math.random()
    }
    
    return { positions, colors }
  }, [count, spread])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.1
      points.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.1
    }
  })

  return (
    <Points ref={points} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
} 