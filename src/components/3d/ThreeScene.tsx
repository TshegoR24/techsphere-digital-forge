import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

interface ThreeSceneProps {
  children: React.ReactNode
  cameraPosition?: [number, number, number]
  enableOrbitControls?: boolean
  environment?: 'sunset' | 'dawn' | 'night' | 'warehouse' | 'forest' | 'apartment' | 'studio' | 'city' | 'park' | 'lobby'
  className?: string
}

export const ThreeScene = ({ 
  children, 
  cameraPosition = [0, 0, 5], 
  enableOrbitControls = true,
  environment = 'studio',
  className = ''
}: ThreeSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <Environment preset={environment} />
        <Suspense fallback={null}>
          {children}
        </Suspense>
        {enableOrbitControls && (
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
        )}
      </Canvas>
    </div>
  )
} 