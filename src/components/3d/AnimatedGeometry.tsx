import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Sphere, Torus, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

interface AnimatedGeometryProps {
  type: 'box' | 'sphere' | 'torus' | 'cylinder'
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
  color?: string
  wireframe?: boolean
  animate?: boolean
}

export const AnimatedGeometry = ({
  type,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  color = '#00b6ff',
  wireframe = false,
  animate = true
}: AnimatedGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current && animate) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  const geometryProps = {
    ref: meshRef,
    position,
    rotation,
    scale,
    wireframe
  }

  const renderGeometry = () => {
    switch (type) {
      case 'box':
        return <Box args={[1, 1, 1]} {...geometryProps} />
      case 'sphere':
        return <Sphere args={[0.5, 32, 32]} {...geometryProps} />
      case 'torus':
        return <Torus args={[0.5, 0.2, 16, 100]} {...geometryProps} />
      case 'cylinder':
        return <Cylinder args={[0.5, 0.5, 1, 32]} {...geometryProps} />
      default:
        return <Box args={[1, 1, 1]} {...geometryProps} />
    }
  }

  return (
    <mesh
      onPointerEnter={(e) => {
        if (meshRef.current) {
          meshRef.current.scale.setScalar(1.2)
        }
      }}
      onPointerLeave={(e) => {
        if (meshRef.current) {
          meshRef.current.scale.setScalar(1)
        }
      }}
    >
      {renderGeometry()}
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  )
}

// Specialized components for common use cases
export const FloatingBox = (props: Omit<AnimatedGeometryProps, 'type'>) => (
  <AnimatedGeometry type="box" {...props} />
)

export const FloatingSphere = (props: Omit<AnimatedGeometryProps, 'type'>) => (
  <AnimatedGeometry type="sphere" {...props} />
)

export const FloatingTorus = (props: Omit<AnimatedGeometryProps, 'type'>) => (
  <AnimatedGeometry type="torus" {...props} />
) 