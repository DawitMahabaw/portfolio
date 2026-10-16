import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
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
          <planeGeometry args={[4.4, 3.1]} />
          <meshBasicMaterial 
            map={texture} 
            transparent 
            opacity={0.98} 
            toneMapped={false}
          />
        </mesh>
      )}

      {/* 3D Floating Illuminated Code Badges that have independent depth parallax */}
      <Float speed={2.0} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* React Pill */}
        <group position={[-1.7, 0.9, 0.45]}>
          <mesh>
            <boxGeometry args={[0.75, 0.24, 0.04]} />
            <meshStandardMaterial 
              color="#0c1328" 
              emissive="#06B6D4" 
              emissiveIntensity={0.3} 
              roughness={0.2} 
            />
          </mesh>
        </group>

        {/* Node.js Pill */}
        <group position={[1.65, 0.6, 0.35]}>
          <mesh>
            <boxGeometry args={[0.78, 0.24, 0.04]} />
            <meshStandardMaterial 
              color="#0c1328" 
              emissive="#10B981" 
              emissiveIntensity={0.3} 
              roughness={0.2} 
            />
          </mesh>
        </group>

        {/* REST API Pill */}
        <group position={[-1.5, -0.7, 0.5]}>
          <mesh>
            <boxGeometry args={[0.85, 0.24, 0.04]} />
            <meshStandardMaterial 
              color="#0c1328" 
              emissive="#A855F7" 
              emissiveIntensity={0.35} 
              roughness={0.2} 
            />
          </mesh>
        </group>
      </Float>

      {/* Soft Ambient Radial Backlight in 3D */}
      <mesh position={[0, 0, -0.15]}>
        <planeGeometry args={[4.8, 3.4]} />
        <meshBasicMaterial 
          color="#070c20" 
          transparent 
          opacity={0.5} 
        />
      </mesh>
    </group>
  );
}

// Loading Spinner for 3D canvas
function CanvasLoader() {
  return (
    <div className="workstation-loader" aria-hidden="true">
      <div className="loader-ring" />
      <span className="loader-text">Initializing 3D Workstation…</span>
    </div>
  );
}

export default function Workstation3D() {
  const wrapperRef = useRef(null);

  return (
    <div 
      className="workstation-3d-wrapper" 
      ref={wrapperRef}
      aria-label="Interactive 3D Workstation reacting to cursor movement"
    >
      <div className="workstation-glow-underlay" aria-hidden="true" />
      
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0, 4.4], fov: 42 }}
          dpr={[1, 2]} // Cap DPR at 2 for smooth 60fps performance
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="workstation-canvas"
        >
          {/* Base Lights */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[4, 5, 5]} intensity={1.0} color="#ffffff" />
          <directionalLight position={[-4, 2, 2]} intensity={0.5} color="#A855F7" />

          {/* Mouse Responsive 3D Scene */}
          <MouseResponsiveWorkstation />
        </Canvas>
      </Suspense>

      {/* Floating 3D Depth Specular Highlight */}
      <div className="workstation-mouse-hint" aria-hidden="true">
        <span className="hint-pulse" />
        <span>3D Scene · Moves with cursor</span>
      </div>
    </div>
  );
}
