import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Workstation Scene responding smoothly to Mouse Movement (No dragging required)
function MouseResponsiveWorkstation() {
  const groupRef = useRef(null);
  const cyanGlowRef = useRef(null);
  const purpleGlowRef = useRef(null);

  // Load workstation texture with high quality filtering
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/images/hero-workstation.webp', (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      setTexture(tex);
    });
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth 3D tilt & rotation directly tracking the mouse pointer (normalized -1 to 1)
    const targetY = state.pointer.x * 0.34;   // Horizontal rotation following cursor
    const targetX = -state.pointer.y * 0.20;  // Vertical pitch following cursor

    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetY, 4.5, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetX, 4.5, delta);

    // Subtle breathing float animation
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 1.5) * 0.04;

    // Cyan and purple ambient lights react to cursor
    if (cyanGlowRef.current) {
      cyanGlowRef.current.position.x = 0.8 + state.pointer.x * 0.5;
      cyanGlowRef.current.position.y = -0.3 + state.pointer.y * 0.3;
    }
    if (purpleGlowRef.current) {
      purpleGlowRef.current.position.x = -0.5 - state.pointer.x * 0.4;
      purpleGlowRef.current.position.y = 0.6 + state.pointer.y * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Dynamic Cursor Reactive Point Lights for Specular Glow */}
      <pointLight 
        ref={cyanGlowRef} 
        position={[0.8, -0.3, 0.8]} 
        intensity={2.2} 
        color="#06B6D4" 
        distance={3.5} 
      />
      <pointLight 
        ref={purpleGlowRef} 
        position={[-0.5, 0.6, 0.6]} 
        intensity={2.8} 
        color="#A855F7" 
        distance={4.0} 
      />
      <pointLight 
        position={[1.8, 1.2, 0.4]} 
        intensity={1.2} 
        color="#F59E0B" 
        distance={3.0} 
      />

      {/* Main Workstation 3D Layer with Specular Material */}
      {texture && (
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[4.6, 3.9]} />
          <meshBasicMaterial 
            map={texture} 
            transparent 
            opacity={1} 
            toneMapped={false}
          />
        </mesh>
      )}
    </group>
  );
}

// Loading Spinner for 3D canvas
function CanvasLoader() {
  return (
    <div className="workstation-loader" aria-hidden="true">
      <div className="loader-ring" />
    </div>
  );
}

export default function Workstation3D() {
  const wrapperRef = useRef(null);

  return (
    <div 
      className="workstation-3d-wrapper" 
      ref={wrapperRef}
      aria-label="Developer workstation"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0, 4.4], fov: 42 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="workstation-canvas"
        >
          {/* Base Lights */}
          <ambientLight intensity={0.9} />
          <directionalLight position={[4, 5, 5]} intensity={1.1} color="#ffffff" />
          <directionalLight position={[-4, 2, 2]} intensity={0.6} color="#A855F7" />

          {/* Mouse Responsive 3D Scene */}
          <MouseResponsiveWorkstation />
        </Canvas>
      </Suspense>
    </div>
  );
}
