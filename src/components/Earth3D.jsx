import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

function EarthModel() {
  const earth = useGLTF('/planet/scene.gltf');

  return (
    <primitive 
      object={earth.scene} 
      scale={2.65} 
      position-y={0} 
      rotation-y={0} 
    />
  );
}

useGLTF.preload('/planet/scene.gltf');

function CanvasFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.25} />
    </mesh>
  );
}

export default function Earth3D() {
  return (
    <div className="contact-earth-3d-wrapper" aria-label="Interactive 3D Earth planet">
      <Canvas
        shadows
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        className="contact-earth-canvas"
      >
        <Suspense fallback={<CanvasFallback />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={2.2}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <EarthModel />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
