# 3D Theme System

A comprehensive 3D theme system built with React Three Fiber, Three.js, and Framer Motion. This system provides interactive 3D experiences that can be easily integrated into your React applications.

## Features

- 🎨 **5 Pre-built Themes**: Minimal, Cosmic, Tech, Nature, and Abstract
- 🎯 **Interactive Elements**: Hover effects, animations, and user interactions
- 🌟 **Particle Systems**: Dynamic particle fields with customizable properties
- 📱 **Responsive Design**: Works seamlessly across all device sizes
- ⚡ **Performance Optimized**: Efficient rendering with React Three Fiber
- 🎭 **Customizable**: Easy to extend and modify for your specific needs

## Quick Start

### 1. Basic Usage

```tsx
import { Theme3D } from '@/components/3d/Theme3D'

function App() {
  return (
    <div>
      <Theme3D theme="cosmic" height="h-[500px]" />
    </div>
  )
}
```

### 2. Individual Components

```tsx
import { ThreeScene, FloatingCards, sampleCards } from '@/components/3d'

function MyComponent() {
  return (
    <ThreeScene environment="studio" cameraPosition={[0, 0, 8]}>
      <FloatingCards cards={sampleCards} />
    </ThreeScene>
  )
}
```

## Available Themes

### Minimal
- **Environment**: Studio lighting
- **Style**: Clean and simple
- **Best for**: Professional presentations, portfolios

### Cosmic
- **Environment**: Night sky
- **Style**: Space and stars
- **Best for**: Creative portfolios, space-themed content

### Tech
- **Environment**: Warehouse lighting
- **Style**: Futuristic and digital
- **Best for**: Technology companies, digital products

### Nature
- **Environment**: Forest lighting
- **Style**: Organic and natural
- **Best for**: Environmental content, wellness apps

### Abstract
- **Environment**: Apartment lighting
- **Style**: Artistic and creative
- **Best for**: Creative agencies, art portfolios

## Components

### Theme3D
The main component that provides a complete 3D theme experience.

```tsx
<Theme3D 
  theme="tech"           // Theme type
  height="h-[500px]"     // Height class
  className="custom"     // Additional CSS classes
/>
```

### ThreeScene
Base 3D scene wrapper with camera and environment controls.

```tsx
<ThreeScene
  environment="studio"           // Environment preset
  cameraPosition={[0, 0, 5]}    // Camera position
  enableOrbitControls={true}    // Enable mouse controls
  className="custom-scene"
>
  {/* Your 3D content */}
</ThreeScene>
```

### FloatingCards
Interactive 3D cards with HTML content overlay.

```tsx
const myCards = [
  {
    id: 1,
    title: "Feature 1",
    description: "Description here",
    position: [-2, 0, 0],
    rotation: [0, 0, 0],
    color: "#00b6ff"
  }
]

<FloatingCards cards={myCards} />
```

### ParticleField
Dynamic particle system for background effects.

```tsx
<ParticleField 
  count={1000}      // Number of particles
  size={0.02}       // Particle size
  speed={0.1}       // Animation speed
  spread={15}       // Distribution spread
  color="#ffffff"   // Particle color
/>
```

### AnimatedGeometry
Pre-built animated 3D shapes.

```tsx
// Available components
<FloatingBox position={[0, 0, 0]} color="#00b6ff" wireframe />
<FloatingSphere position={[0, 0, 0]} color="#ff6b6b" />
<FloatingTorus position={[0, 0, 0]} color="#2dd4bf" />

// Or use the generic component
<AnimatedGeometry 
  type="box"        // 'box' | 'sphere' | 'torus' | 'cylinder'
  position={[0, 0, 0]}
  rotation={[0, 0, 0]}
  scale={[1, 1, 1]}
  color="#00b6ff"
  wireframe={false}
  animate={true}
/>
```

## Environment Presets

The system supports various environment presets from Three.js:

- `studio` - Clean studio lighting
- `apartment` - Warm indoor lighting
- `warehouse` - Industrial lighting
- `forest` - Natural outdoor lighting
- `sunset` - Golden hour lighting
- `dawn` - Early morning lighting
- `night` - Dark night sky
- `city` - Urban lighting
- `park` - Park lighting
- `lobby` - Hotel lobby lighting

## Customization

### Creating Custom Themes

```tsx
import { ThreeScene, ParticleField, FloatingBox } from '@/components/3d'

function CustomTheme() {
  return (
    <ThreeScene environment="night" cameraPosition={[0, 0, 8]}>
      <FloatingBox position={[-2, 0, 0]} color="#ff6b6b" />
      <FloatingBox position={[2, 0, 0]} color="#4ecdc4" />
      <ParticleField count={2000} speed={0.2} spread={20} />
    </ThreeScene>
  )
}
```

### Custom Particle Colors

```tsx
<ParticleField 
  count={1000}
  color="#ff6b6b"  // Single color
  // Or use vertex colors for multi-colored particles
/>
```

### Custom Card Data

```tsx
const customCards = [
  {
    id: 1,
    title: "Your Title",
    description: "Your description",
    position: [x, y, z] as [number, number, number],
    rotation: [x, y, z] as [number, number, number],
    color: "#your-color"
  }
]
```

## Performance Tips

1. **Limit Particle Count**: Keep particle counts reasonable (100-2000) for optimal performance
2. **Use Appropriate Environments**: Choose environments that match your theme
3. **Optimize Camera Position**: Position camera to minimize overdraw
4. **Lazy Load**: Load 3D components only when needed

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Dependencies

- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber
- `three` - 3D graphics library
- `framer-motion` - Animation library

## Examples

### Hero Section Integration

```tsx
import { Theme3D } from '@/components/3d/Theme3D'

function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <h1>Your Headline</h1>
        <p>Your description</p>
      </div>
      <div className="3d-content">
        <Theme3D theme="tech" height="h-[400px]" />
      </div>
    </section>
  )
}
```

### Background Effect

```tsx
import { ThreeScene, ParticleField } from '@/components/3d'

function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <ThreeScene environment="night" enableOrbitControls={false}>
        <ParticleField count={500} speed={0.05} spread={10} />
      </ThreeScene>
    </div>
  )
}
```

## Troubleshooting

### Common Issues

1. **Black Screen**: Check if Three.js is properly initialized
2. **Performance Issues**: Reduce particle count or geometry complexity
3. **Import Errors**: Ensure all dependencies are installed
4. **TypeScript Errors**: Check type definitions are properly imported

### Debug Mode

Enable debug mode to see performance metrics:

```tsx
<ThreeScene debug={true}>
  {/* Your content */}
</ThreeScene>
```

## Contributing

To add new themes or components:

1. Create your component in the `3d` folder
2. Export it from `index.ts`
3. Add documentation here
4. Test across different devices and browsers

## License

This 3D theme system is part of the TechSphere Digital Forge project. 