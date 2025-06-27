import { Theme3D } from '@/components/3d/Theme3D'
import { ThreeScene } from '@/components/3d/ThreeScene'
import { FloatingCards, sampleCards } from '@/components/3d/FloatingCards'
import { ParticleField } from '@/components/3d/ParticleField'
import { FloatingBox, FloatingSphere, FloatingTorus } from '@/components/3d/AnimatedGeometry'

const ThreeDDemo = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">
            3D Theme System
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Explore different 3D themes and effects for your application. 
            Each theme offers unique visual experiences with interactive elements.
          </p>
        </div>

        {/* Interactive Theme Switcher */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-6">
            Interactive Theme Switcher
          </h2>
          <Theme3D height="h-[500px]" />
        </div>

        {/* Individual Component Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Floating Cards */}
          <div className="bg-surface rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-text mb-4">
              Floating Cards
            </h3>
            <p className="text-muted mb-4">
              Interactive 3D cards with hover effects and HTML content overlay.
            </p>
            <div className="h-64">
              <ThreeScene environment="studio" cameraPosition={[0, 0, 8]}>
                <FloatingCards cards={sampleCards} />
              </ThreeScene>
            </div>
          </div>

          {/* Particle Field */}
          <div className="bg-surface rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-text mb-4">
              Particle Field
            </h3>
            <p className="text-muted mb-4">
              Dynamic particle system with customizable density and movement.
            </p>
            <div className="h-64">
              <ThreeScene environment="night" cameraPosition={[0, 0, 10]}>
                <ParticleField 
                  count={1500} 
                  speed={0.15} 
                  spread={15}
                />
              </ThreeScene>
            </div>
          </div>
        </div>

        {/* Animated Geometry */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-6">
            Animated 3D Geometry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-text mb-4">Floating Boxes</h3>
              <div className="h-48">
                <ThreeScene environment="warehouse" cameraPosition={[0, 0, 6]}>
                  <FloatingBox position={[-1, 0, 0]} color="#00b6ff" wireframe />
                  <FloatingBox position={[1, 0, 0]} color="#ff6b6b" wireframe />
                  <FloatingBox position={[0, 0, 0]} color="#2dd4bf" wireframe />
                </ThreeScene>
              </div>
            </div>

            <div className="bg-surface rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-text mb-4">Floating Spheres</h3>
              <div className="h-48">
                <ThreeScene environment="forest" cameraPosition={[0, 0, 6]}>
                  <FloatingSphere position={[-1, 0, 0]} color="#2dd4bf" />
                  <FloatingSphere position={[1, 0, 0]} color="#f59e42" />
                  <FloatingSphere position={[0, 0, 0]} color="#8b5cf6" />
                </ThreeScene>
              </div>
            </div>

            <div className="bg-surface rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-text mb-4">Floating Torus</h3>
              <div className="h-48">
                <ThreeScene environment="apartment" cameraPosition={[0, 0, 6]}>
                  <FloatingTorus position={[-1, 0, 0]} color="#f59e42" />
                  <FloatingTorus position={[1, 0, 0]} color="#ef4444" />
                  <FloatingTorus position={[0, 0, 0]} color="#10b981" />
                </ThreeScene>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-surface rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-text mb-6">
            How to Use 3D Themes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">Basic Usage</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Theme3D } from '@/components/3d/Theme3D'

// Simple theme with default settings
<Theme3D theme="cosmic" />

// Custom height and styling
<Theme3D 
  theme="tech" 
  height="h-[600px]"
  className="my-custom-class"
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text mb-4">Individual Components</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { ThreeScene } from '@/components/3d/ThreeScene'
import { FloatingCards } from '@/components/3d/FloatingCards'

<ThreeScene environment="studio">
  <FloatingCards cards={myCards} />
</ThreeScene>`}
              </pre>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-text mb-4">Available Themes</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['minimal', 'cosmic', 'tech', 'nature', 'abstract'].map((theme) => (
                <div key={theme} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-text capitalize">{theme}</div>
                  <div className="text-sm text-muted mt-1">
                    {theme === 'minimal' && 'Clean & Simple'}
                    {theme === 'cosmic' && 'Space & Stars'}
                    {theme === 'tech' && 'Futuristic & Digital'}
                    {theme === 'nature' && 'Organic & Natural'}
                    {theme === 'abstract' && 'Artistic & Creative'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeDDemo 