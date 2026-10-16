import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Interactive 3D Earth Component that matches the design image with orbital rings & parallax
function InteractiveEarthScene() {
  const groupRef = useRef(null);
  const cyanRimLight = useRef(null);
  const amberGlowLight = useRef(null);
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/images/contact-earth-visual.webp', (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      setTexture(tex);
    });
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth 3D tilt following mouse cursor for depth
    const targetY = state.pointer.x * 0.28;
    const targetX = -state.pointer.y * 0.18;

    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetY, 4.2, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetX, 4.2, delta);

    // Subtle gentle orbital breathing
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 1.3) * 0.04;

    // Cyan rim light reacts to cursor
    if (cyanRimLight.current) {
      cyanRimLight.current.position.x = 1.2 + state.pointer.x * 0.5;
      cyanRimLight.current.position.y = state.pointer.y * 0.4;
    }

    if (amberGlowLight.current) {
      amberGlowLight.current.position.x = -0.5 - state.pointer.x * 0.3;
      amberGlowLight.current.position.y = -0.3 + state.pointer.y * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Dynamic Specular Point Lights for Depth & Atmosphere Glow */}
      <pointLight 
        ref={cyanRimLight}
        position={[1.5, 0.4, 1.2]} 
        intensity={2.4} 
        color="#38BDF8" 
        distance={4.5} 
      />
      <pointLight 
        ref={amberGlowLight}
        position={[-0.4, -0.2, 0.9]} 
        intensity={1.8} 
        color="#FBBF24" 
        distance={3.5} 
      />

      {/* Earth Artwork with Glowing Diagonal Rings & City Lights */}
      {texture && (
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[4.4, 4.08]} />
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

export default function Earth3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
        (window.matchMedia && window.matchMedia('(hover: none)').matches)
      );
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="contact-earth-mobile-visual" aria-label="Night Earth with orbital rings">
        <img 
          src="/images/contact-earth-visual.webp" 
          alt="Glowing Earth with orbital rings" 
          className="contact-earth-mobile-img" 
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="contact-earth-3d-wrapper" aria-label="Interactive 3D Night Earth">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 4.3], fov: 45 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="contact-earth-canvas"
        >
          {/* Subtle Deep Space Stars */}
          <Stars 
            radius={40} 
            depth={30} 
            count={900} 
            factor={3.0} 
            saturation={0} 
            fade 
            speed={1.0} 
          />

          <ambientLight intensity={0.9} />
          <InteractiveEarthScene />
        </Canvas>
      </Suspense>
    </div>
  );
}
