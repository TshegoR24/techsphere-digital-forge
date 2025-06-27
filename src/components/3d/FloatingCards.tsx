import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Box, Html } from '@react-three/drei'
import * as THREE from 'three'

export interface Card {
  id: number
  title: string
  description: string
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
}

interface FloatingCardsProps {
  cards: Card[]
}

export const FloatingCards = ({ cards }: FloatingCardsProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {cards.map((card, index) => (
        <group
          key={card.id}
          position={card.position}
          rotation={card.rotation}
          onPointerEnter={() => setHoveredCard(card.id)}
          onPointerLeave={() => setHoveredCard(null)}
        >
          <Box args={[2, 3, 0.1]}>
            <meshStandardMaterial 
              color={card.color} 
              transparent 
              opacity={hoveredCard === card.id ? 0.9 : 0.7}
            />
          </Box>
          
          <Html
            position={[0, 0, 0.06]}
            center
            distanceFactor={15}
            occlude
          >
            <div className="text-center p-2 text-white">
              <h3 className="font-bold text-sm mb-1">{card.title}</h3>
              <p className="text-xs opacity-80">{card.description}</p>
            </div>
          </Html>
        </group>
      ))}
    </group>
  )
}

// Example usage data
export const sampleCards: Card[] = [
  {
    id: 1,
    title: "React",
    description: "Modern UI library",
    position: [-3, 0, 0],
    rotation: [0, 0, 0],
    color: "#61dafb"
  },
  {
    id: 2,
    title: "Three.js",
    description: "3D graphics library",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    color: "#ff6b6b"
  },
  {
    id: 3,
    title: "TypeScript",
    description: "Type-safe JavaScript",
    position: [3, 0, 0],
    rotation: [0, 0, 0],
    color: "#3178c6"
  }
] 