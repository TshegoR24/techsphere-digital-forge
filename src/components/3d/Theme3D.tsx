import { useState } from 'react'
import { ThreeScene } from './ThreeScene'
import { FloatingCards, sampleCards } from './FloatingCards'
import { ParticleField } from './ParticleField'
import { FloatingBox, FloatingSphere, FloatingTorus } from './AnimatedGeometry'

export type ThemeType = 'minimal' | 'cosmic' | 'tech' | 'nature' | 'abstract'

interface Theme3DProps {
  theme?: ThemeType
  className?: string
  height?: string
}

export const Theme3D = ({ 
  theme = 'minimal', 
  className = '',
  height = 'h-96'
}: Theme3DProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(theme)

  const getThemeConfig = (themeType: ThemeType) => {
    switch (themeType) {
      case 'minimal':
        return {
          environment: 'studio' as const,
          cameraPosition: [0, 0, 5] as [number, number, number],
          particles: { count: 100, speed: 0.05, spread: 10 }
        }
      case 'cosmic':
        return {
          environment: 'night' as const,
          cameraPosition: [0, 0, 8] as [number, number, number],
          particles: { count: 2000, speed: 0.2, spread: 20 }
        }
      case 'tech':
        return {
          environment: 'warehouse' as const,
          cameraPosition: [0, 0, 6] as [number, number, number],
          particles: { count: 500, speed: 0.15, spread: 15 }
        }
      case 'nature':
        return {
          environment: 'forest' as const,
          cameraPosition: [0, 0, 7] as [number, number, number],
          particles: { count: 300, speed: 0.1, spread: 12 }
        }
      case 'abstract':
        return {
          environment: 'apartment' as const,
          cameraPosition: [0, 0, 5] as [number, number, number],
          particles: { count: 800, speed: 0.12, spread: 18 }
        }
    }
  }

  const config = getThemeConfig(currentTheme)

  const renderThemeContent = () => {
    switch (currentTheme) {
      case 'minimal':
        return (
          <>
            <FloatingCards cards={sampleCards} />
            <ParticleField 
              count={config.particles.count}
              speed={config.particles.speed}
              spread={config.particles.spread}
            />
          </>
        )
      
      case 'cosmic':
        return (
          <>
            <FloatingSphere position={[-2, 0, 0]} color="#ff6b6b" />
            <FloatingSphere position={[2, 0, 0]} color="#4ecdc4" />
            <FloatingTorus position={[0, 0, 0]} color="#45b7d1" />
            <ParticleField 
              count={config.particles.count}
              speed={config.particles.speed}
              spread={config.particles.spread}
            />
          </>
        )
      
      case 'tech':
        return (
          <>
            <FloatingBox position={[-2, 0, 0]} color="#00b6ff" wireframe />
            <FloatingBox position={[2, 0, 0]} color="#ff6b6b" wireframe />
            <FloatingBox position={[0, 0, 0]} color="#2dd4bf" wireframe />
            <ParticleField 
              count={config.particles.count}
              speed={config.particles.speed}
              spread={config.particles.spread}
            />
          </>
        )
      
      case 'nature':
        return (
          <>
            <FloatingSphere position={[-2, 0, 0]} color="#2dd4bf" />
            <FloatingSphere position={[2, 0, 0]} color="#2dd4bf" />
            <FloatingSphere position={[0, 0, 0]} color="#2dd4bf" />
            <ParticleField 
              count={config.particles.count}
              speed={config.particles.speed}
              spread={config.particles.spread}
            />
          </>
        )
      
      case 'abstract':
        return (
          <>
            <FloatingTorus position={[-2, 0, 0]} color="#f59e42" />
            <FloatingTorus position={[2, 0, 0]} color="#f59e42" />
            <FloatingTorus position={[0, 0, 0]} color="#f59e42" />
            <ParticleField 
              count={config.particles.count}
              speed={config.particles.speed}
              spread={config.particles.spread}
            />
          </>
        )
    }
  }

  return (
    <div className={`w-full ${height} ${className}`}>
      <div className="mb-4 flex gap-2 flex-wrap">
        {(['minimal', 'cosmic', 'tech', 'nature', 'abstract'] as ThemeType[]).map((themeType) => (
          <button
            key={themeType}
            onClick={() => setCurrentTheme(themeType)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              currentTheme === themeType
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {themeType.charAt(0).toUpperCase() + themeType.slice(1)}
          </button>
        ))}
      </div>
      
      <ThreeScene
        environment={config.environment}
        cameraPosition={config.cameraPosition}
        className="rounded-lg overflow-hidden border"
      >
        {renderThemeContent()}
      </ThreeScene>
    </div>
  )
} 