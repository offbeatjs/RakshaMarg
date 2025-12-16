import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Environment } from '@react-three/drei';
import { CityMap } from './3d/CityMap';
import { SceneController } from './3d/SceneController';
import { Suspense } from 'react';

export const Experience = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505] pointer-events-none">
      <Canvas
        // OPTIMIZATION 1: Disable Shadows (expensive calculation not needed for neon look)
        shadows={false}
        // OPTIMIZATION 2: Cap Pixel Ratio. 1.5 is enough for Retina screens.
        dpr={[1, 1.5]}
        // OPTIMIZATION 3: Disable native antialias (Post-processing handles smoothing)
        gl={{ 
          antialias: false, 
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        camera={{ fov: 35, near: 1, far: 200 }}
        // OPTIMIZATION 4: Performance monitoring to scale down if fps drops
        performance={{ min: 0.5 }}
      >
        {/* Suspense ensures the canvas doesn't crash the page while loading */}
        <Suspense fallback={null}>
          {/* Lighting */}
          <Environment preset="city" environmentIntensity={0.2} />
          <fog attach="fog" args={['#050505', 10, 50]} />
          <ambientLight intensity={0.2} color="#ffffff" />
          <pointLight position={[20, 20, 10]} intensity={1.5} color="#818cf8" />
          <pointLight position={[-20, 10, -10]} intensity={2} color="#2dd4bf" />

          {/* Content */}
          <CityMap />
          <SceneController />

          {/* OPTIMIZATION 5: Optimized Post Processing */}
          {/* multisampling={0} is CRITICAL for performance with Bloom */}
          <EffectComposer disableNormalPass multisampling={0}>
            <Bloom 
              luminanceThreshold={1.1} 
              mipmapBlur 
              intensity={0.8} 
              radius={0.6} 
              levels={4} // Reduce levels slightly for speed
            />
            <Vignette eskil={false} offset={0.1} darkness={0.6} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};