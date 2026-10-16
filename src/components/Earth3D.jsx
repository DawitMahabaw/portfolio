import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// 3D Planet Component that continuously auto-rotates and DOES NOT respond to cursor
function RotatingPlanetScene() {
  const meshRef = useRef(null);
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/images/contact-planet-earth.jpg', (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      setTexture(tex);
    });
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Steady, smooth planetary rotation - does NOT track or respond to mouse cursor
    meshRef.current.rotation.z += delta * 0.14;

    // Subtle natural breathing float
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 1.2) * 0.04;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Specular Ambient Glow Lights */}
      <pointLight position={[2, 1, 2]} intensity={2.2} color="#38BDF8" distance={6} />
      <pointLight position={[-2, -1, 1]} intensity={1.6} color="#F472B6" distance={5} />

      {texture && (
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <planeGeometry args={[4.4, 4.4]} />
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
      <div className="contact-earth-mobile-visual" aria-label="Rotating Earth planet with stylized ribbon clouds">
        <img 
          src="/images/contact-planet-earth.jpg" 
          alt="Glowing planet Earth with swirling ribbon clouds" 
          className="contact-earth-mobile-img" 
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="contact-earth-3d-wrapper" aria-label="Steadily rotating Earth planet in space">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="contact-earth-canvas"
        >
          {/* Subtle Deep Space Stars matching reference screenshot */}
          <Stars 
            radius={40} 
            depth={35} 
            count={950} 
            factor={3.2} 
            saturation={0} 
            fade 
            speed={0.8} 
          />

          <ambientLight intensity={1.0} />
          <RotatingPlanetScene />
        </Canvas>
      </Suspense>
    </div>
  );
}
